import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/portfolioData";

const scrollToHash = (href) => {
  if (window.__lenis) {
    window.__lenis.scrollTo(href, {
      offset: -70,
      duration: 1.4,
    });
  } else {
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          )[0];

        if (visibleSection) {
          setActive(
            `#${visibleSection.target.id}`
          );
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    NAV_LINKS.forEach(({ href }) => {
      const element =
        document.querySelector(href);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll
      );

      observer.disconnect();
    };
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();

    setOpen(false);
    setActive(href);
    scrollToHash(href);
  };

  return (
    <>
      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-panel border-x-0 border-t-0"
            : "bg-transparent border-b border-transparent"
        }`}
        data-testid="main-navbar"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 h-[70px] flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            data-testid="nav-brand-link"
            onClick={(e) =>
              handleNav(e, "#home")
            }
            className="font-display font-bold text-lg tracking-tight text-white"
          >
            HATUN
            <span className="text-lavender">
              .AI
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(
              ({
                label,
                href,
                testid,
              }) => (
                <li
                  key={href}
                  className="relative"
                >
                  <a
                    href={href}
                    data-testid={testid}
                    onClick={(e) =>
                      handleNav(e, href)
                    }
                    className={`relative px-4 py-2 text-sm transition-colors duration-300 ${
                      active === href
                        ? "text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {active === href && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-blue/10 border border-blue/25"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}

                    <span className="relative z-10">
                      {label}
                    </span>
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Mobile Button */}
          <button
            data-testid="nav-mobile-menu-btn"
            onClick={() =>
              setOpen(!open)
            }
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {open ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed inset-0 z-40 glass-panel md:hidden flex flex-col items-center justify-center gap-2"
            data-testid="nav-mobile-menu"
          >
            {NAV_LINKS.map(
              (
                {
                  label,
                  href,
                  testid,
                },
                index
              ) => (
                <motion.a
                  key={href}
                  href={href}
                  data-testid={`mobile-${testid}`}
                  onClick={(e) =>
                    handleNav(e, href)
                  }
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.05 * index,
                    duration: 0.4,
                  }}
                  className={`font-display text-3xl py-3 tracking-tight ${
                    active === href
                      ? "text-lavender"
                      : "text-white"
                  }`}
                >
                  {label}
                </motion.a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;