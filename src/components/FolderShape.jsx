import { useId } from 'react'
import { buildFolderPath, buildTabFillPath, folderTotalWidth } from './folderGeometry.js'

const PARCHMENT = '#e9e1cb'

// Pure presentational silhouette: body + integrated right-edge tab as ONE
// continuous outline path. The body fill, grain, bottom-gradient, and the
// border all reuse that exact same `d`, so every layer follows the real
// silhouette. The tab gets its own parchment fill painted on top of the
// body so it reads as a distinct material while the outline above still
// traces one continuous shape — never a rectangle with a tab floating on it.
export default function FolderShape({ size, tone }) {
  const uid = useId()
  const grainId = `folder-grain-${uid}`
  const gradId = `folder-grad-${uid}`
  const width = folderTotalWidth(size)
  const d = buildFolderPath(size)
  const tabFill = buildTabFillPath(size)

  return (
    <svg className="folder2__shape" viewBox={`0 0 ${width} ${size.height}`} width={width} height={size.height} aria-hidden="true">
      <defs>
        <filter id={grainId} x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.07 0" result="whiteNoise" />
          <feComposite in="whiteNoise" in2="SourceAlpha" operator="in" />
        </filter>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="42%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <path className="folder2__fill" d={d} fill={tone} />
      <path d={d} fill={`url(#${gradId})`} />
      <path d={d} fill="#fff" filter={`url(#${grainId})`} style={{ mixBlendMode: 'overlay' }} />
      <path className="folder2__tab-fill" d={tabFill} fill={PARCHMENT} />
      <path d={tabFill} fill="#fff" filter={`url(#${grainId})`} opacity="0.6" style={{ mixBlendMode: 'overlay' }} />
      <path className="folder2__outline" d={d} fill="none" />
    </svg>
  )
}
