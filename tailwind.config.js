/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#fc5f17',
          accent: '#fcb80a',
          text: '#FFFFFF',
          bg: '#000000'
        }
      },
      borderRadius: { '2xl': '1.25rem' }
    },
  },
  plugins: [],
};
