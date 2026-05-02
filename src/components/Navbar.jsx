const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "My Stack" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="nav-shell">
      <nav className="nav container" aria-label="Primary">
        <a className="nav__brand" href="#top">
          <span className="nav__brand-mark" aria-hidden="true" />
          <span className="sr-only">Home</span>
        </a>
        <ul className="nav__links">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
