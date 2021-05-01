module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ['hover', 'checked'],
    opacity: ['disabled'],
    pointerEvents: ['disabled'],
  },
  plugins: [],
};
