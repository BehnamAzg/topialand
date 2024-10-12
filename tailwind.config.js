/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFDDD0",
        secondary: "#DFEFFF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        tada: {
          "0%": {
            transform: "scale3d(1, 1, 1)",
          },
          "10%, 20%": {
            transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
          },
          "30%, 50%, 70%, 90%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
          },
          "40%, 60%, 80%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
          },
          "100%": {
            transform: "scale3d(1, 1, 1)",
          },
        },
        pan: {
          "0%": {
            "background-position": "0% 0%",
          },
          "100%": {
            "background-position": "100% 0%",
          },
        },
        gradient: {
          to: { "background-position": "-200% center" },
        },
      },
      animation: {
        tada: "tada 1s ease-in-out 1",
        pan: "pan 50s linear infinite",
        gradient: "gradient 8s linear infinite",
      },
    },
  },
  plugins: [],
};
