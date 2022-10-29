import type { RequestHandler } from '@builder.io/qwik-city'
import { getPostsContent } from '~/hsno/utils/posts'
import { toJSONFeed } from '~/hsno/utils/feed'

export const onGet: RequestHandler = async () =>
  await toJSONFeed(await getPostsContent())
