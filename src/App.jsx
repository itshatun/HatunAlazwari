import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";

import "./index.css";

import Navbar from "./components/portfolio/Navbar";
import Hero from "./components/portfolio/Hero";
import Marquee from "./components/portfolio/Marquee";
import About from "./components/portfolio/About";
import Education from "./components/portfolio/Education";
import Skills from "./components/portfolio/Skills";
import Projects from "./components/portfolio/Projects";
import Certifications from "./components/portfolio/Certifications";
import Contact from "./components/portfolio/Contact";
import Footer from "./components/portfolio/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
    });

    window.__lenis = lenis;

    let raf;

    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="min-h-screen bg-obsidian text-slate-100 font-sans">
      <div className="noise-overlay" />

      <Navbar />

      <main>
        <Hero />

        <Marquee />

        <About />

        <Education />

        <Skills />

        <Projects />

        <Certifications />

        <Contact />
      </main>

      <Footer />

      <Toaster
        theme="dark"
        position="bottom-center"
      />
    </div>
  );
}

export default App;
