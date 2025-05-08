


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        'Merriweather': ['"Merriweather"', 'sans-serif'],
        heading: ["'Montserrat'", 'serif'],
        'Montserrat': ['"Montserrat"', 'sans-serif'],
        Merrylight: ["'Merriweather_36', 'serif'"],
        'Montserrat-reg': ['"Montserrat-regular"', 'sans-serif'],
        'Montserrat-Lite': ['"Montserrat-light"', 'sans-serif'],
      },
      height: {
        'screen-60': '60vh',
      },
    },
  },
  plugins: [
    
  ],
};
