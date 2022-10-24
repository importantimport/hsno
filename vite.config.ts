import { defineConfig } from 'vite'
import { qwikCity } from '@builder.io/qwik-city/vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import { qwikSpeakInline } from 'qwik-speak/inline'
import tsconfigPaths from 'vite-tsconfig-paths'
import { partytownVite } from '@builder.io/partytown/utils'
import { resolve } from 'path'

import { config as hsnoConfig } from './hsno.config'

export default defineConfig({
  ssr: { target: 'node', format: 'esm' },
  plugins: [
    qwikCity({
      basePathname: new URL(hsnoConfig.url).pathname
    }),
    qwikVite(),
    qwikSpeakInline({
      assetsPath: './src/hsno/i18n',
      supportedLangs: hsnoConfig.i18n.supportedLocales.map(({ lang }) => lang),
      defaultLang: hsnoConfig.i18n.defaultLocale.lang
    }),
    tsconfigPaths(),
    partytownVite({ dest: resolve('public', '~partytown') })
  ]
})
