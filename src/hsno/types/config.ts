import type { SpeakConfig } from 'qwik-speak'
import type { QwikCityVitePluginOptions } from '@builder.io/qwik-city/vite'
import type { PartytownConfig } from '@builder.io/partytown/integration'

export type HsnoConfig = {
  url: `${string}/`
  i18n: SpeakConfig
  partytown?: PartytownConfig
  mdx?: QwikCityVitePluginOptions['mdx']
}

export type HsnoUserConfig = {
  url?: `${string}/`
  i18n?: Partial<SpeakConfig>
  partytown?: PartytownConfig
  mdx?: QwikCityVitePluginOptions['mdx']
}
