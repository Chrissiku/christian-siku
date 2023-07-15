import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1980px",
    },
    extend: {
      colors: {
        dark: "#1E1E1E",
        purple: "#7E74F1",
        cinder: "#232E35",
        light1: "#FBFBFB",
        light2: "#F1F1F1",
        light3: "#F5F5F5",
        light4: "#D9D9D9",
      },
    },
  },
  plugins: [],
} satisfies Config;
