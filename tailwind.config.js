/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/UI/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        grey: { 500: '#333333', 900: '#292929' },
        pink: { 500: '#f0725c', 900: '#ec3046' }
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '0rem'
      }
    }
  },
  plugins: [],
}
