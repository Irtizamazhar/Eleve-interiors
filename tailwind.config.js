/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1C1917',
        dark2: '#252220',
        mid: '#2C2824',
        gold: '#C9A84C',
        gold2: '#E2C06A',
        gold3: '#8B6510',
        cream: '#F4ECD8',
        taupe: '#A08B70',
        taupe2: '#C8B090',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        cormorant: ['var(--font-cormorant)', 'serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
