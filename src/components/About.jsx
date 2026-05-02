import { useScrollReveal } from "../hooks/useScrollReveal.js";

export function About() {
  const revealRef = useScrollReveal();

  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div ref={revealRef} className="container about__grid section-reveal">
        <div>
          <h2
            id="about-title"
            className="section-title reveal-line"
            style={{ "--stagger": "0" }}
          >
            About
          </h2>
          <p className="about__text reveal-line" style={{ "--stagger": "1" }}>
            Software Engineer with 2 years of experience building scalable web
            applications and cloud-native systems, currently specializing in
            AI-driven application development.
          </p>
          <p className="about__text reveal-line" style={{ "--stagger": "2" }}>
            I am pursuing a Master of Information Technology in Artificial
            Intelligence at the University of Melbourne, with a strong interest in
            high-performance, scalable systems that solve real-world problems.
          </p>
          <p className="about__text reveal-line" style={{ "--stagger": "3" }}>
            Skilled in Java, React, RESTful API development, microservices
            architecture, and Azure based cloud deployment, with a strong
            foundation in data structures, algorithms, and object-oriented design.
          </p>
          <div className="about__links reveal-line" style={{ "--stagger": "4" }}>
            <a
              className="about__link"
              href="https://www.linkedin.com/in/pranav-jeurkar-77a134176/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="about__link"
              href="https://github.com/PranavJeurkar"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="about__panel reveal-line" style={{ "--stagger": "5" }}>
          <h3 className="about__panel-title">Focus areas</h3>
          <ul className="about__list">
            <li className="reveal-line" style={{ "--stagger": "6" }}>
              AI-driven applications and intelligent systems
            </li>
            <li className="reveal-line" style={{ "--stagger": "7" }}>
              Scalable Java and React web applications
            </li>
            <li className="reveal-line" style={{ "--stagger": "8" }}>
              Microservices, REST APIs, and Azure cloud deployment
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
