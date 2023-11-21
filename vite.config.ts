import { qwikVite } from '@builder.io/qwik/optimizer'
import { qwikCity } from '@builder.io/qwik-city/vite'
import { fileURLToPath } from 'node:url'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { watch } from 'vite-plugin-watch'
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
    // https://github.com/contentlayerdev/contentlayer/issues/179#issuecomment-1789585127
    watch({
      command: 'contentlayer build',
      pattern: './posts/**/*.{mdx,md}',
    }),
  ],
  resolve: {
    // https://github.com/contentlayerdev/contentlayer/issues/400#issuecomment-1475146460
    alias: [{
      find: 'contentlayer/generated',
      replacement: fileURLToPath(new URL('.contentlayer/generated', import.meta.url)),
    }],
  },
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
