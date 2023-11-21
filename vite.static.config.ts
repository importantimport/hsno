import { staticAdapter } from '@builder.io/qwik-city/adapters/static/vite'
import { mergeConfig } from 'vite'

// import { extendConfig } from '@builder.io/qwik-city/vite'

import baseConfig from './vite.config'

export default mergeConfig(baseConfig, {
  build: {
    rollupOptions: {
      input: ['@qwik-city-plan'],
    },
    ssr: true,
  },
  plugins: [
    staticAdapter({
      origin: 'https://yoursite.qwik.dev',
    }),
  ],
})
