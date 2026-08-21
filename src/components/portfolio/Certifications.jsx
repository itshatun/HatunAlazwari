import { Award, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { CERTIFICATIONS } from "@/data/portfolioData";

const Certifications = () => {
  return (
    <section
      id="certifications"
      data-testid="certifications-section"
      className="relative py-24 md:py-36 bg-obsidian-soft/40 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-blue/[0.08] blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20">

        {/* Heading */}
        <Reveal>
          <SectionHeading
            label={CERTIFICATIONS.label}
            headline={CERTIFICATIONS.headline}
          />
        </Reveal>

        {/* Certifications */}
        <div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
          data-testid="certifications-grid"
        >
          {CERTIFICATIONS.items.map((cert, index) => (
            <Reveal
              key={`${cert.title}-${index}`}
              delay={index * 0.08}
            >
              <article
                className="group relative h-full rounded-2xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-sm p-6 sm:p-7 transition-all duration-500 hover:-translate-y-1 hover:border-blue/30 hover:bg-blue/[0.035] hover:shadow-[0_15px_50px_rgba(59,130,246,0.12)]"
                data-testid={`cert-item-${index}`}
              >

                {/* Top */}
                <div className="flex items-start justify-between gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue/10 border border-blue/20 text-blue-light transition-all duration-500 group-hover:bg-blue/15 group-hover:border-blue/40 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]">
                    <Award size={20} />
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-light/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Date + Badge */}
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-light">
                    {cert.date}
                  </span>

                  {cert.badge && (
                    <span className="rounded-full bg-blue/10 border border-blue/20 px-3 py-1 text-[10px] uppercase tracking-wider text-blue-light">
                      {cert.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="mt-3 font-display text-lg sm:text-xl font-semibold text-white leading-snug group-hover:text-blue-200 transition-colors duration-300">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="mt-2 text-sm font-medium text-blue-light/80">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                  {cert.description}
                </p>

                {/* View Certificate */}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-blue-light"
                  >
                    View Certificate
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                )}

                {/* Bottom line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;