import { defineConfig, minimalPreset as preset } from '@vite-pwa/assets-generator/config'

export default defineConfig({
  images: [
    'public/icon.svg',
    // 'public/maskable.svg',
  ],
  preset,
})
