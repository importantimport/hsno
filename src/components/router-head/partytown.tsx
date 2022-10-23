import { partytownSnippet } from '@builder.io/partytown/integration'
import { config as hsnoConfig } from '~/../hsno.config'

export const QwikPartytown = () => (
  <script dangerouslySetInnerHTML={partytownSnippet(hsnoConfig.partytown)} />
)
