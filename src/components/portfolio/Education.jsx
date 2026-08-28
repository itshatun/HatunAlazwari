import {
  GraduationCap,
  Trophy,
  MapPin,
  CalendarDays,
} from "lucide-react";

import { Reveal, SectionHeading } from "./Reveal";
import { EDUCATION, ACHIEVEMENTS } from "@/data/portfolioData";

import taifTuLogo from "@/assets/taif-tu-logo.png";

const Education = () => {
  return (
    <section
      id="education"
      data-testid="education-section"
      className="relative py-24 md:py-36"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">

          <div>
            <SectionHeading
              label={EDUCATION.label}
              headline={EDUCATION.headline}
            />

            <Reveal delay={0.15}>
              <div
                className="mt-10 glass-panel rounded-2xl p-8 relative overflow-hidden group transition-all duration-500 hover:border-blue/30"
                data-testid="education-card"
              >

                <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-blue/10 blur-[80px] pointer-events-none" />

                <div className="relative flex items-start justify-between gap-8">

                  <div className="flex-1">

                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue/10 border border-blue/25 text-blue-light mb-6">
                      <GraduationCap size={22} />
                    </span>

                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-white tracking-tight">
                      {EDUCATION.degree}
                    </h3>

                    <div className="mt-3 flex items-center gap-2 text-blue-light">
                      <MapPin size={17} />

                      <p className="text-sm font-medium">
                        {EDUCATION.institution}
                      </p>
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                      <CalendarDays
                        size={15}
                        className="text-slate-500"
                      />

                      <p className="font-mono text-xs text-slate-500 tracking-wider">
                        {EDUCATION.period}
                      </p>
                    </div>

                  </div>

                  <div className="shrink-0 flex items-center justify-center pt-2">

                    <img
                      src={taifTuLogo}
                      alt="TU"
                      className="
                        w-32
                        sm:w-40
                        md:w-44
                        h-auto
                        object-contain
                        brightness-0
                        invert
                        opacity-90
                        transition-all
                        duration-300
                        group-hover:opacity-100
                      "
                    />

                  </div>
                </div>

                <div className="relative mt-7 pt-6 border-t border-white/[0.06]">

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {EDUCATION.focus}
                  </p>

                  <p className="mt-4 inline-flex rounded-full border border-blue/20 bg-blue/[0.05] px-4 py-2 text-xs font-medium text-blue-light">
                    {EDUCATION.note}
                  </p>

                </div>

              </div>
            </Reveal>
          </div>


          <div>

            <SectionHeading
              label="Achievements & Experience"
              headline="Beyond the classroom"
            />

            <div
              className="mt-10 space-y-4"
              data-testid="achievements-list"
            >

              {ACHIEVEMENTS.map((achievement, index) => (
                <Reveal
                  key={achievement.title}
                  delay={0.1 * index}
                >

                  <div
                    className="
                      group
                      flex
                      gap-5
                      items-start
                      rounded-2xl
                      border
                      border-white/[0.06]
                      bg-white/[0.02]
                      p-5
                      transition-all
                      duration-500
                      hover:bg-blue/[0.05]
                      hover:border-blue/25
                      hover:-translate-y-0.5
                    "
                    data-testid={`achievement-item-${index}`}
                  >

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue/10 border border-blue/20 text-blue-light">

                      <Trophy size={16} />

                    </span>


                    <div>

                      <div className="flex flex-wrap items-baseline gap-x-3">

                        <h3 className="font-display text-base sm:text-lg font-semibold text-white">
                          {achievement.title}
                        </h3>

                        <span className="font-mono text-xs text-blue-light/80">
                          {achievement.year}
                        </span>

                      </div>

                      <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                        {achievement.desc}
                      </p>

                    </div>

                  </div>

                </Reveal>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
