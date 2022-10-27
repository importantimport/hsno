import { staticAdaptor } from '@builder.io/qwik-city/adaptors/static/vite'
import { extendConfig } from '@builder.io/qwik-city/vite'
import { config as hsnoConfig } from './hsno.config'
import baseConfig from './vite.config'

export default extendConfig(baseConfig, {
  build: {
    ssr: true,
    rollupOptions: {
      input: ['@qwik-city-plan']
    }
  },
  plugins: [
    staticAdaptor({
      origin: new URL(hsnoConfig.url).origin
    })
  ]
})
