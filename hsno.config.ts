import { defineConfig, locales } from './src/hsno/config/hsno.config'

export const config: Hsno.Config = defineConfig({
  origin: 'https://hsno.local',
  i18n: {
    defaultLocale: locales['en-US']
  }
})
