/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        blue: {
          900: '#1e3a8a', // Deep blue for primary color
        },
        yellow: {
          500: '#eab308', // Gold accent color
        },
      },
    },
  },
  plugins: [],
};