import {
  Mail,
  Copy,
  ArrowUpRight,
} from "lucide-react";

import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { CONTACT } from "@/data/portfolioData";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: CONTACT.linkedin,
    icon: "linkedin",
    testid: "contact-linkedin-link",
  },
  {
    label: "GitHub",
    href: CONTACT.github,
    icon: "github",
    testid: "contact-github-link",
  },
  {
    label: "Email",
    href: `mailto:${CONTACT.email}`,
    icon: "mail",
    testid: "contact-email-link",
  },
];

const GitHubIcon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.58 9.58 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.047c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.267 2.37 4.267 5.455v6.287ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.559 20.452h3.557V8.999H3.559v11.453Z" />
  </svg>
);

const Contact = () => {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      toast.success("Email copied to clipboard");
    } catch {
      toast.error("Couldn't copy email");
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-28 md:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-[#071426] to-obsidian" />

      {/* Blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] rounded-full bg-blue/10 blur-[150px] pointer-events-none" />

      {/* Computer Science Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.35) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, black, transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 text-center">

        {/* Label */}
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-light mb-6">
            <span className="inline-block w-8 h-px bg-blue-light/60 align-middle mr-3" />

            {CONTACT.label}

            <span className="inline-block w-8 h-px bg-blue-light/60 align-middle ml-3" />
          </p>
        </Reveal>

        {/* Heading */}
        <Reveal delay={0.1}>
          <h2
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
            data-testid="contact-headline"
          >
            Let's build something{" "}
            <span className="accent-gradient-text text-glow">
              amazing.
            </span>
          </h2>
        </Reveal>

        {/* Description */}
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed">
            {CONTACT.subline}
          </p>
        </Reveal>

        {/* Social Links */}
        <Reveal delay={0.3}>
          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
            data-testid="contact-socials"
          >
            {SOCIALS.map(
              ({ label, href, icon, testid }) => (
                <a
                  key={label}
                  href={href}
                  target={
                    href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  data-testid={testid}
                  className="group inline-flex items-center gap-3 rounded-full glass-panel px-6 py-3.5 text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-blue/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                >

                  {/* LinkedIn */}
                  {icon === "linkedin" && (
                    <span className="flex h-5 w-5 items-center justify-center text-blue-light transition-colors duration-300 group-hover:text-white">
                      <LinkedInIcon />
                    </span>
                  )}

                  {/* GitHub */}
                  {icon === "github" && (
                    <span className="flex h-5 w-5 items-center justify-center text-blue-light transition-colors duration-300 group-hover:text-white">
                      <GitHubIcon />
                    </span>
                  )}

                  {/* Email */}
                  {icon === "mail" && (
                    <Mail
                      size={18}
                      className="text-blue-light transition-colors duration-300 group-hover:text-white"
                    />
                  )}

                  {label}

                  <ArrowUpRight
                    size={14}
                    className="text-slate-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-light"
                  />
                </a>
              )
            )}
          </div>
        </Reveal>

        {/* Copy Email */}
        <Reveal delay={0.4}>
          <button
            onClick={copyEmail}
            data-testid="contact-email-copy-btn"
            className="mt-8 inline-flex items-center gap-2.5 font-mono text-sm text-slate-400 hover:text-blue-light transition-colors duration-300 border-b border-dashed border-slate-600 hover:border-blue-light pb-1"
          >
            <Copy size={14} />

            {CONTACT.email}
          </button>
        </Reveal>

      </div>
    </section>
  );
};

export default Contact;