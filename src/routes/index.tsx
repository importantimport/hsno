import type { DocumentHead } from '@builder.io/qwik-city'

import { component$ } from '@builder.io/qwik'
import { allArticles } from 'contentlayer/generated'

export default component$(() => {
  const articles = allArticles.sort((a, b) => +new Date(b.created) - +new Date(a.created))

  return (
    <>
      {articles.map(article => (
        <a href={article.url} key={article.url}>{article.title}</a>
      ))}
    </>
  )
})

export const head: DocumentHead = {
  meta: [
    {
      content: 'Qwik site description',
      name: 'description',
    },
  ],
  title: 'Hsno',
}
