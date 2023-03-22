import { renderToString } from '@builder.io/qwik/server'
import { config as hsnoConfig } from '~/../hsno.config'

export const toJSONFeed = async (posts: Hsno.Post[]) => ({
  version: 'https://jsonfeed.org/version/1.1',
  title: 'Hsno',
  home_page_url: hsnoConfig.origin,
  feed_url: new URL('feed.json', hsnoConfig.origin).toString(),
  description: "!mportantImport's Next-Gen Blog Starter.",
  icon: new URL('favicon.svg', hsnoConfig.origin).toString(),
  favicon: new URL('favicon.svg', hsnoConfig.origin).toString(),
  authors: [
    {
      name: 'John Doe',
      url: new URL('~johndoe', hsnoConfig.origin).toString(),
      avatar: new URL('favicon.svg', hsnoConfig.origin).toString()
    }
  ],
  language: hsnoConfig.i18n.defaultLocale.lang,
  // hubs: [{ type: 'WebSub', url: 'https://hub.hsno.local' }],
  items: await Promise.all(
    posts.map(async (post) => ({
      id: post.slug,
      url: new URL(post.slug, hsnoConfig.origin).toString(),
      title: post.title,
      summary: post.summary,
      image: post.image,
      date_published: post.published ?? post.created,
      date_modified: post.updated ?? post.published ?? post.created,
      tags: post.tags,
      content_html: (
        await renderToString(post.Content!(), {
          containerTagName: 'body'
        })
      ).html
    }))
  )
})

// export const toJF2Feed = (posts: Hsno.Post[]) => {}
