import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
  background: "#f0ebe1", // soft newsprint beige
  foreground: "#1a1a1a", // ink black
  border: "#d6d2c4",     // parchment-gray border
  muted: {
    DEFAULT: "#e5e5e5",
    foreground: "#6b7280",
  },
  primary: {
    DEFAULT: "#1a1a1a",
    foreground: "#ffffff",
  },
  accent: {
    DEFAULT: "#444",
    foreground: "#ffffff",
  },
  paper: "#f5f3e7",   // real newspaper paper tone
  ink: "#222222",     // for body text
  gold: "#bfa76f",
  ivory: "#f9f7f1",
},
      fontFamily: {
        serif: ['"Libre Baskerville"', "Georgia", "Times New Roman", "serif"], // elegant serif
        sans: ['"Inter"', "Helvetica", "Arial", "sans-serif"],
        editorial: ['"Playfair Display"', "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bounce-slow": "bounce 3s infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"), // editorial typography plugin
  ],
}

export default config
