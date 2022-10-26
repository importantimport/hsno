import type { VitePWAOptions } from 'vite-plugin-pwa'

export const config: Partial<VitePWAOptions> = {
  injectRegister: null,
  registerType: 'autoUpdate',
  strategies: 'injectManifest',
  srcDir: 'src/routes',
  filename: 'service-worker.ts'
}
