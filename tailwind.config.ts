import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    { pattern: /bg-(amber|cyan|violet|emerald|fuchsia|orange|pink|rose)-500\/10/ },
    { pattern: /text-(amber|cyan|violet|emerald|fuchsia|orange|pink|rose)-400/ },
    { pattern: /border-(amber|cyan|violet|emerald|fuchsia|orange|pink|rose)-500\/25/ },
    // Para las certificaciones:
    { pattern: /from-(rose|amber|blue|emerald)-500\/20/ },
    { pattern: /to-(rose|amber|blue|emerald)-500\/5/ },
    { pattern: /border-(rose|amber|blue|emerald)-500\/25/ },
    { pattern: /text-(rose|amber|blue|emerald)-400/ },
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        ink: "#050508",
        "ink-light": "#0D0E14",
        "ink-card": "#111218",
        "ink-border": "#1C1E28",
        blue: {
          primary: "#2563EB",
          bright: "#3B82F6",
          glow: "#60A5FA",
          subtle: "#1D3461",
        },
        slate: {
          text: "#CBD5E1",
          muted: "#64748B",
        },
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,99,235,0.18) 0%, transparent 70%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(37,99,235,0.06) 0%, transparent 100%)",
        "noise": "url('/noise.svg')",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "line-grow": "lineGrow 1s ease forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        lineGrow: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
