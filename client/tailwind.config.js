/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merienda: ['Merienda', 'cursive'],
      },
      colors: {
        primary: "#7A2F83",
        secondary: "#B92F72",
        accent: "#E9BFBD",
        highlight: "#EE4043",
        light: "#FFFFFF",
      },
    },
  },
  plugins: [],
}

