import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { ABOUT } from "@/data/portfolioData";

const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 md:py-36 overflow-hidden"
    >
 
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-blue/[0.07] blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

         
          <div className="lg:col-span-5">
            <SectionHeading
              label={ABOUT.label}
              headline={ABOUT.headline}
            />

            <Reveal delay={0.15}>
              <p className="mt-8 text-base sm:text-lg text-slate-400 leading-relaxed">
                {ABOUT.body}
              </p>
            </Reveal>

           
            <Reveal delay={0.2}>
              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-blue-900/50 bg-blue-950/30 backdrop-blur-sm p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <GraduationCap size={21} />
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-blue-400/70">
                    Education
                  </p>

                  <p className="mt-1 font-display text-base font-semibold text-white">
                    B.S. Computer Science
                  </p>

                  <p className="mt-0.5 text-sm text-blue-300">
                    Taif University
                  </p>
                </div>
              </div>
            </Reveal>

           
            <Reveal delay={0.3}>
              <div className="mt-6 flex flex-wrap gap-2">
                {ABOUT.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-blue/20 bg-blue/[0.05] px-4 py-2 font-mono text-xs text-blue-light"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

         
          <div className="lg:col-span-7 space-y-4">
            {ABOUT.chapters.map((chapter, index) => (
              <Reveal
                key={chapter.number}
                delay={0.1 + index * 0.1}
              >
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 md:p-8 transition-all duration-500 hover:border-blue/25 hover:bg-blue/[0.035] hover:shadow-[0_15px_50px_rgba(37,99,235,0.12)]"
                  data-testid={`about-chapter-${index}`}
                >
                  <div className="flex items-start gap-6">

                    <span className="font-mono text-sm text-blue-light/70 pt-1">
                      {chapter.number}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-display text-lg sm:text-xl font-semibold text-white">
                          {chapter.title}
                        </h3>

                        <ArrowUpRight
                          size={18}
                          className="shrink-0 text-slate-600 transition-all duration-300 group-hover:text-blue-light group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </div>

                      <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
                        {chapter.description}
                      </p>
                    </div>
                  </div>

                  
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-blue-light transition-all duration-500 group-hover:w-full" />
                </motion.article>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
