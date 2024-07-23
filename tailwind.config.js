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
        'custom-skyblue': '#66E0C9',
        'custom-celeste': '#142E45',
        'custom-fondodash': '#F1F5F9',
      }},
      gridTemplateRows: {
        // Define the layout for rows
        'layout': 'repeat(3, minmax(0, 1fr))',
      },
      gridTemplateColumns: {
        // Define the layout for columns
        'layout': 'repeat(3, minmax(0, 1fr))',
      },
  },
  plugins: [],
}

