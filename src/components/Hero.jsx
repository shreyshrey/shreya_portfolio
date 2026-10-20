export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__sky" aria-hidden="true">
        <div className="hero__sky-overlay" />
      </div>

      <div className="hero__tag hero__tag--left">
        <span className="dot" /> PORTFOLIO / 2026
      </div>
      <div className="hero__tag hero__tag--right">
        WORK 01 <span className="rule" /> <span className="dot" />
      </div>

      <div className="hero__stage">
        <h1 className="hero__headline">LET&apos;S BUILD YOUR VISION TOGETHER</h1>
        <div className="hero__plank">
          <div className="hero__plank-bar">
            <span>DEVELOP</span>
            <span className="hero__plank-dot" aria-hidden="true">•</span>
            <span>INNOVATE</span>
          </div>
          <div className="hero__plank-bar">
            <span>CREATIVE</span>
            <span className="hero__plank-dot" aria-hidden="true">•</span>
            <span>MACHINE LEARNING</span>
          </div>
        </div>
      </div>

      <div className="hero__copy">
        <p className="hero__eyebrow">A NEW ERA OF BUILDING THINGS.</p>
        <p className="hero__lines">
          Rooted in logic.
          <br />
          Designed for impact.
        </p>
      </div>

      <a className="hero__cta" href="#work">
        VIEW PROJECTS <span aria-hidden="true">→</span>
      </a>

      <div className="hero__badge" aria-hidden="true">
        <svg viewBox="0 0 160 160">
          <defs>
            <path id="badgeCircle" d="M80,80 m-62,0 a62,62 0 1,1 124,0 a62,62 0 1,1 -124,0" />
          </defs>
          <text fontSize="10.5" letterSpacing="2" fill="currentColor">
            <textPath href="#badgeCircle" startOffset="0%">
              SHIP YOUR IDEAS · BUILD YOUR STORY · SHIP YOUR IDEAS ·
            </textPath>
          </text>
        </svg>
        <span className="hero__badge-year">SV</span>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="dot" /> SCROLL
      </div>
    </section>
  )
}
