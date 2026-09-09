import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeScreen } from './screens/HomeScreen'
import { AboutScreen, ContactScreen, NotFoundScreen, ProjectDetailScreen, ProjectsScreen, ResumeScreen, SkillsScreen, SocialsScreen } from './screens/ContentScreens'
import './styles/tokens.css'
import './styles/globals.css'
export default function App() { return <BrowserRouter><Routes><Route path="/" element={<HomeScreen />} /><Route path="/projects" element={<ProjectsScreen />} /><Route path="/projects/:slug" element={<ProjectDetailScreen />} /><Route path="/skills" element={<SkillsScreen />} /><Route path="/about" element={<AboutScreen />} /><Route path="/resume" element={<ResumeScreen />} /><Route path="/contact" element={<ContactScreen />} /><Route path="/socials" element={<SocialsScreen />} /><Route path="*" element={<NotFoundScreen />} /></Routes></BrowserRouter> }
