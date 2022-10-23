import type { LoadTranslationFn, TranslateFn } from 'qwik-speak'
import { $ } from '@builder.io/qwik'
import { isServer } from '@builder.io/qwik/build'
import { config as hsnoConfig } from './hsno.config'

export const { i18n: config } = hsnoConfig

export const loadTranslation$: LoadTranslationFn = $(
  async (lang: string, asset: string, url?: URL) => {
    if (import.meta.env.DEV)
      return await fetch(
        `${isServer && url ? url.origin : ''}/i18n/${lang}/${asset}.json`
      ).then((res) => res.json())
  }
)

export const translateFn: TranslateFn = {
  loadTranslation$: loadTranslation$
}
