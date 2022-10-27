import { component$, Slot } from '@builder.io/qwik'
import { useDocumentHead } from '@builder.io/qwik-city'
import Layout from './layout!'

export default component$(() => {
  const head: Hsno.DocumentHeadValue = useDocumentHead()

  if (import.meta.env.DEV) console.log(head)

  return (
    <Layout>
      <Slot />
      <a href="https://github.com/importantimport/hsno" target="_blank">
        Article!
      </a>
    </Layout>
  )
})
