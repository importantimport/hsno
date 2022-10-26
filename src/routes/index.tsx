import { component$, Resource } from '@builder.io/qwik'
import {
  type RequestHandler,
  type DocumentHead,
  useEndpoint
} from '@builder.io/qwik-city'
import { Link } from '@builder.io/qwik-city'
import { $translate as t } from 'qwik-speak'
import { getPosts } from '~/hsno/utils/posts'

export default component$(() => {
  const posts = useEndpoint<Hsno.Post[]>()
  return (
    <div>
      <h1>
        Welcome to {t('app.title')} <span class="hsno">🐳</span>
      </h1>

      <ul>
        <li>
          Check out the <code>src/routes</code> directory to get started.
        </li>
        <li>
          Add integrations with <code>npm run qwik add</code>.
        </li>
        <li>
          More info about development in <code>README.md</code>
        </li>
      </ul>

      <h2>Posts</h2>

      <Resource
        value={posts}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Failed to load weather</div>}
        onResolved={(posts) => (
          <ul>
            {posts?.map((post) => (
              <li>
                <Link href={`/${post.slug}`}>{post.title ?? 'no title'}</Link>
              </li>
            ))}
          </ul>
        )}
      />

      <h2>Commands</h2>

      <table class="commands">
        <tr>
          <td>
            <code>npm run dev</code>
          </td>
          <td>Start the dev server and watch for changes.</td>
        </tr>
        <tr>
          <td>
            <code>npm run preview</code>
          </td>
          <td>Production build and start preview server.</td>
        </tr>
        <tr>
          <td>
            <code>npm run build</code>
          </td>
          <td>Production build.</td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add</code>
          </td>
          <td>Select an integration to add.</td>
        </tr>
      </table>

      <h2>Add Integrations</h2>

      <table class="commands">
        <tr>
          <td>
            <code>npm run qwik add cloudflare-pages</code>
          </td>
          <td>
            <a href="https://developers.cloudflare.com/pages" target="_blank">
              Cloudflare Pages Server
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add express</code>
          </td>
          <td>
            <a href="https://expressjs.com/" target="_blank">
              Nodejs Express Server
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add netlify-edge</code>
          </td>
          <td>
            <a href="https://docs.netlify.com/" target="_blank">
              Netlify Edge Functions
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add static-node</code>
          </td>
          <td>
            <a
              href="https://qwik.builder.io/qwikcity/static-site-generation/overview/"
              target="_blank">
              Static Site Generation (SSG)
            </a>
          </td>
        </tr>
      </table>

      <h2>Community</h2>

      <ul>
        <li>
          <span>Questions or just want to say hi? </span>
          <a href="https://qwik.builder.io/chat" target="_blank">
            Chat on discord!
          </a>
        </li>
        <li>
          <span>Follow </span>
          <a href="https://twitter.com/QwikDev" target="_blank">
            @QwikDev
          </a>
          <span> on Twitter</span>
        </li>
        <li>
          <span>Open issues and contribute on </span>
          <a href="https://github.com/BuilderIO/qwik" target="_blank">
            Github
          </a>
        </li>
        <li>
          <span>Watch </span>
          <a href="https://qwik.builder.io/media/" target="_blank">
            Presentations, Podcasts, Videos, etc.
          </a>
        </li>
      </ul>
      <Link class="mindblow" href="/flower">
        Blow my mind 🤯
      </Link>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Hsno'
}

export const onGet: RequestHandler = async (): Promise<Hsno.Post[]> =>
  await getPosts()
