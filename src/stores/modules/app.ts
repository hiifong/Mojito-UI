import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface AppState {
  collapse: boolean
  dark: boolean
  theme: string
  lang: string
}

export const useAppStore = defineStore(
  'app',
  () => {
    const AppState = ref<AppState>({
      collapse: false,
      dark: false,
      theme: '',
      lang: 'zh-CN'
    })

    // getter
    const collapse = computed(() => AppState.value.collapse)
    const dark = computed(() => AppState.value.dark)
    const theme = computed(() => AppState.value.theme)
    const lang = computed(() => AppState.value.lang)

    // setter
    function setCollapse(collapse: boolean) {
      AppState.value.collapse = collapse
    }
    function setDark(dark: boolean) {
      AppState.value.dark = dark
    }

    function setTheme(theme: string) {
      AppState.value.theme = theme
    }
    function setLang(lang: string) {
      AppState.value.lang = lang
    }

    function setAll(appState: AppState) {
      AppState.value = appState
    }
    return {
      // getter
      AppState,
      collapse,
      dark,
      theme,
      lang,
      // setter
      setCollapse,
      setDark,
      setTheme,
      setLang,
      setAll
    }
  },
  {
    persist: true
  }
)
