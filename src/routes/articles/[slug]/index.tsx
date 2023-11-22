import { component$ } from '@builder.io/qwik'
import { type StaticGenerateHandler, useLocation } from '@builder.io/qwik-city'
import { allArticles } from 'contentlayer/generated'

export default component$(() => {
  const { params } = useLocation()
  const article = allArticles.find(article => article._raw.sourceFileName.split('.')[0] === params.slug)
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
  params: allArticles.map(article => ({ slug: article._raw.sourceFileName.split('.')[0] })),
})
