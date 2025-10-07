/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        eerie: '#1c1c1c',          // dark background
        jet: '#1b1919',            // alt dark background (sections)
        jetdark: '#0F1515',        // navbar dark
        platinum: '#daddd8',       // light text on dark
        alabaster: '#ecebe4',      // secondary text on dark
        antiflash: '#eef0f2',      // tertiary text on dark
        ghost: '#fafaff',          // light background
        sea: '#519872',            // accent (saturated)
        feld: "#3B5249",           // accent 2 (dark)
        sage: '#A4B494',           // accent 3 (light)
      },
    },
  },
  plugins: [],
}

