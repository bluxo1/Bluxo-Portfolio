import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { menuItems } from '../../lib/routes'
import { useSelectSound } from '../../hooks/useSelectSound'

/* Hand-placed tilts so no two rows share an angle — the ragged, pasted-on stack. */
const tilts = [
  { rot: '-4.2deg', x: 0 }, { rot: '2.6deg', x: 27 }, { rot: '-5.6deg', x: 9 },
  { rot: '1.4deg', x: 39 }, { rot: '-2.8deg', x: 17 }, { rot: '3.7deg', x: 45 }
]

export function MainMenu() {
  const location = useLocation()
  const navigate = useNavigate()
  const playSelect = useSelectSound()
  const [selected, setSelected] = useState(Math.max(0, menuItems.findIndex((item) => item.path === location.pathname)))
  const refs = useRef<Array<HTMLAnchorElement | null>>([])
  const listRef = useRef<HTMLDivElement>(null)
  const [selectorStyle, setSelectorStyle] = useState<React.CSSProperties>({})

  useEffect(() => {
    const index = menuItems.findIndex((item) => item.path === location.pathname)
    if (index >= 0) setSelected(index)
  }, [location.pathname])

  /* Selection drives the artwork drift behind the whole frame. */
  useEffect(() => {
    document.documentElement.style.setProperty('--sel', String(selected))
    return () => { document.documentElement.style.removeProperty('--sel') }
  }, [selected])

  /* Keep the marker attached to the active row, including after responsive reflow. */
  useLayoutEffect(() => {
    const updateSelector = () => {
      const list = listRef.current
      const item = refs.current[selected]
      const row = item?.closest('.menu-row') as HTMLElement | null
      if (!list || !row) return
      setSelectorStyle({
        transform: `translate3d(${row.offsetLeft - 42}px, ${row.offsetTop + row.offsetHeight / 2 - 17}px, 0)`,
      })
    }

    updateSelector()
    window.addEventListener('resize', updateSelector)
    return () => window.removeEventListener('resize', updateSelector)
  }, [selected])

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault()
      const direction = event.key === 'ArrowDown' ? 1 : -1
      const next = (selected + direction + menuItems.length) % menuItems.length
      setSelected(next)
      refs.current[next]?.focus()
      playSelect()
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      playSelect()
      navigate(menuItems[selected].path)
    }
  }

  return (
    <nav className="main-menu" aria-label="Primary navigation" onKeyDown={onKeyDown}>
      <p className="menu-kicker">SELECT DESTINATION</p>
      <div className="menu-list" ref={listRef}>
        <span className="menu-selector" aria-hidden="true" style={selectorStyle}>↗</span>
        {menuItems.map((item, index) => {
          const tilt = tilts[index % tilts.length]
          const delta = index - selected
          return (
            <div
              className="menu-row"
              key={item.path}
              style={{ '--i': index, '--rot': tilt.rot, '--x': `${tilt.x}px`, '--d': delta, '--ad': Math.abs(delta) } as React.CSSProperties}
            >
              <Link
                ref={(el) => { refs.current[index] = el }}
                className={`menu-item ${selected === index ? 'is-selected' : ''}`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
                to={item.path}
                onMouseEnter={() => { setSelected(index); playSelect() }}
                onFocus={() => setSelected(index)}
                onClick={() => playSelect()}
              >
                <span className="menu-index">0{index + 1}</span>
                <span className="menu-label">{item.label}</span>
                <span className="menu-arrow" aria-hidden="true">↗</span>
                <span className="menu-blurb" aria-hidden="true">{item.blurb}</span>
              </Link>
            </div>
          )
        })}
      </div>
      <p className="menu-hint">Arrow keys navigate <span>·</span> Enter selects</p>
    </nav>
  )
}
