/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        teladefundo: "url('./public/BACKGROUND.png')",
      },
      screens: {
        xs: { max: "639px" }, // Aplica-se a telas menores que 640px
      },
    },
  },
  plugins: [],
};
