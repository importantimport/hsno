import type { VitePWAOptions } from 'vite-plugin-pwa'

export default {
  filename: 'service-worker.ts',
  manifest: {
    icons: [
      {
        sizes: '64x64',
        src: 'pwa-64x64.png',
        type: 'image/png',
      },
      {
        sizes: '192x192',
        src: 'pwa-192x192.png',
        type: 'image/png',
      },
      {
        purpose: 'any',
        sizes: '512x512',
        src: 'pwa-512x512.png',
        type: 'image/png',
      },
      {
        purpose: 'maskable',
        sizes: '512x512',
        src: 'maskable-icon-512x512.png',
        type: 'image/png',
      },
    ],
  },
  registerType: 'autoUpdate',
  srcDir: 'src/routes',
  strategies: 'injectManifest',
} satisfies Partial<VitePWAOptions>
