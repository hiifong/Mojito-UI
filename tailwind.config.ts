import type { Config } from 'tailwindcss'
import flyonui from 'flyonui'
import flyonuiPlugin from 'flyonui/plugin'
import lightTheme from 'flyonui/src/theming/themes'

const config: Config = {
  content: ['./src/**/*.{vue,ts}', './node_modules/flyonui/dist/js/*.js'],
  theme: {
    extend: {}
  },
  flyonui: {
    themes: [
      {
        light: {
          ...lightTheme['light'],
          '.divider': {
            color: '#1EA1F1'
          }
        }
      }
    ],
    logs: false
  },
  plugins: [flyonui, flyonuiPlugin]
}

export default config
