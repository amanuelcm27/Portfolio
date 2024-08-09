/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '9/10': '90%', 
        '4k':'42rem',
      },
      boxShadow: {
        'custom-lg': '0 0 60px #0345fc',
        
      },
      width: {
        '4k':'42rem',
      }
    },
  },
  plugins: [],
}

