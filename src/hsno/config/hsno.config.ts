export const locales = {
  'en-US': { lang: 'en-US', timeZone: 'America/Los_Angeles' }
  // 'ja-JP': { lang: 'ja-JP', timeZone: 'Asia/Tokyo' },
  // 'zh-TW': { lang: 'zh-TW', timeZone: 'Asia/Taipei' }
} as const

export const defaultConfig: Hsno.Config = {
  url: 'https://hsno.local/',
  i18n: {
    defaultLocale: locales['en-US'],
    supportedLocales: Object.values(locales),
    assets: ['app']
  }
}

export const defineConfig = (config: Hsno.UserConfig): Hsno.Config => ({
  ...defaultConfig,
  ...config,
  i18n: {
    ...defaultConfig.i18n,
    ...config.i18n
  }
})
