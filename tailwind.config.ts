import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx,mdx}", // Include file nella root se non sono ancora stati spostati
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        surface: "var(--surface)",
        border: "var(--border)",
        "text-muted": "var(--text-muted)",
      },
      backgroundColor: {
        black: "var(--black)",
      }
    },
  },
  plugins: [],
};
export default config;