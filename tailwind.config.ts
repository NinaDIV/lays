import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        token16: "var(--radius-16)",
        token20: "var(--radius-20)",
        token24: "var(--radius-24)",
        token32: "var(--radius-32)",
      },
      fontFamily: {
        script: ['"Brush Script MT"', '"Segoe Script"', "cursive"],
      },
      transitionTimingFunction: {
        premium: "var(--ease-premium)",
      },
      keyframes: {
        "badge-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.12)" },
        },
        "light-sweep": {
          "0%": { transform: "translateX(0) skewX(-18deg)" },
          "100%": { transform: "translateX(320%) skewX(-18deg)" },
        },
      },
      animation: {
        "badge-pulse": "badge-pulse 2.2s ease-in-out infinite",
        "light-sweep": "light-sweep 0.95s var(--ease-premium)",
      },
    },
  },
  plugins: [],
};

export default config;
