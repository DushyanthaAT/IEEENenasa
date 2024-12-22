/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pri_blue: "#1B609A",
        pri_orange: "#D14F15",
      },
    },
  },
  plugins: [],
};
