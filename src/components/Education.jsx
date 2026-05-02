import { useScrollReveal } from "../hooks/useScrollReveal.js";

const education = [
  {
    school: "The University of Melbourne",
    degree: "Master of Information Technology",
    detail: "Specialization in Artificial Intelligence",
    timeline: "Feb 2025 - Dec 2026",
  },
  {
    school: "Savitribai Phule Pune University",
    degree: "Bachelor of Engineering in Computer Engineering",
    detail: "CGPA: 9.02",
    timeline: "Aug 2018 - Jun 2022",
  },
];

export function Education() {
  const revealRef = useScrollReveal();

  return (
    <section
      className="section education"
      id="education"
      aria-labelledby="education-title"
    >
      <div ref={revealRef} className="container section-reveal">
        <div className="section-header">
          <p className="section-eyebrow reveal-line" style={{ "--stagger": "0" }}>
            Education
          </p>
          <h2
            id="education-title"
            className="section-title reveal-line"
            style={{ "--stagger": "1" }}
          >
            Academic Background
          </h2>
        </div>

        <div className="education__timeline">
          {education.map(({ school, degree, detail, timeline }, index) => (
            <article
              className="education__item reveal-line"
              style={{ "--stagger": String(index + 2) }}
              key={school}
            >
              <div className="education__marker" aria-hidden="true" />
              <div className="education__content">
                <div className="education__topline">
                  <h3 className="education__school">{school}</h3>
                  {timeline && <span className="education__date">{timeline}</span>}
                </div>
                <p className="education__degree">{degree}</p>
                <p className="education__detail">{detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
