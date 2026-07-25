/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,json}"],
  theme: {
    extend: {
      colors: {
        portfolio: {
          black: "#05070d",
          dark: "#080d18",
          navy: "#0d1b35",
          blue: "#4ea8ff",
          softBlue: "#8ecbff",
          white: "#f8fafc",
          muted: "#94a3b8",
          line: "rgba(148, 163, 184, 0.22)"
        }
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "monospace"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(78, 168, 255, 0.18)",
        card: "0 24px 80px rgba(0, 0, 0, 0.32)"
      },
      backgroundImage: {
        radialGlow:
          "radial-gradient(circle at top, rgba(78, 168, 255, 0.18), transparent 32rem)"
      }
    }
  },
  plugins: []
};