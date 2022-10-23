import type { SpeakConfig } from 'qwik-speak'
import type { PartytownConfig } from '@builder.io/partytown/integration'

export type HsnoConfig = {
  url: string
  i18n: SpeakConfig
  partytown?: PartytownConfig
}
