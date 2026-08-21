import { motion } from "framer-motion";

export const Reveal = ({
  children,
  delay = 0,
  className = "",
  y = 30,
}) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SectionHeading = ({
  label,
  headline,
  align = "left",
}) => (
  <Reveal className={align === "center" ? "text-center" : ""}>
    <p className="font-mono text-xs uppercase tracking-[0.3em] text-lavender mb-4">
      <span className="inline-block w-8 h-px bg-lavender/60 align-middle mr-3" />
      {label}
    </p>

    <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
      {headline}
    </h2>
  </Reveal>
);