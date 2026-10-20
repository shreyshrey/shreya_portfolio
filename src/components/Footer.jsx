export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__links">
        <a href="https://github.com/shreyshrey" target="_blank" rel="noreferrer">
          GITHUB
        </a>
        <a href="www.linkedin.com/in/shreya-vashist" target="_blank" rel="noreferrer">
          LINKEDIN
        </a>
        <a href="mailto:vashistsdip@googlemail.com">EMAIL</a>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} SHREYA. ALL RIGHTS RESERVED.</p>
    </footer>
  )
}
