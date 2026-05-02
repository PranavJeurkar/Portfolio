import { useScrollReveal } from "../hooks/useScrollReveal.js";

const experiences = [
  {
    company: "Persistent Systems Limited",
    role: "Software Engineer",
    timeline: "Aug 2022 - Jun 2024",
    location: "Pune",
    bullets: [
      "Designed and implemented a scalable micro-frontend architecture using React and Java, improving modularity and enabling independent feature deployments across multiple teams.",
      "Developed RESTful microservices using Java, and MySQL, enabling scalable backend services.",
      "Integrated Azure cloud services for deployment, monitoring, and improved application reliability.",
      "Collaborated in Agile development environments, participating in code reviews, debugging, and SDLC processes to deliver reliable and maintainable software solutions.",
    ],
  },
  {
    company: "Rapid Circle",
    role: "Cloud Intern",
    timeline: "Nov 2021 - Apr 2022",
    location: "",
    bullets: [
      "Designed, developed, and coordinated client projects from initial setup through delivery.",
      "Designed reusable software components following object-oriented design principles, improving maintainability and reducing development redundancy.",
      "Built automation solutions using Microsoft Power Platform, improving business workflow efficiency.",
    ],
  },
];

export function Experience() {
  const revealRef = useScrollReveal();

  return (
    <section
      className="section experience"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div ref={revealRef} className="container section-reveal">
        <div className="section-header">
          <p className="section-eyebrow reveal-line" style={{ "--stagger": "0" }}>
            Experience
          </p>
          <h2
            id="experience-title"
            className="section-title reveal-line"
            style={{ "--stagger": "1" }}
          >
            Professional Timeline
          </h2>
        </div>

        <div className="experience__timeline">
          {experiences.map(({ company, role, timeline, location, bullets }, index) => (
            <article
              className="experience__item reveal-line"
              style={{ "--stagger": String(index + 2) }}
              key={`${company}-${role}`}
            >
              <div className="experience__marker" aria-hidden="true" />
              <div className="experience__content">
                <div className="experience__topline">
                  <div>
                    <h3 className="experience__role">{role}</h3>
                    <p className="experience__company">{company}</p>
                  </div>
                  <div className="experience__meta">
                    <span>{timeline}</span>
                    {location && <span>{location}</span>}
                  </div>
                </div>
                <ul className="experience__list">
                  {bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
