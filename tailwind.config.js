/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionTimingFunction: {
        'button-ease': 'cubic-bezier(0.4, 0, 0.2, 1)'
      }
    },
  },
  plugins: [],
};
