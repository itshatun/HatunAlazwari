import { ArrowUp } from "lucide-react";

const Footer = () => (
  <footer
    className="relative border-t border-white/[0.06] py-10"
    data-testid="site-footer"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-5">
      
      <p className="font-display font-bold text-white tracking-tight">
        HATUN<span className="text-lavender">.AI</span>
      </p>

      <p className="text-xs text-slate-500 text-center">
        © {new Date().getFullYear()} Hatun Alazwari — Designed & built with curiosity.
      </p>

      <button
        onClick={() =>
          window.__lenis?.scrollTo(0, {
            duration: 1.6,
          })
        }
        data-testid="footer-back-to-top-btn"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 hover:border-blue/50 hover:text-blue-light hover:-translate-y-1"
        aria-label="Back to top"
      >
        <ArrowUp size={17} />
      </button>

    </div>
  </footer>
);

export default Footer;