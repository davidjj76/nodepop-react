module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-25%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'slide-down': 'slide-down 0.4s',
        'fade-in': 'fade-in 0.2s',
      },
    },
  },
  variants: {
    backgroundColor: ['hover', 'checked'],
    opacity: ['disabled'],
    pointerEvents: ['disabled'],
  },
  plugins: [],
};
