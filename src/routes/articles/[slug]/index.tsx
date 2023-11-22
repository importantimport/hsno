import { component$ } from '@builder.io/qwik'
import { type StaticGenerateHandler, useLocation } from '@builder.io/qwik-city'
import { allArticles } from 'contentlayer/generated'

export default component$(() => {
  const { params } = useLocation()
  const article = allArticles.find(({ slug }) => slug === params.slug)
  if (!article)
    throw new Error(`Article not found for slug: ${params.slug}`)

  return (
    <article>
      <h1>{article.title}</h1>
      <time>{article.created}</time>
      <div dangerouslySetInnerHTML={article.body.html}></div>
    </article>
  )
})

export const onStaticGenerate: StaticGenerateHandler = () => ({
  params: allArticles.map(({ slug }) => ({ slug })),
})
