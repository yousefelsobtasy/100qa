/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0 10px rgba(0, 0, 0, 0.2)'
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        text: 'var(--text-color)',
        highlight: 'var(--highlight-color)',
        bg: 'var(--bg-color)',
        hover: 'var(--hover-color)',
      },
    },
  },
  plugins: [],
};
