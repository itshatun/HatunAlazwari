import {
  Code2,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import { Reveal } from "./Reveal";
import { PROJECTS } from "@/data/portfolioData";

const Projects = () => {
  const projects = Array.isArray(PROJECTS?.items)
    ? PROJECTS.items
    : [];

  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="relative py-28 md:py-40 overflow-hidden bg-[#020817]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#020817]" />

      {/* Computer Science Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-blue-600/[0.07] blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20">

        {/* Heading */}
        <Reveal>
          <div className="mb-16">

            <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-400 mb-5">
              <span className="inline-block w-8 h-px bg-blue-400/60 align-middle mr-3" />

              {PROJECTS.label}

              <span className="inline-block w-8 h-px bg-blue-400/60 align-middle ml-3" />
            </p>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              {PROJECTS.headline}
              <span className="text-blue-400">.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-slate-400 text-base sm:text-lg leading-relaxed">
              A selection of projects exploring artificial
              intelligence, software development, and modern
              technology.
            </p>

          </div>
        </Reveal>

        {/* Projects */}
        {projects.length > 0 ? (

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            data-testid="projects-grid"
          >

            {projects.map((project, index) => (

              <Reveal
                key={project.id}
                delay={index * 0.08}
              >

                <article
                  data-testid={`project-card-${index}`}
                  className="group relative h-full overflow-hidden rounded-2xl border border-blue-950/70 bg-[#071426]/75 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_25px_70px_rgba(30,64,175,0.18)]"
                >

                  {/* Project Image */}
                  {project.image && (
                    <div className="relative h-56 sm:h-64 overflow-hidden">

                      <img
                        src={project.image}
                        alt={`${project.title} project`}
                        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-transparent to-transparent" />

                      {/* Number */}
                      <div className="absolute top-5 left-5">
                        <span className="font-mono text-xs text-blue-300 rounded-full border border-blue-400/20 bg-[#020817]/80 backdrop-blur px-3 py-1.5">
                          {project.index}
                        </span>
                      </div>

                      {/* Tag */}
                      <div className="absolute top-5 right-5">
                        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-blue-300 rounded-full border border-blue-400/20 bg-[#020817]/80 backdrop-blur px-3 py-1.5">
                          {project.tag}
                        </span>
                      </div>

                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 sm:p-8">

                    {/* Category + Icon */}
                    <div className="flex items-start justify-between gap-4">

                      <div>

                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400/70 mb-2">
                          {project.category}
                        </p>

                        <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-300">
                          {project.title}
                        </h3>

                      </div>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-900/60 bg-blue-950/40">

                        <Code2
                          size={19}
                          className="text-blue-400"
                        />

                      </div>

                    </div>

                    {/* Description */}
                    <p className="mt-5 text-sm sm:text-base text-slate-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    {Array.isArray(project.highlights) &&
                      project.highlights.length > 0 && (

                        <div className="mt-6 space-y-2">

                          {project.highlights.map(
                            (highlight) => (

                              <div
                                key={highlight}
                                className="flex items-start gap-2 text-sm text-slate-500"
                              >

                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400" />

                                <span>
                                  {highlight}
                                </span>

                              </div>

                            )
                          )}

                        </div>

                      )}

                    {/* Technologies */}
                    {Array.isArray(project.tech) &&
                      project.tech.length > 0 && (

                        <div className="mt-7 flex flex-wrap gap-2">

                          {project.tech.map((tech) => (

                            <span
                              key={tech}
                              className="rounded-full border border-blue-900/60 bg-blue-950/40 px-3 py-1.5 text-xs font-mono text-blue-300"
                            >
                              {tech}
                            </span>

                          ))}

                        </div>

                      )}

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-3">

                      {project.github && (

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-testid={`project-github-btn-${index}`}
                          className="group/button inline-flex items-center gap-2 rounded-full border border-blue-900/70 bg-blue-950/20 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-950/50 hover:text-blue-300"
                        >

                          <Code2 size={16} />

                          GitHub

                          <ArrowUpRight
                            size={14}
                            className="transition-transform group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                          />

                        </a>

                      )}

                      {project.demo &&
                        project.demo !== "#" && (

                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-500"
                          >

                            <ExternalLink size={15} />

                            Live Demo

                          </a>

                        )}

                    </div>

                  </div>

                  {/* Bottom Glow */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                </article>

              </Reveal>

            ))}

          </div>

        ) : (

          <Reveal>

            <div className="rounded-2xl border border-blue-950/70 bg-[#071426]/70 p-10 text-center">

              <Code2
                size={32}
                className="mx-auto mb-4 text-blue-400"
              />

              <p className="text-slate-300">
                Projects coming soon.
              </p>

              <p className="mt-2 text-sm text-slate-500">
                More projects will be added here.
              </p>

            </div>

          </Reveal>

        )}

      </div>
    </section>
  );
};

export default Projects;