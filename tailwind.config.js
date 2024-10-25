/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports =withMT( {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        '3xl-desktop': '2560px',     // Breakpoint para pantallas ultra anchas
  
        '2xl-desktop': '1920px',
        'xxlarge-desktop': '1800px', // Breakpoint para pantallas extra extra grandes
        'xlarge-desktop': '1600px', // Breakpoint para pantallas extra grandes
  
        'large-desktop': '1360px', // Breakpoint para pantallas grandes
       'desktop': '1280px',     // Breakpoint para escritorio
         'laptop': '1024px',      // Breakpoint para portátiles
       'tablet': '768px',       // Breakpoint para tablets
        'smartphone': '360px',   // Breakpoint para smartphones
        
    }
    },
   
  },
  plugins: [],
});
