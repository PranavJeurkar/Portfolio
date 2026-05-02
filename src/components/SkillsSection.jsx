import { useScrollReveal } from "../hooks/useScrollReveal.js";
import { skillCategories } from "../data/skills.js";

function SkillCard({ item, stagger }) {
  const cls = ["skill-card", "reveal-child", item.featured && "skill-card--wide"]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={cls} style={{ "--stagger": String(stagger) }}>
      <div className="skill-card__badge" aria-hidden="true">
        {item.icon ? (
          <img className="skill-card__icon" src={item.icon} alt="" />
        ) : (
          item.abbr
        )}
      </div>
      <div>
        <h4 className="skill-card__name">{item.name}</h4>
      </div>
    </article>
  );
}

export function SkillsSection() {
  const revealRef = useScrollReveal();
  let stagger = 0;

  return (
    <section
      className="section skills section--tight"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div ref={revealRef} className="skills-reveal container">
        <header className="skills__header reveal-heading">
          <p className="section-eyebrow">Skills</p>
          <h2 id="skills-title" className="section-title">
            My Stack
          </h2>
          <p className="skills__intro">
            Technical skills organized by language, tooling, platform, and
            certification.
          </p>
        </header>

        {skillCategories.map((cat) => (
          <div key={cat.id} className="skills__category">
            <h3 className="skills__category-title reveal-heading">{cat.title}</h3>
            <div
              className={`skills__bento skills__bento--${cat.id}`}
              role="list"
            >
              {cat.items.map((item) => {
                const s = stagger;
                stagger += 1;
                return <SkillCard key={item.name} item={item} stagger={s} />;
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
