const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'AWS', 'Figma', 'Git']

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-head">
        <span className="section-head__tag">
        </span>
        <h2>WHO I AM</h2>
      </div>

      <div className="about__grid">
        <p className="about__bio">
          AI engineer who ships production systems, trains the next wave, and builds quirky things on the side.

          Engineer who likes turning ambiguous problems into clean and working systems.
        </p>
        {/* <ul className="about__skills">
          {skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul> */}
      </div>
    </section>
  )
}
