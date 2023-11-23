import { component$ } from '@builder.io/qwik'
import { type DocumentHead, type StaticGenerateHandler, routeLoader$ } from '@builder.io/qwik-city'
import { allArticles } from 'contentlayer/generated'

export const useArticle = routeLoader$(async ({ params }) => {
  const article = allArticles.find(({ slug }) => slug === params.slug)
  if (!article)
    throw new Error(`Article not found for slug: ${params.slug}`)

  return article
})

export default component$(() => {
  const article = useArticle()

  return (
    <article class="prose">
      <h1>{article.value.title}</h1>
      <time dateTime={article.value.created}>
        {new Intl.DateTimeFormat('en-US', { // TODO: hsno.config.ts site.lang
          dateStyle: 'full',
        }).format(new Date(article.value.created))}
      </time>
      <div dangerouslySetInnerHTML={article.value.body.html}></div>
    </article>
  )
})

export const head: DocumentHead = ({ resolveValue }) => {
  const article = resolveValue(useArticle)

  return {
    title: `${article.title} - Hsno`,
  }
}

export const onStaticGenerate: StaticGenerateHandler = () => ({
  params: allArticles.map(({ slug }) => ({ slug })),
})
