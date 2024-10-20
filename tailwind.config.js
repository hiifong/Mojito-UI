/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,ts}', './node_modules/flyonui/dist/js/*.js'],
  theme: {
    extend: {}
  },
  flyonui: {
    themes: [
      {
        light: {
          ...require('flyonui/src/theming/themes')['light'],
          '.divider': {
            color: '#1EA1F1'
          }
        }
      }
    ]
  },
  plugins: [require('flyonui'), require('flyonui/plugin')]
}
