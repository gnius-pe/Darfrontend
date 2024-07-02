/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        '80': '20rem', // Ajusta el valor según tus necesidades
      },
      colors: {
        'custom-blue': '#071538',
        'custom-purple': '#442670',
      }},
  },
  plugins: [],
}

