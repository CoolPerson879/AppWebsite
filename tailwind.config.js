module.exports = {
  mode: 'jit',
  darkMode: 'class', // Enable dark mode based on class
  theme: {
    extend: {
      colors: {
        purple: {
          '500': '#8e3b9a',
        },
        pink: {
          '500': '#ff73b3',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
