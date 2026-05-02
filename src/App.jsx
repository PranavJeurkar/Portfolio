import { CustomCursor } from "./components/CustomCursor.jsx";
import { ThemeToggle } from "./components/ThemeToggle.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Education } from "./components/Education.jsx";
import { Experience } from "./components/Experience.jsx";
import { SkillsSection } from "./components/SkillsSection.jsx";
import { Projects } from "./components/Projects.jsx";
import { Achievements } from "./components/Achievements.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <CustomCursor />
      <div className="theme-toggle-wrap">
        <ThemeToggle />
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillsSection />
        <Education />
        <Experience />
        <Projects />
        <Achievements />
      </main>
      <Footer />
    </>
  );
}
