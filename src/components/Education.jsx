const timeline = [
  {
    years: '2021 — 2025',
    title: "MASTER OF SCIENCE",
    field: 'Artifical Intelligence',
    place: 'The University of Leeds',
  },
  {
    years: '2019 — 2021',
    title: 'BACHELOR OF SCIENCE',
    field: 'Computer Science',
    place: 'The University of Southampton',
  },
]

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="education__layout">
        <div className="education__text">
          <div className="section-head">
            <span className="section-head__tag">
              <span className="dot" /> MY JOURNEY
            </span>
            <h2>EDUCATION</h2>
            <p className="education__subtitle">Curiosity, creativity, and a little bit of code.</p>
          </div>

          <ul className="education__list">
            {timeline.map((item) => (
              <li className="education__item" key={item.years}>
                <span className="education__years">{item.years}</span>
                <h3>{item.title}</h3>
                <p>{item.field}</p>
                <span className="education__place">{item.place}</span>
              </li>
            ))}
          </ul>
        </div>

        <img
          className="education__image"
          src="/shreya_education.png"
          alt="Collage of education-related illustrations: books, a graduation cap, a server, and floppy disks"
          
        />
      </div>
    </section>
  )
}
