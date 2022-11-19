import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'
import { qwikCity } from '@builder.io/qwik-city/vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import { qwikSpeakInline } from 'qwik-speak/inline'
import { partytownVite } from '@builder.io/partytown/utils'
import { VitePWA } from 'vite-plugin-pwa'
import tsconfigPaths from 'vite-tsconfig-paths'

import { resolve } from 'node:path'

import { config as hsnoConfig } from './hsno.config'
import { config as imagetoolsConfig } from './src/hsno/config/imagetools.config'
import { config as pwaConfig } from './src/hsno/config/pwa.config'

export default defineConfig({
  plugins: [
    imagetools(imagetoolsConfig),
    qwikCity({
      basePathname: new URL(hsnoConfig.url).pathname
    }),
    qwikVite(),
    qwikSpeakInline({
      assetsPath: './src/hsno/i18n',
      supportedLangs: hsnoConfig.i18n.supportedLocales.map(({ lang }) => lang),
      defaultLang: hsnoConfig.i18n.defaultLocale.lang
    }),
    partytownVite({ dest: resolve('public', '~partytown') }),
    VitePWA(pwaConfig),
    tsconfigPaths()
  ],
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=600'
    }
  }
})
