/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        'foundersgrotesk': ["Founders Grotesk X-Condensed", "Poppins"],
        'neue': ["Neue Montreal"],
      },
    },
  },
  plugins: [],
}

