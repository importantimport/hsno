import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import { qwikCity } from '@builder.io/qwik-city/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { partytownVite } from '@builder.io/partytown/utils'
import { join } from 'path'

import { config as hsnoConfig } from './hsno.config'

export default defineConfig({
  ssr: { target: 'node', format: 'esm' },
  plugins: [
    qwikCity({
      basePathname: new URL(hsnoConfig.url).pathname
    }),
    qwikVite(),
    tsconfigPaths(),
    partytownVite({ dest: join(__dirname, 'public', '~partytown') })
  ]
})
