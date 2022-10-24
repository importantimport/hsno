import { defineConfig } from './src/hsno/utils/config'

export const config: Hsno.Config = defineConfig({
  url: 'https://hsno.local',
  i18n: {
    defaultLocale: {
      lang: 'en-US',
      timeZone: 'America/Los_Angeles'
    }
  }
})
