/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        card: "#d9d9d91f",
      },
      boxShadow: {
        glass:
          "-3.938px 3.938px 3.938px 0px rgba(255, 255, 255, 0.43) inset, 3.938px -3.938px 3.938px 0px rgba(182, 182, 182, 0.43) inset",
      },
    },
  },
  plugins: [],
};
