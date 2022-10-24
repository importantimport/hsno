import { mergeConfig } from 'vite'
import { defaultConfig } from './src/hsno/utils/config'

export const config: Hsno.Config = mergeConfig(defaultConfig, {
  url: 'https://hsno.local',
  i18n: {
    defaultLocale: {
      lang: 'en-US',
      timeZone: 'America/Los_Angeles'
    }
  }
}) as Hsno.Config
