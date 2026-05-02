export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        <div>
          <h2 className="footer__title">Contact</h2>
          <p className="footer__text">
            Open to internships, graduate roles, and AI/software development
            opportunities.
          </p>
          <p className="footer__text">
            Feel free to reach out for collaborations, project opportunities, or
            developer roles.
          </p>
        </div>
        <div className="footer__actions">
          <a className="btn btn--primary" href="mailto:pranavvjeurkar21@gmail.com">
            Email me
          </a>
          <a
            className="btn btn--ghost"
            href="https://github.com/PranavJeurkar"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        <p className="footer__copy">
          {"\u00A9"} {year} Pranav Vijay Jeurkar. Designed and built with React,
          JavaScript, and CSS.
        </p>
      </div>
    </footer>
  );
}
