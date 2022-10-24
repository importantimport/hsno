import type {
  LoadTranslationFn,
  ResolveLocaleFn,
  SpeakLocale,
  StoreLocaleFn,
  TranslateFn
} from 'qwik-speak'
import { $ } from '@builder.io/qwik'
import { config as hsnoConfig } from '~/../hsno.config'

export const { i18n: config } = hsnoConfig

export const loadTranslation$: LoadTranslationFn = $(
  async (lang: string, asset: string, _url?: URL) => {
    if (import.meta.env.DEV) {
      const assets = import.meta.glob('./hsno/i18n/**/*.json', { as: 'raw' })
      return JSON.parse(await assets[`./hsno/i18n/${lang}/${asset}.json`]())
    }
  }
)

export const resolveLocale$: ResolveLocaleFn = $((url?: URL) => {
  if (url)
    return config.supportedLocales.find(
      ({ lang }) =>
        lang ===
          config.supportedLocales.find(({ lang }) =>
            url.pathname.startsWith(`/${lang}`)
          )?.lang || config.defaultLocale.lang
    )
})

export const storeLocale$: StoreLocaleFn = $((locale: SpeakLocale) => {})

export const translateFn: TranslateFn = {
  loadTranslation$: loadTranslation$,
  resolveLocale$: resolveLocale$,
  storeLocale$: storeLocale$
}
