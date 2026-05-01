import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#14532d", // emerald-900 — deep forest green
          hover:   "#166534", // emerald-800
          muted:   "#d1fae5", // emerald-100
          subtle:  "#f0fdf4", // emerald-50
        },
        surface: {
          DEFAULT: "#ffffff",
          muted:   "#fafaf9", // stone-50
          subtle:  "#f5f5f4", // stone-100
        },
        ink: {
          DEFAULT: "#18181b", // zinc-900
          secondary: "#52525b", // zinc-600
          muted:     "#a1a1aa", // zinc-400
          faint:     "#e4e4e7", // zinc-200
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        none: "0",
        sm:   "2px",
        DEFAULT: "4px",
        md:   "6px",
        lg:   "8px",
        xl:   "10px",
        "2xl": "12px",
        // nothing larger — no pill/blob shapes
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.06)",
        "card-hover": "0 4px 12px 0 rgb(0 0 0 / 0.09)",
        subtle: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
      letterSpacing: {
        tighter: "-0.03em",
        tight:   "-0.02em",
        snug:    "-0.01em",
        normal:  "0",
        wide:    "0.04em",
        wider:   "0.08em",
        widest:  "0.12em",
      },
    },
  },
  plugins: [],
};
export default config;
