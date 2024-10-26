/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  // Add other VITE_ prefixed variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
