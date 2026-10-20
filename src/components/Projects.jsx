const projects = [
  {
    index: '01',
    title: 'Fashion Recommendation System',
    description:
      "A personal project building a prototype recommendation engine for fashion and apparel items based on weather, mood, and the user's clothing inventory.",
    stack: null,
  },
  {
    index: '02',
    title: 'Code Analysis Tool',
    description:
      'A local-first command-line tool that uses an open-source language model to generate unit tests and attempts to convert code between languages. Runs entirely on a local machine, keeping code private and working offline with no API dependencies.',
    stack: 'Python · Ollama · LLM',
  },
]

export default function Projects() {
  return (
    <section className="projects" id="work">
      <div className="section-head">
        <span className="section-head__tag">
          <span className="dot" /> SELECTED WORK
        </span>
        <h2>PROJECTS</h2>
      </div>

      <ul className="projects__list">
        {projects.map((p) => (
          <li className="project" key={p.index}>
            <span className="project__index">{p.index}</span>
            <div className="project__body">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              {p.stack && <span className="project__stack">{p.stack}</span>}
            </div>
            <span className="project__arrow" aria-hidden="true">
              →
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
