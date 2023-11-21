import { qwikVite } from '@builder.io/qwik/optimizer'
import { qwikCity } from '@builder.io/qwik-city/vite'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    qwikCity(),
    qwikVite(),
    UnoCSS({
      mode: 'dist-chunk',
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
