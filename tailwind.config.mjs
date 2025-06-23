/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        gabarito: ['var(--font-gabarito)'],
        inter: ['var(--font-inter)'],
      },
      gap: {
        '15': '3.75rem',
      }
    },
  },
  plugins: [],
};
export default config; 