import { qwikVite } from '@builder.io/qwik/optimizer'
import { qwikCity } from '@builder.io/qwik-city/vite'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import tsconfigPaths from 'vite-tsconfig-paths'

import unocssConfig from './uno.config'

export default defineConfig({
  build: { cssMinify: 'lightningcss' },
  css: { transformer: 'lightningcss' },
  plugins: [
    qwikCity(),
    qwikVite(),
    UnoCSS(unocssConfig),
    VitePWA({
      filename: 'service-worker.ts',
      registerType: 'autoUpdate',
      srcDir: 'src/routes',
      strategies: 'injectManifest',
    }),
    tsconfigPaths(),
  ],
  // dev: {
  //   headers: {
  //     "Cache-Control": "public, max-age=0",
  //   },
  // },
  // preview: {
  //   headers: {
  //     "Cache-Control": "public, max-age=600",
  //   },
  // },
})
