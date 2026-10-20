import { useState } from 'react'
import { experiences } from '../data/experience.js'
import ExperienceFolder from './ExperienceFolder.jsx'
import ExperienceFolderGroup from './ExperienceFolderGroup.jsx'

export default function ExperienceArchive() {
  const [openGroupSlug, setOpenGroupSlug] = useState(null)
  const openGroup = openGroupSlug ? experiences.find((e) => e.slug === openGroupSlug) : null

  return (
    <section className="experience" id="experience">
      <div className="experience__intro">
        <div className="section-head">
          <span className="section-head__tag">
            <span className="dot" /> WHERE I'VE WORKED
          </span>
          <h2>EXPERIENCE</h2>
        </div>
        <span className="experience__hint">
          {openGroup ? openGroup.company.toUpperCase() : "HOVER OR TAP A FILE"}
        </span>
      </div>

      <div className="archive">
        {openGroup ? (
          <div className="archive__nested">
            <button type="button" className="archive__back" onClick={() => setOpenGroupSlug(null)}>
              ← BACK TO EXPERIENCE ARCHIVE
            </button>

            <div className="archive__nested-head">
              <span className="archive__nested-code">{openGroup.code}</span>
              <h3>{openGroup.company}</h3>
              <span className="archive__nested-meta">
                {openGroup.period} · {openGroup.location}
              </span>
            </div>

            <ul className="archive__rail archive__rail--nested">
              {openGroup.roles.map((role, i) => (
                <ExperienceFolder
                  key={role.slug}
                  index={i}
                  nested
                  experience={{
                    ...role,
                    company: openGroup.company,
                    period: openGroup.period,
                    location: openGroup.location,
                    tone: openGroup.tone,
                  }}
                />
              ))}
            </ul>
          </div>
        ) : (
          <ul className="archive__rail">
            {experiences.map((experience, index) =>
              experience.group ? (
                <ExperienceFolderGroup
                  key={experience.slug}
                  experience={experience}
                  index={index}
                  onOpen={() => setOpenGroupSlug(experience.slug)}
                />
              ) : (
                <ExperienceFolder key={experience.slug} experience={experience} index={index} />
              ),
            )}
          </ul>
        )}
      </div>
    </section>
  )
}
