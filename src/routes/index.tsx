import type { DocumentHead } from '@builder.io/qwik-city'

import { component$ } from '@builder.io/qwik'
import { allArticles } from 'contentlayer/generated'

export default component$(() => {
  // const articles = allArticles.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  return (
    <>
      <h1>Hi 👋</h1>
      <p>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </p>
      {allArticles.map(article => (
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
  title: 'Welcome to Qwik',
}
