import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Cpu, Wrench } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { SKILLS } from "@/data/portfolioData";

const SkillBar = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -24 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 24 }}
    transition={{
      duration: 0.5,
      delay: index * 0.07,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="group rounded-2xl border border-blue-950/60 bg-[#071426]/50 p-5 transition-all duration-500 hover:border-blue-500/30 hover:bg-[#071426]/80"
    data-testid={`skill-item-${skill.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")}`}
  >
    <div className="flex items-end justify-between mb-3">
      <div>
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="font-display text-base sm:text-lg font-semibold text-white">
            {skill.name}
          </h3>

          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-300 border border-blue-500/20 rounded-full px-2.5 py-0.5 bg-blue-500/[0.04]">
            {skill.badge}
          </span>
        </div>

        <p className="mt-1 text-xs sm:text-sm text-slate-500">
          {skill.desc}
        </p>
      </div>

      <span className="font-mono text-sm text-blue-400 shrink-0 ml-4">
        {skill.level}%
      </span>
    </div>

    <div className="h-[6px] rounded-full bg-blue-950/80 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          delay: 0.15 + index * 0.07,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="h-full rounded-full bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 group-hover:shadow-[0_0_18px_rgba(59,130,246,0.65)] transition-shadow duration-500"
      />
    </div>
  </motion.div>
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState(
    SKILLS.categories[0].id
  );

  const category = SKILLS.categories.find(
    (item) => item.id === activeTab
  );

  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="relative py-24 md:py-36 bg-[#030B18] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-blue-600/[0.07] blur-[120px] pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-500/[0.04] blur-[140px] pointer-events-none" />

      {/* Technical grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20">

        {/* Heading + Tabs */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">

          <SectionHeading
            label={SKILLS.label}
            headline={SKILLS.headline}
          />

          <Reveal delay={0.15}>
            <div
              className="flex gap-2 p-1.5 rounded-full bg-[#071426] border border-blue-950/70 w-fit"
              data-testid="skill-tabs"
            >
              {SKILLS.categories.map((cat) => {
                const isCore = cat.id === "core";

                return (
                  <button
                    key={cat.id}
                    data-testid={cat.testid}
                    onClick={() =>
                      setActiveTab(cat.id)
                    }
                    className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                      activeTab === cat.id
                        ? "text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {activeTab === cat.id && (
                      <motion.span
                        layoutId="skill-tab-pill"
                        className="absolute inset-0 rounded-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}

                    <span className="relative z-10 flex items-center gap-2">
                      {isCore ? (
                        <Cpu size={15} />
                      ) : (
                        <Wrench size={15} />
                      )}

                      {cat.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Skills */}
        <div
          className="grid lg:grid-cols-2 gap-5"
          data-testid="skills-grid"
        >
          <AnimatePresence mode="wait">
            {category?.items?.map((skill, index) => (
              <SkillBar
                key={`${activeTab}-${skill.name}`}
                skill={skill}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Technical footer */}
        <Reveal delay={0.3}>
          <div className="mt-12 flex items-center gap-3 text-slate-600">
            <Code2 size={15} className="text-blue-500/60" />

            <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
              Always learning · Always building
            </span>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Skills;