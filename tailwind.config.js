/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },

      colors: {
        obsidian: {
          DEFAULT: "#050A14",
          soft: "#0A1220",
          raised: "#101B2D",
          purple: "#13233D",
        },

        lavender: {
          DEFAULT: "#60A5FA",
          soft: "#93C5FD",
          faint: "#BFDBFE",
        },

        amethyst: "#3B82F6",

        navy: {
          DEFAULT: "#0B1220",
          dark: "#050A14",
          light: "#13233D",
        },

        blue: {
          DEFAULT: "#3B82F6",
          light: "#60A5FA",
          faint: "#93C5FD",
        },
      },

      borderRadius: {
        lg: "0.75rem",
        md: "0.625rem",
        sm: "0.5rem",
      },

      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },

        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  plugins: [],
};