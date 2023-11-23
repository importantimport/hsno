import type { VitePWAOptions } from 'vite-plugin-pwa'

export default {
  filename: 'service-worker.ts',
  manifest: {
    icons: [
      {
        sizes: '64x64',
        src: 'favicon.ico',
        type: 'image/x-icon',
      },
      {
        sizes: '192x192',
        src: 'icon-192.png',
        type: 'image/png',
      },
      {
        purpose: 'any',
        sizes: '512x512',
        src: 'icon-512.png',
        type: 'image/png',
      },
      {
        purpose: 'maskable',
        sizes: '512x512',
        src: 'icon-maskalbe-512.png',
        type: 'image/png',
      },
    ],
  },
  registerType: 'autoUpdate',
  srcDir: 'src/routes',
  strategies: 'injectManifest',
} satisfies Partial<VitePWAOptions>
