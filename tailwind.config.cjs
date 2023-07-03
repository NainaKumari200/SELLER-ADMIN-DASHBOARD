/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#4F46E5",
        customDark: "#0F172A",
      },
      fontFamily: {
        Montserrat: "Montserrat",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/forms")],
};
