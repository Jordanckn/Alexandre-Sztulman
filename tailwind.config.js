/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003766',
          50: '#e6f0f7',
          100: '#cce1ef',
          200: '#99c3df',
          300: '#66a5cf',
          400: '#3387bf',
          500: '#0069af',
          600: '#00538c',
          700: '#003766',
          800: '#002a4d',
          900: '#001c33',
        },
      },
      fontFamily: {
        garamond: ['"EB Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
};
