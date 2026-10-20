import { useMemo, useState } from 'react'
import { forceCenter, forceCollide, forceLink, forceManyBody, forceSimulation } from 'd3-force'
import { skillCategories } from '../data/skills.js'

const WIDTH = 1100
const HEIGHT = 900
const CENTER = { x: WIDTH / 2, y: HEIGHT / 2 }

function buildGraph() {
  const nodes = [{ id: 'root', type: 'root', label: 'CORE' }]
  const links = []
  const totalSkills = skillCategories.reduce((sum, c) => sum + c.items.length, 0)

  skillCategories.forEach((cat, ci) => {
    const angle = (ci / skillCategories.length) * Math.PI * 2 - Math.PI / 2
    nodes.push({
      id: cat.id,
      type: 'category',
      label: cat.label,
      code: cat.code,
      count: cat.items.length,
      x: CENTER.x + Math.cos(angle) * 230,
      y: CENTER.y + Math.sin(angle) * 230,
    })
    links.push({ source: 'root', target: cat.id, kind: 'core' })

    cat.items.forEach((skill, si) => {
      const spread = (si - (cat.items.length - 1) / 2) * 0.32
      const a = angle + spread
      const id = `${cat.id}::${skill}`
      nodes.push({
        id,
        type: 'skill',
        label: skill,
        category: cat.id,
        categoryLabel: cat.label,
        x: CENTER.x + Math.cos(a) * 340,
        y: CENTER.y + Math.sin(a) * 340,
      })
      links.push({ source: cat.id, target: id, kind: 'skill' })
    })
  })

  return { nodes, links, totalSkills }
}

function layout() {
  const { nodes, links, totalSkills } = buildGraph()

  const simulation = forceSimulation(nodes)
    .force(
      'link',
      forceLink(links)
        .id((d) => d.id)
        .distance((l) => (l.kind === 'core' ? 180 : 68))
        .strength((l) => (l.kind === 'core' ? 0.7 : 0.9)),
    )
    .force(
      'charge',
      forceManyBody().strength((d) => (d.type === 'root' ? -700 : d.type === 'category' ? -420 : -90)),
    )
    .force('center', forceCenter(CENTER.x, CENTER.y))
    .force(
      'collide',
      forceCollide()
        .radius((d) =>
          d.type === 'root' ? 46 : d.type === 'category' ? Math.max(70, d.label.length * 3.9 + 10) : 24,
        )
        .iterations(2),
    )
    .stop()

  for (let i = 0; i < 320; i++) simulation.tick()

  const byId = new Map(nodes.map((n) => [n.id, n]))
  return { nodes, links: links.map((l) => ({ ...l, source: byId.get(l.source.id || l.source), target: byId.get(l.target.id || l.target) })), totalSkills }
}

function connectedSet(id, nodes, links) {
  if (!id) return null
  const node = nodes.find((n) => n.id === id)
  const set = new Set([id])
  if (node?.type === 'category') {
    set.add('root')
    links.forEach((l) => {
      if (l.source.id === id || l.target.id === id) {
        set.add(l.source.id)
        set.add(l.target.id)
      }
    })
  } else if (node?.type === 'skill') {
    set.add(node.category)
    set.add('root')
  } else if (node?.type === 'root') {
    nodes.forEach((n) => {
      if (n.type === 'category') set.add(n.id)
    })
  }
  return set
}

