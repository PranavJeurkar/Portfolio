import { useEffect, useState } from "react";

const ROTATING = ["AI", "scalable", "cloud-native", "reliable"];

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return undefined;
    const id = window.setInterval(() => {
      setI((n) => (n + 1) % ROTATING.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="hero section" id="top" aria-labelledby="hero-title">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Software Engineer AI focused</p>
          <h1 id="hero-title" className="hero__title">
            I build AI driven
            <br />
            <span className="hero__title-accent">software systems</span>
          </h1>
          <p className="hero__lede">
            I care about{" "}
            <span className="hero__rotate" key={ROTATING[i]}>
              {ROTATING[i]}
            </span>{" "}
            applications with clean architecture, scalable APIs, and real-world
            impact.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View work
            </a>
            <a className="btn btn--ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
        <div className="hero__media" aria-hidden="true">
          <img src={`${import.meta.env.BASE_URL}developer-coding-3d.png`} alt="" />
        </div>
      </div>
    </section>
  );
}
