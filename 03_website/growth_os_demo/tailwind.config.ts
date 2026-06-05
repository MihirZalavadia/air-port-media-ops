import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F6F1E7",
        parchment: "#EFE7D6",
        warmwhite: "#FBF8F1",
        charcoal: "#1F1B16",
        ink: "#2A2620",
        brass: "#A4843D",
        brassDeep: "#7A6027",
        forest: "#1F3B2D",
        moss: "#2F5742",
        oxblood: "#6E2226",
        rule: "#C8B98A",
        muted: "#6B6256",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "'Playfair Display'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      boxShadow: {
        ledger: "0 1px 0 #C8B98A, 0 8px 24px -16px rgba(31,27,22,0.18)",
        plate: "0 0 0 1px #D9CDA3, 0 12px 28px -20px rgba(31,27,22,0.25)",
      },
      backgroundImage: {
        hairline: "repeating-linear-gradient(0deg, #C8B98A 0px, #C8B98A 1px, transparent 1px, transparent 6px)",
      },
    },
  },
  plugins: [],
};

export default config;
