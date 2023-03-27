const plugin = require('tailwindcss/plugin');

module.exports = {
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.hyphens-none': {
          hyphens: 'none',
        },
        '.hyphens-manual': {
          hyphens: 'manual',
        },
        '.hyphens-auto': {
          hyphens: 'auto',
        },
      });
    }),
  ],
};
