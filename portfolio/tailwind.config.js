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
        '6/10':"60%",
        '8/10':'80%',
        '2/10':'20%',
        '1/10':"10%",
        '500px':'500px',
        '4k':'42rem',
        
      },
      boxShadow: {
        'custom-lg': '0 0 60px #0345fc',
      },
      screens : {
        '2k':'2560px'
      },
      width: {
        '4k':'42rem',
        '9/10': '90%', 
        '6/10':"60%",
        '8/10':'80%',
        '2/10':'20%',
        '1/10':"10%",
      },
      colors: {
        'light':"#d1d5db",
        'silver': '#111827',
        'dark':"#292929",
      }
    },
  },
  plugins: [],
}

