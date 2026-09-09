import { MainMenu } from '../components/chrome/MainMenu'
import { Hud } from '../components/chrome/Hud'
import { BgLayers } from '../components/chrome/BgLayers'
import { homeBg } from '../lib/assets'
import { site } from '../data/site'

export function HomeScreen() {
  return (
    <div className="home-frame">
      <BgLayers image={homeBg} />
      <Hud />
      <main id="main-content" className="home-content">
        <div className="hero-copy">
          <p className="eyebrow">[ ACCESS GRANTED / 2026 ]</p>
          <div className="signal"><span className="signal-dot" /> OPEN TO THE RIGHT PROBLEM</div>
          <h1>{site.name}</h1>
          <p className="role">{site.role}</p>
          <p className="tagline">{site.tagline}</p>
          <p className="location">LOC. / {site.location}</p>
        </div>
        <MainMenu />
        <div className="hero-mark" aria-hidden="true">
          <span>SS</span>
          <small>SHIKHAR<br />SHARMA</small>
        </div>
      </main>
    </div>
  )
}
