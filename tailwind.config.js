/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend:{
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
        fontFamily: {
          montserrat: ['var(--font-montserrat)'],
        },
        keyframes: {
            pageTurn: {
              "0%": { transform: "rotateY(0deg)", opacity: "1" },
              "50%": { transform: "rotateY(-90deg)", opacity: "0.7" },
              "100%": { transform: "rotateY(-180deg)", opacity: "0" },
            },
          },
          animation: {
            pageTurn: "pageTurn 0.8s ease-in-out forwards",
          },
      },
    },
    plugins: [],
  };
  