import type { DocumentHead } from '@builder.io/qwik-city'

import { component$ } from '@builder.io/qwik'

export default component$(() => (
  <>
    <h1>Hi 👋</h1>
    <p>
      Can't wait to see what you build with qwik!
      <br />
      Happy coding.
    </p>
  </>
))

export const head: DocumentHead = {
  meta: [
    {
      content: 'Qwik site description',
      name: 'description',
    },
  ],
  title: 'Welcome to Qwik',
}