export default function SkillsTopology() {
  const { nodes, links, totalSkills } = useMemo(layout, [])
  const [active, setActive] = useState(null)
  const [selected, setSelected] = useState(null)

  const highlighted = selected || active
  const connected = connectedSet(highlighted, nodes, links)

  const selectedNode = selected ? nodes.find((n) => n.id === selected) : null

  const choose = (id) => setSelected((s) => (s === id ? null : id))

  return (
    <div className="topo">
      <div className="topo__scroll">
        <svg
          className="topo__canvas"
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          width={WIDTH}
          height={HEIGHT}
          role="img"
          aria-label="Network topology diagram of skill categories and individual skills"
        >
          <g className="topo__legend" transform={`translate(${WIDTH - 232}, 24)`}>
            <rect x={0} y={0} width={210} height={108} rx={2} />
            <text x={14} y={22} className="topo__legend-title">
              LEGEND
            </text>
            <circle cx={20} cy={42} r={6} className="topo__legend-dot topo__legend-dot--category" />
            <text x={36} y={46}>
              Category node
            </text>
            <circle cx={20} cy={64} r={3.5} className="topo__legend-dot topo__legend-dot--skill" />
            <text x={36} y={68}>
              Skill node
            </text>
            <line x1={12} y1={84} x2={28} y2={84} className="topo__legend-line" />
            <text x={36} y={88}>
              Connection
            </text>
          </g>

          <text className="topo__meta" x={20} y={HEIGHT - 16}>
            {skillCategories.length} NODES · {totalSkills} SKILLS · NODE_00 // SKILL TOPOLOGY
          </text>

          {links.map((l, i) => {
            const isOn = connected && connected.has(l.source.id) && connected.has(l.target.id)
            return (
              <line
                key={i}
                className={`topo-link topo-link--${l.kind}${isOn ? ' is-on' : ''}${
                  connected && !isOn ? ' is-dimmed' : ''
                }`}
                x1={l.source.x}
                y1={l.source.y}
                x2={l.target.x}
                y2={l.target.y}
              />
            )
          })}

          {nodes.map((n) => {
            const isOn = connected ? connected.has(n.id) : false
            const isDimmed = connected ? !isOn : false
            const isSelected = selected === n.id

            if (n.type === 'root') {
              return (
                <g
                  key={n.id}
                  className={`topo-node topo-node--root${isOn ? ' is-on' : ''}`}
                  transform={`translate(${n.x}, ${n.y})`}
                >
                  <circle r={22} className="topo-node__ring" />
                  <circle r={8} className="topo-node__core" />
                </g>
              )
            }

            if (n.type === 'category') {
              const boxW = Math.max(120, n.label.length * 7.8 + 20)
              return (
                <g
                  key={n.id}
                  className={`topo-node topo-node--category${isOn ? ' is-on' : ''}${isDimmed ? ' is-dimmed' : ''}${
                    isSelected ? ' is-selected' : ''
                  }`}
                  transform={`translate(${n.x}, ${n.y})`}
                  tabIndex={0}
                  role="button"
                  aria-label={`${n.label}, ${n.count} skills`}
                  aria-pressed={isSelected}
                  onMouseEnter={() => setActive(n.id)}
                  onMouseLeave={() => setActive((a) => (a === n.id ? null : a))}
                  onFocus={() => setActive(n.id)}
                  onBlur={() => setActive((a) => (a === n.id ? null : a))}
                  onClick={() => choose(n.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      choose(n.id)
                    }
                  }}
                >
                  <circle r={30} className="topo-node__hit" />
                  <rect x={-boxW / 2} y={-14} width={boxW} height={28} rx={2} className="topo-node__box" />
                  <text className="topo-node__code" y={-20} textAnchor="middle">
                    {n.code}
                  </text>
                  <text className="topo-node__label" y={5} textAnchor="middle">
                    {n.label}
                  </text>
                </g>
              )
            }

            return (
              <g
                key={n.id}
                className={`topo-node topo-node--skill${isOn ? ' is-on' : ''}${isDimmed ? ' is-dimmed' : ''}${
                  isSelected ? ' is-selected' : ''
                }`}
                transform={`translate(${n.x}, ${n.y})`}
                tabIndex={0}
                role="button"
                aria-label={`${n.label} — ${n.categoryLabel}`}
                aria-pressed={isSelected}
                onMouseEnter={() => setActive(n.id)}
                onMouseLeave={() => setActive((a) => (a === n.id ? null : a))}
                onFocus={() => setActive(n.id)}
                onBlur={() => setActive((a) => (a === n.id ? null : a))}
                onClick={() => choose(n.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    choose(n.id)
                  }
                }}
              >
                <circle r={16} className="topo-node__hit" />
                <circle r={3.5} className="topo-node__dot" />
                <text className="topo-node__skill-label" x={10} y={4}>
                  {n.label}
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      <div className="topo__panel" aria-live="polite">
        {selectedNode?.type === 'skill' ? (
          <>
            <span className="topo__panel-eyebrow">SKILL NODE</span>
            <span className="topo__panel-title">{selectedNode.label}</span>
            <span className="topo__panel-meta">{selectedNode.categoryLabel}</span>
          </>
        ) : selectedNode?.type === 'category' ? (
          <>
            <span className="topo__panel-eyebrow">{selectedNode.code}</span>
            <span className="topo__panel-title">{selectedNode.label}</span>
            <span className="topo__panel-meta">
              {skillCategories.find((c) => c.id === selectedNode.id)?.items.join(' · ')}
            </span>
          </>
        ) : (
          <>
            <span className="topo__panel-eyebrow">SKILL TOPOLOGY</span>
            <span className="topo__panel-meta">Select a node to trace its connections.</span>
          </>
        )}
      </div>
    </div>
  )
}
