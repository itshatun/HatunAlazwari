import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

import ParticleField from "./ParticleField";
import { HERO } from "@/data/portfolioData";

const lineVariants = {
  hidden: {
    y: "115%",
  },

  visible: (i) => ({
    y: "0%",
    transition: {
      duration: 1,
      delay: 0.35 + i * 0.14,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Hero = () => {
  const { scrollY } = useScroll();

  const contentY = useTransform(
    scrollY,
    [0, 700],
    [0, 140]
  );

  const contentOpacity = useTransform(
    scrollY,
    [0, 500],
    [1, 0]
  );

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, {
    stiffness: 40,
    damping: 20,
  });

  const sy = useSpring(my, {
    stiffness: 40,
    damping: 20,
  });

  const onMouseMove = (e) => {
    const {
      innerWidth,
      innerHeight,
    } = window;

    mx.set(
      (e.clientX / innerWidth - 0.5) * 30
    );

    my.set(
      (e.clientY / innerHeight - 0.5) * 30
    );
  };

  const goTo = (e, href) => {
    e.preventDefault();

    if (window.__lenis) {
      window.__lenis.scrollTo(href, {
        offset: -70,
        duration: 1.4,
      });
    } else {
      document
        .querySelector(href)
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }
  };

  return (
    <section
      id="home"
      data-testid="hero-section"
      onMouseMove={onMouseMove}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-[#07101F] to-obsidian" />

      {/* Main blue glow */}
      <motion.div
        style={{
          x: sx,
          y: sy,
        }}
        className="absolute -top-32 -left-32 w-[34rem] h-[34rem] rounded-full bg-blue/15 blur-[130px] animate-pulse-glow"
      />

      {/* Secondary blue glow */}
      <motion.div
        style={{
          x: sx,
          y: sy,
        }}
        className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-blue/10 blur-[120px]"
      />

      {/* Computer Science Grid */}
      <div
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(96,165,250,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.25) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)",
        }}
      />

      {/* Particles */}
      <ParticleField />

      {/* Main Content */}
      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 w-full pt-28 pb-16"
      >

        {/* Name */}
        <h1
          className="font-display font-bold tracking-tight leading-[1.02] text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"
          data-testid="hero-name"
        >
          {HERO.name.map((line, i) => (
            <span
              key={line}
              className="block overflow-hidden pb-1"
            >
              <motion.span
                custom={i}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className={`block ${
                  i === 1
                    ? "accent-gradient-text text-glow"
                    : ""
                }`}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* University + Interests */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.85,
            duration: 0.8,
          }}
          className="mt-6"
        >
          <p className="text-lg sm:text-xl font-medium text-blue-light">
            Computer Science Student at Taif University
          </p>

          <p className="mt-2 text-sm sm:text-base text-slate-500">
            Interested in Artificial Intelligence, Software & Technology
          </p>
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
          className="mt-6 max-w-xl text-base sm:text-lg text-slate-400 leading-relaxed"
          data-testid="hero-intro"
        >
          {HERO.intro}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            data-testid="hero-cta-projects"
            onClick={(e) =>
              goTo(e, "#projects")
            }
            className="group relative inline-flex items-center gap-2 rounded-full bg-blue px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-light hover:shadow-[0_0_40px_rgba(59,130,246,0.45)]"
          >
            View My Work

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <a
            href="#contact"
            data-testid="hero-cta-connect"
            onClick={(e) =>
              goTo(e, "#contact")
            }
            className="inline-flex items-center gap-2 rounded-full border border-blue/30 px-7 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue/60 hover:bg-blue/10"
          >
            Let's Connect
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden max-w-3xl border border-white/[0.06]"
          data-testid="hero-stats"
        >

          {/* University */}
          <div className="bg-obsidian-soft/80 backdrop-blur px-6 py-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500 mb-1.5">
              University
            </p>

            <p className="text-sm font-medium text-slate-200">
              Taif University
            </p>
          </div>

          {/* Major */}
          <div className="bg-obsidian-soft/80 backdrop-blur px-6 py-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500 mb-1.5">
              Major
            </p>

            <p className="text-sm font-medium text-slate-200">
              Computer Science
            </p>
          </div>

          {/* Interests */}
          <div className="bg-obsidian-soft/80 backdrop-blur px-6 py-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500 mb-1.5">
              Interests
            </p>

            <p className="text-sm font-medium text-slate-200">
              AI • Software • Technology
            </p>
          </div>

        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 2,
          duration: 1,
        }}
        onClick={(e) =>
          goTo(e, "#about")
        }
        data-testid="hero-scroll-indicator"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-slate-500 hover:text-lavender transition-colors"
        aria-label="Scroll to about"
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.button>

    </section>
  );
};

export default Hero;