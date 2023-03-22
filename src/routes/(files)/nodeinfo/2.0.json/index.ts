import type { RequestHandler } from '@builder.io/qwik-city'
import { nodeInfo } from '~/hsno/utils/nodeinfo'

export const onRequest: RequestHandler = async ({ headers, json }) => {
  headers.set(
    'Content-Type',
    'application/json; profile="http://nodeinfo.diaspora.software/ns/schema/2.0#"'
  )
  json(200, nodeInfo({ version: '2.0' }))
}
