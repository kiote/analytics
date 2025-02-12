const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './js/**/*.js',
    '../lib/plausible_web/templates/**/*.html.eex',
    '../lib/plausible_web/templates/**/*.html.heex',
    '../lib/plausible_web/live/**/*.ex',
    '../lib/plausible_web/components/**/*.ex',
  ],
  safelist: [
    // PlausibleWeb.StatsView.stats_container_class/1 uses this class
    // it's not used anywhere else in the templates or scripts
    "max-w-screen-xl"
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        yellow: colors.amber, // We started usign `yellow` in v2 but it was renamed to `amber` in v3 https://tailwindcss.com/docs/upgrade-guide#removed-color-aliases
        gray: colors.slate,
        'gray-950': 'rgb(13, 18, 30)',
        'gray-850': 'rgb(26, 32, 44)',
        'gray-825': 'rgb(37, 47, 63)'
      },
      spacing: {
        '44': '11rem'
      },
      width: {
        'content': 'fit-content'
      },
      opacity: {
        '15': '0.15',
      },
      zIndex: {
        '9': 9,
      },
      maxWidth: {
        '2xs': '15rem',
        '3xs': '12rem',
      },
      transitionProperty: {
        'padding': 'padding',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ]
}
