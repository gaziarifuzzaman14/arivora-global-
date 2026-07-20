/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#2563EB',
          900: '#0F172A',
        },
        secondary: {
          light: '#06B6D4',
          dark: '#0891b2',
        },
        background: {
          light: '#FFFFFF',
          dark: '#0F172A',
        },
        text: {
          primary: '#1E293B',
          light: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}