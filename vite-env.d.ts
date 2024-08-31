/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NAME: string
  readonly VITE_VERSION: string
  readonly VITE_HOME_PAGE: string
  readonly VITE_REPOSITORY: string
  readonly VITE_POWERED_BY: string
  readonly VITE_AUTHOR: string
  readonly VITE_LICENSE: string

  readonly VITE_API_URL: string
  readonly VITE_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
