const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['src/**/*.tsx'],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

const cssnano = require('cssnano')({ preset: 'default' });

module.exports = {
  plugins: [require('tailwindcss'), require('autoprefixer'), purgecss, cssnano]
};
