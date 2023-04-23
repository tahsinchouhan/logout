/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '22px': '22px',
      },
      borderRadius: {
        16: '16px',
      },
    },
  },
  plugins: [],
};
