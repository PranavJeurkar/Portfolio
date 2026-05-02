import { useScrollReveal } from "../hooks/useScrollReveal.js";

const achievements = [
  "Solved 500+ algorithmic problems on LeetCode, HackerRank, and similar platforms, strengthening expertise in data structures, algorithms, and problem-solving.",
  "Participated in the Flutter International Hackathon and Semicolons Hackathon hosted by Persistent Systems.",
  "Served as a core member of the Developers Club and conducted technical skills sessions for undergraduate students.",
  "Contributed as a Product Owner in the University Scrum software development project, helping manage backlog items, sprint artefacts, project documentation, team coordination, and stakeholder feedback.",
  "Awarded the Engineering and IT Graduate Scholarship at the University of Melbourne.",
  "Served as the Student Representative for the Algorithms and Complexity elective at the University of Melbourne.",
];

export function Achievements() {
  const revealRef = useScrollReveal();

  return (
    <section
      className="section achievements"
      id="achievements"
      aria-labelledby="achievements-title"
    >
      <div ref={revealRef} className="container section-reveal">
        <header className="section-header">
          <p className="section-eyebrow reveal-line" style={{ "--stagger": "0" }}>
            Achievements
          </p>
          <h2
            id="achievements-title"
            className="section-title reveal-line"
            style={{ "--stagger": "1" }}
          >
            Achievements / Extracurricular
          </h2>
        </header>

        <ul className="achievements__list">
          {achievements.map((achievement, index) => (
            <li
              className="achievements__item reveal-line"
              style={{ "--stagger": String(index + 2) }}
              key={achievement}
            >
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
