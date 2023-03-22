import { version as hsnoVersion } from '~/../package.json'

export const nodeInfo = ({ version }: { version: string }) => ({
  version,
  software: {
    name: 'Hsno',
    version: hsnoVersion,
    ...(version === '2.1'
      ? {
          repository: 'https://github.com/importantimport/hsno',
          homepage: 'https://github.com/importantimport/hsno'
        }
      : {})
  },
  protocols: ['activitypub'],
  services: {
    inbound: [],
    outbound: []
  },
  openRegistrations: false,
  usage: {
    users: {
      total: 1
    }
    // localPosts: 0,
    // localComments: 0,
  },
  metadata: {}
})
