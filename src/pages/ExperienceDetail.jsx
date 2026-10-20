import { Link, useParams } from 'react-router-dom'
import { getAdjacentExperience, getExperienceBySlug } from '../data/experience.js'

export default function ExperienceDetail() {
  const { slug } = useParams()
  const experience = getExperienceBySlug(slug)

  if (!experience) {
    return (
      <section className="experience-detail">
        <div className="detail__inner detail__notfound">
          <p className="detail__code">FILE NOT FOUND</p>
          <Link className="detail__back" to="/#experience">
            ← BACK TO ARCHIVE
          </Link>
        </div>
      </section>
    )
  }

  const { code, company, role, period, location, summary, responsibilities, skills } = experience
  const { prev, next } = getAdjacentExperience(slug)

  return (
    <section className="experience-detail">
      <div className="detail__inner">
        <Link className="detail__back" to="/#experience">
          ← BACK TO ARCHIVE
        </Link>

        <p className="detail__code">{code}</p>
        <h1 className="detail__role">{role}</h1>
        <div className="detail__meta">
          <span>{company}</span>
          <span>{period}</span>
          <span>{location}</span>
        </div>

        <hr className="detail__rule" />

        <p className="detail__summary">{summary}</p>

        <p className="detail__section-label">RESPONSIBILITIES &amp; CONTRIBUTIONS</p>
        <ul className="detail__list">
          {responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p className="detail__section-label">SKILLS &amp; TOOLS</p>
        <div className="detail__skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <nav className="detail__nav" aria-label="Other experience">
          {prev ? (
            <Link className="detail__nav-link" to={`/experience/${prev.slug}`}>
              <span className="detail__nav-label">← PREVIOUS</span>
              <span className="detail__nav-role">{prev.role}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link className="detail__nav-link" to={`/experience/${next.slug}`}>
              <span className="detail__nav-label">NEXT →</span>
              <span className="detail__nav-role">{next.role}</span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </section>
  )
}
