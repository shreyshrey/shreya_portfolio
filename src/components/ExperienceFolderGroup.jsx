import FolderShape from './FolderShape.jsx'
import { MAIN_SIZE, folderTotalWidth } from './folderGeometry.js'

// Top-level parent folder (e.g. freelance work, or Accenture). Looks like an
// ordinary folder but carries a small "N FILES" cue, and opening it is
// handled by the archive (it swaps the whole rail for a nested view) rather
// than this component — so this just reports the click upward.
export default function ExperienceFolderGroup({ experience, index, onOpen }) {
  const { code, company, period, tone, roles } = experience
  const size = MAIN_SIZE
  const tabStep = index % 4
  const width = folderTotalWidth(size)

  return (
    <li className="folder2-item" style={{ '--tab-step': tabStep, width }}>
      <button
        type="button"
        className="folder2 folder2--group"
        onClick={onOpen}
        style={{ '--folder-tone': tone, width, height: size.height }}
        aria-label={`${company}, ${roles.length} files — open folder`}
      >
        <FolderShape size={size} tone={tone} />

        <span className="folder2__tab-label" style={{ left: size.bodyWidth + size.step, top: size.tabTop, width: size.tabWidth - size.step, height: size.tabHeight }}>
          <span className="folder2__code">{code}</span>
          <span className="folder2__company">{company}</span>
        </span>

        <span className="folder2__body-text" style={{ width: size.bodyWidth - 28 }}>
          <span className="folder2__role">{company}</span>
          <span className="folder2__period">{period}</span>
        </span>

        <span className="folder2__count-badge" aria-hidden="true">
          {roles.length} FILES
        </span>
      </button>
    </li>
  )
}
