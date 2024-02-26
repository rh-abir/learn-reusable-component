/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        "primary-gradient" : "linear-gradient(30deg, #0606de, #d94def)"
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms'),],
}

