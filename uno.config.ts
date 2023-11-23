import { presetIcons, presetTypography, presetUno } from 'unocss'
import { defineConfig } from 'unocss/vite'

export default defineConfig({
  // mode: 'dist-chunk', // it doesn't work
  presets: [
    presetUno(),
    presetTypography(),
    presetIcons({
      // https://unocss.dev/presets/icons#cdn
      cdn: 'https://esm.sh/',
    }),
  ],
})
