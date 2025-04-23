
import type { Config } from "tailwindcss";
import { colors } from "./src/config/tailwind/colors";
import { animations } from "./src/config/tailwind/animations";
import { typography } from "./src/config/tailwind/typography";
import { backgrounds, shadows } from "./src/config/tailwind/backgrounds";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors,
      typography,
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: animations.keyframes,
      animation: animations.animation,
      backgroundImage: backgrounds,
      boxShadow: shadows,
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
