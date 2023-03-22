import type { RequestHandler } from '@builder.io/qwik-city'
import { config as hsnoConfig } from '~/../hsno.config'

export const onRequest: RequestHandler = async ({ json }) => {
  json(200, {
    links: [
      {
        href: new URL('/nodeinfo/2.0.json', hsnoConfig.origin),
        rel: 'http://nodeinfo.diaspora.software/ns/schema/2.0',
      },
      {
        href: new URL('/nodeinfo/2.1.json', hsnoConfig.origin),
        rel: 'http://nodeinfo.diaspora.software/ns/schema/2.1',
      }
    ]
  })
}
