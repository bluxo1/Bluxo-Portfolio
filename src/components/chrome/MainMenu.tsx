import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { menuItems } from '../../lib/routes'
import { useSelectSound } from '../../hooks/useSelectSound'

/* Even stack with a subtle alternating tilt — same angle, mirrored side to side. */
const tilts = [
  { rot: '1.5deg', x: 0 }, { rot: '-1.5deg', x: 0 }, { rot: '1.5deg', x: 0 },
  { rot: '-1.5deg', x: 0 }, { rot: '1.5deg', x: 0 }, { rot: '-1.5deg', x: 0 }
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

  /* A quick jolt on just the newly-active row's label — restart the animation by
     forcing reflow, and skip the very first mount so it doesn't fire on load. */
  const didMount = useRef(false)
  useEffect(() => {
    if (!didMount.current) { didMount.current = true; return }
    const label = refs.current[selected]?.querySelector('.menu-label') as HTMLElement | null
    if (!label) return
    label.classList.remove('shake')
    void label.offsetWidth
    label.classList.add('shake')
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

  /* Arrow keys drive selection from anywhere on the home screen; Enter opens the
     active route. Once a row itself has focus, its own activation handles Enter. */
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault()
        const direction = event.key === 'ArrowDown' ? 1 : -1
        setSelected((prev) => {
          const next = (prev + direction + menuItems.length) % menuItems.length
          refs.current[next]?.focus()
          return next
        })
        playSelect()
      } else if (event.key === 'Enter') {
        const active = document.activeElement
        if (active && refs.current.includes(active as HTMLAnchorElement)) return
        event.preventDefault()
        playSelect()
        navigate(menuItems[selected].path)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected, navigate, playSelect])

  return (
    <nav className="main-menu" aria-label="Primary navigation">
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
