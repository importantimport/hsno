import type { RequestHandler } from '@builder.io/qwik-city'
import { getPostsContent } from '~/hsno/utils/posts'
import { toJSONFeed } from '~/hsno/utils/feed'

export const onGet: RequestHandler = async ({ response }) =>
  response.headers.set(
    'Content-Type',
    'application/feed+json; charset=utf-8'
  )! && (await toJSONFeed(await getPostsContent()))
