/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#071538',
        'custom-purple': '#442670',
        'custom-skyblue': '#66E0C9',
        'custom-celeste': '#142E45',
        'custom-fondodash': '#F1F5F9',
      }},
  },
  plugins: [],
}

