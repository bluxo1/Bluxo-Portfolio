import { Link, useLocation } from 'react-router-dom'
import { useSoundPreference } from '../../hooks/useSoundPreference'
import { RightsNotice } from './RightsNotice'

export function Hud() {
  const location = useLocation(); const [sound, toggleSound] = useSoundPreference()
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="hud-top"><Link to="/" className="brand-mark" aria-label="Home"><span>MV</span><strong>COMMAND / 01</strong></Link><div className="hud-route">{location.pathname === '/' ? 'ENTRY POINT' : location.pathname.slice(1).toUpperCase()}</div><button className="sound-toggle" onClick={toggleSound} aria-pressed={sound} aria-label={sound ? 'Mute interface sounds' : 'Enable interface sounds'}>{sound ? 'SND / ON' : 'SND / OFF'}</button></header>
    <div className="hud-bottom"><span>SYS. ONLINE</span><span className="hud-line" aria-hidden="true" /><RightsNotice /></div>
  </>
}
