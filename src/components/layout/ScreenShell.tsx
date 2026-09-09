import { ReactNode, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Hud } from '../chrome/Hud'
import { BgLayers } from '../chrome/BgLayers'
import { menuItems } from '../../lib/routes'
import { aboutBg, contactBg, skillsBg } from '../../lib/assets'

const screenBg: Record<string, string> = {
  '/about': aboutBg,
  '/contact': contactBg,
  '/skills': skillsBg,
}

export function ScreenShell({ title, eyebrow, children, back = true }: { title: string; eyebrow: string; children: ReactNode; back?: boolean }) {
  const heading = useRef<HTMLHeadingElement>(null)
  const navigate = useNavigate()
  const location = useLocation()
  const bg = screenBg[location.pathname]
  useEffect(() => { heading.current?.focus() }, [title])
  return (
    <div className="app-frame">
      <BgLayers image={bg} />
      <Hud />
      <main id="main-content" className="screen-content">
        {back && <button className="back-button" onClick={() => navigate(-1)} aria-label="Go back">← back</button>}
        <p className="eyebrow">{eyebrow}</p>
        <h1 ref={heading} tabIndex={-1}>{title}</h1>
        {children}
      </main>
      <nav className="mobile-nav" aria-label="Secondary navigation">
        {menuItems.map((item) => <Link to={item.path} key={item.path}>{item.label}</Link>)}
      </nav>
    </div>
  )
}
