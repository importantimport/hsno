import { component$ } from '@builder.io/qwik'
import {
  // RequestHandler,
  StaticGenerateHandler,
  useLocation
} from '@builder.io/qwik-city'
import { usePostsSlug, usePostContent } from '~/hsno/utils/posts'

// export const onGet: RequestHandler = ({ params, response }) => {
//   const modules = import.meta.glob<Hsno.Module>('/public/**/*.{md,mdx}', {
//     eager: true
//   })
//   const post =
//     modules[`/public/${params.post}.mdx`] ??
//     modules[`/public/${params.post}.md`]

//   console.log(modules, params.post, post)

//   // if (!post) {
//   //   response.status = 404
//   //   return null
//   // }
// }

export default component$(() => {
  const { params } = useLocation()

  const Content = usePostContent(params.post)

  // console.log(params, usePostsSlug())

  if (!Content) return <div>404: Not found</div>

  else return (
    <article>
      <Content />
    </article>
  )
})

export const onStaticGenerate: StaticGenerateHandler = () => ({
  params: usePostsSlug()
})
