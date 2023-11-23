import { defineConfig } from '@vite-pwa/assets-generator/config'

// TODO: hsno.config.ts site.pwa.assets.resizeOptions
export default defineConfig({
  images: ['public/icon.svg'],
  preset: {
    apple: {
      // resizeOptions: {
      //   background: '#aeddff',
      // },
      sizes: [180],
    },
    assetName: (type, size) => type === 'transparent'
      ? `icon-${size.width}.png`
      : `icon-maskable-${size.width}.png`,
    maskable: {
      // resizeOptions: {
      //   background: '#aeddff',
      // },
      sizes: [512],
    },
    transparent: {
      favicons: [[64, 'favicon.ico']],
      sizes: [192, 512],
    },
  },
})
