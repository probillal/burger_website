/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1224px",
    },
    extend: {
      colors: {
        primaryColor: "#010a5e",
        primaryColorLight: "#010d78",
        secondaryColor: "#FFCC00",
        paragraph: "#c0c0c0",
        greenColor: "#007936",
      },
      keyframes: {
        move: {
          "50%": { transform: "translateY(-1rem)" },
        },
      },
      animation: {
        movingY: "move 2s linear infinite",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
      },
    },
    fontFamily: {
      oswald: ["oswald", "sans-serif"],
      dmsans: ["DM sans", "sans-serif"],
    },
  },
  plugins: [],
};
