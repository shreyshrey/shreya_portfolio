import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const sectionLink = (hash) => (isHome ? hash : `/${hash}`)

  return (
    <header className="nav">
      <Link className="nav__brand" to="/">
        <span className="nav__mark">&lt;/&gt;</span>
        <span className="nav__brand-text">
          SHREYA
          <small>ENGINEER&nbsp;/&nbsp;REMOTE</small>
        </span>
      </Link>

      <nav className="nav__links">
        <Link to={sectionLink('#about')}>ABOUT</Link>
        <Link to={sectionLink('#education')}>EDUCATION</Link>
        <Link to={sectionLink('#experience')}>EXPERIENCE</Link>
        <Link to={sectionLink('#skills')}>SKILLS</Link>
        <Link to={sectionLink('#work')}>WORK</Link>
        <Link to={sectionLink('#contact')}>CONTACT</Link>
      </nav>

      <button className="nav__more" aria-label="More">
        •••
      </button>
    </header>
  )
}
