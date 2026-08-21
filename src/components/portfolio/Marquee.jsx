import { Sparkles } from "lucide-react";
import { MARQUEE_ITEMS } from "@/data/portfolioData";

const Marquee = () => {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="relative overflow-hidden border-y border-blue/10 bg-navy-soft/50 py-7"
      data-testid="editorial-marquee"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-7 pr-7 whitespace-nowrap"
          >
            <span className="font-display text-xl sm:text-2xl md:text-3xl font-medium uppercase tracking-wide text-slate-600">
              {item}
            </span>

            <Sparkles
              size={15}
              className="shrink-0 text-blue-light/50"
            />
          </span>
        ))}
      </div>

      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-obsidian to-transparent" />

      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-obsidian to-transparent" />
    </div>
  );
};

export default Marquee;