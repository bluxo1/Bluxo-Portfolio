import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { menuItems } from '../../lib/routes'
import { useSelectSound } from '../../hooks/useSelectSound'

export function MainMenu() {
  const location = useLocation()
  const navigate = useNavigate()
  const playSelect = useSelectSound()
  const [selected, setSelected] = useState(Math.max(0, menuItems.findIndex((item) => item.path === location.pathname)))
  const refs = useRef<Array<HTMLAnchorElement | null>>([])

  useEffect(() => {
    const index = menuItems.findIndex((item) => item.path === location.pathname)
    if (index >= 0) setSelected(index)
  }, [location.pathname])

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
      {menuItems.map((item, index) => (
        <Link
          ref={(el) => { refs.current[index] = el }}
          className={`menu-item ${selected === index ? 'is-selected' : ''}`}
          aria-current={location.pathname === item.path ? 'page' : undefined}
          to={item.path}
          key={item.path}
          onMouseEnter={() => { setSelected(index); playSelect() }}
          onFocus={() => setSelected(index)}
          onClick={() => playSelect()}
        >
          <span className="menu-index">0{index + 1}</span>
          <span>{item.label}</span>
          <span className="menu-arrow" aria-hidden="true">↗</span>
        </Link>
      ))}
      <p className="menu-hint">Arrow keys navigate <span>·</span> Enter selects</p>
    </nav>
  )
}
