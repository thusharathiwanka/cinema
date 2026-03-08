import Vue from 'vue'
import { Plugin } from '@nuxt/types'

type Theme = 'light' | 'dark'

interface ThemeContext {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const STORAGE_KEY = 'theme'

const resolveInitialTheme = (): Theme => {
  // Default for SSR
  let theme: Theme = 'light'

  if (typeof window !== 'undefined') {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null
    if (stored === 'light' || stored === 'dark') {
      theme = stored
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      theme = 'dark'
    }

    // Ensure the DOM has the correct theme before components read it
    document.documentElement.setAttribute('data-theme', theme)
  }

  return theme
}

const applyTheme = (theme: Theme) => {
  if (!process.client) {
    return
  }

  const root = document.documentElement
  root.setAttribute('data-theme', theme)
  window.localStorage.setItem(STORAGE_KEY, theme)
}

const themePlugin: Plugin = (_context, inject) => {
  const initialTheme = resolveInitialTheme()

  const state = Vue.observable<ThemeContext>({
    theme: initialTheme,
    setTheme: () => {},
    toggleTheme: () => {},
  })

  const setTheme = (theme: Theme) => {
    state.theme = theme
    applyTheme(theme)
  }

  const toggleTheme = () => {
    setTheme(state.theme === 'light' ? 'dark' : 'light')
  }

  state.setTheme = setTheme
  state.toggleTheme = toggleTheme

  if (process.client) {
    applyTheme(initialTheme)
  }

  inject('theme', state)
}

export default themePlugin
