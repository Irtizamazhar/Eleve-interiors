/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        bgLight: '#f8f6f2',
        bgDark: '#1a1a1a',
        textDark: '#1a1a1a',
        textBody: '#3f3f3f',
        textMuted: '#6f6f6f',
        gold: '#9f7b2f',
        goldHover: '#886624',
        border: '#e5e0d5',
        whatsapp: '#25d366',
        dark: '#1a1a1a',
        dark2: '#111111',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.15)',
        'gold-hover': '0 12px 40px rgba(201,168,76,0.12)',
        'gold-soft': '0 8px 30px rgba(201,168,76,0.15)',
        nav: '0 2px 20px rgba(0,0,0,0.10)',
      },
      borderRadius: {
        card: '10px',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        cormorant: ['var(--font-cormorant)', 'serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
        'pulse-whatsapp': 'pulse-whatsapp 2s ease-in-out infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-whatsapp': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.5)' },
          '70%': { boxShadow: '0 0 0 16px rgba(37, 211, 102, 0)' },
        },
      },
    },
  },
  plugins: [],
};
