/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent)',
        surface: 'var(--surface)',
        border: 'var(--border)',
        'text-muted': 'var(--text-muted)',
      },
      backgroundColor: {
        black: 'var(--black)',
      },
    },
  },
  plugins: [],
};
