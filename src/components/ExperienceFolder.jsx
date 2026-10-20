import { Link } from 'react-router-dom'
import FolderShape from './FolderShape.jsx'
import { MAIN_SIZE, NESTED_SIZE, folderTotalWidth } from './folderGeometry.js'

export default function ExperienceFolder({ experience, index, nested = false }) {
  const { slug, code, company, role, period, tone } = experience
  const size = nested ? NESTED_SIZE : MAIN_SIZE
  const tabStep = index % 4
  const width = folderTotalWidth(size)

  return (
    <li
      className={`folder2-item${nested ? ' folder2-item--nested' : ''}`}
      style={{ '--tab-step': tabStep, width }}
    >
      <Link
        className="folder2"
        to={`/experience/${slug}`}
        style={{ '--folder-tone': tone, width, height: size.height }}
        aria-label={`${role} at ${company}, ${period}`}
      >
        <FolderShape size={size} tone={tone} />

        <span className="folder2__tab-label" style={{ left: size.bodyWidth + size.step, top: size.tabTop, width: size.tabWidth - size.step, height: size.tabHeight }}>
          <span className="folder2__code">{code}</span>
          <span className="folder2__company">{company}</span>
        </span>

        <span className="folder2__body-text" style={{ width: size.bodyWidth - 28 }}>
          <span className="folder2__role">{role}</span>
          <span className="folder2__period">{period}</span>
        </span>

        <span className="folder2__open" style={{ left: size.bodyWidth - 40 }} aria-hidden="true">
          →
        </span>
      </Link>
    </li>
  )
}
