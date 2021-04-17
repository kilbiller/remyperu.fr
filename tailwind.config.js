module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.tsx'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'light-gray': '#eeeeee',
        yellow: '#ffd700',
        blue: '#357edd'
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace']
      },
      fontSize: {
        '7xl': '5rem'
      }
    }
  }
};
