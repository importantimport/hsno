import { component$, Slot } from '@builder.io/qwik'
import { useDocumentHead } from '@builder.io/qwik-city'
import Layout from './layout!'

export default component$(() => {
  const head: Hsno.DocumentHeadValue = useDocumentHead()

  console.log(head)
  console.log(head.frontmatter)

  return (
    <Layout>
      <Slot />
      <a href="https://github.com/importantimport/hsno" target="_blank">
        Article!
      </a>
    </Layout>
  )
})
