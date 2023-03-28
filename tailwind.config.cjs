/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
