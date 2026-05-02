import { useScrollReveal } from "../hooks/useScrollReveal.js";

const projects = [
  {
    title: "Twitter Sentiment Analysis",
    bullets: [
      "Built a full-stack sentiment analysis platform using React, Django, and Python ML models, enabling real-time sentiment prediction through REST APIs.",
      "Integrated third-party APIs including Twitter and Wikipedia to collect and process large volumes of social media data.",
      "Designed a responsive UI for dynamic hashtag-based sentiment analysis.",
    ],
    tags: ["ReactJs", "Python", "Django"],
    href: "#top",
  },
  {
    title: "AI Resume and Job Description Matcher",
    bullets: [
      "Developing a GenAI application to compare resumes against job descriptions and generate skill-gap analysis, resume improvement suggestions, and interview preparation questions.",
      "Designing a Streamlit interface for resume upload, job description input, matched skills, missing skills, and personalized application feedback.",
    ],
    tags: ["Python", "Streamlit", "LLM API", "RAG"],
    href: "#projects",
  },
];

export function Projects() {
  const revealRef = useScrollReveal();

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div ref={revealRef} className="container section-reveal">
        <header className="section-header">
          <p className="section-eyebrow reveal-line" style={{ "--stagger": "0" }}>
            Selected work
          </p>
          <h2
            id="projects-title"
            className="section-title reveal-line"
            style={{ "--stagger": "1" }}
          >
            Projects
          </h2>
          <p className="section-lede reveal-line" style={{ "--stagger": "2" }}>
            Applied software and AI projects spanning full-stack development,
            machine learning, and GenAI workflows.
          </p>
        </header>
        <div className="projects__grid">
          {projects.map((p, index) => (
            <a
              key={p.title}
              className="project-card reveal-line"
              href={p.href}
              style={{ "--stagger": String(index + 3) }}
            >
              <div className="project-card__header">
                <h3 className="project-card__title">{p.title}</h3>
                {p.location && (
                  <span className="project-card__location">{p.location}</span>
                )}
              </div>
              <ul className="project-card__bullets">
                {p.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <ul className="project-card__tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
