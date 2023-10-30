/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Black_Text: "#151515",
        Medium_Grey: "#686868",
        Almost_White: "#FAFAFA",
      },
    },
  },
  plugins: [],
};
