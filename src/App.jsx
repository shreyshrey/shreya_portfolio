import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import ExperienceDetail from './pages/ExperienceDetail.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="page">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience/:slug" element={<ExperienceDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
