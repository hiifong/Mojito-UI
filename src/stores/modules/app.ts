import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface AppState {
  collapse: boolean
  dark: boolean
}

export const useAppStore = defineStore(
  'app',
  () => {
    const AppState = ref<AppState>({
      collapse: false,
      dark: false
    })

    // getter
    const collapse = computed(() => AppState.value.collapse)
    const dark = computed(() => AppState.value.dark)

    // setter
    function setCollapse(collapse: boolean) {
      AppState.value.collapse = collapse
    }
    function setDark(dark: boolean) {
      AppState.value.dark = dark
    }

    function setAll(appState: AppState) {
      AppState.value = appState
    }
    return {
      // getter
      AppState,
      collapse,
      dark,
      // setter
      setCollapse,
      setDark,
      setAll
    }
  },
  {
    persist: true
  }
)
