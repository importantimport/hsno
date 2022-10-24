export const defaultConfig: Hsno.Config = {
  url: 'https://hsno.local',
  i18n: {
    defaultLocale: {
      lang: 'en-US',
      timeZone: 'America/Los_Angeles'
    },
    supportedLocales: [
      { lang: 'en-US', timeZone: 'America/Los_Angeles' },
      { lang: 'ja-JP', timeZone: 'Asia/Tokyo' },
      { lang: 'zh-TW', timeZone: 'Asia/Taipei' }
    ],
    assets: ['app']
  }
}
