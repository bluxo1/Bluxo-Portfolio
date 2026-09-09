import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeScreen } from './screens/HomeScreen'
import { AboutScreen, ContactScreen, NotFoundScreen, ProjectDetailScreen, ProjectsScreen, ResumeScreen, SkillsScreen, SocialsScreen } from './screens/ContentScreens'
import { CursorSprite } from './components/chrome/CursorSprite'
import '@fontsource-variable/inter/wght.css'
import '@fontsource/barlow-condensed/latin-400.css'
import '@fontsource/barlow-condensed/latin-600.css'
import '@fontsource/barlow-condensed/latin-700.css'
import '@fontsource/barlow-condensed/latin-800.css'
import '@fontsource/ibm-plex-mono/latin-400.css'
import '@fontsource/ibm-plex-mono/latin-500.css'
import '@fontsource/ibm-plex-mono/latin-600.css'
import '@fontsource/ibm-plex-mono/latin-700.css'
import './styles/tokens.css'
import './styles/globals.css'

export default function App() {
  return (
    <BrowserRouter>
      <CursorSprite />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/projects" element={<ProjectsScreen />} />
        <Route path="/projects/:slug" element={<ProjectDetailScreen />} />
        <Route path="/skills" element={<SkillsScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/resume" element={<ResumeScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/socials" element={<SocialsScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  )
}
