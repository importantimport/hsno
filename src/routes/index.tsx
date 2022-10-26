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
            <code>pnpm dev</code>
          </td>
          <td>Start the dev server and watch for changes.</td>
        </tr>
        <tr>
          <td>
            <code>pnpm preview</code>
          </td>
          <td>Production build and start preview server.</td>
        </tr>
        <tr>
          <td>
            <code>pnpm build</code>
          </td>
          <td>Production build.</td>
        </tr>
        <tr>
          <td>
            <code>pnpm qwik add</code>
          </td>
          <td>Select an integration to add.</td>
        </tr>
      </table>

      <h2>Add Integrations</h2>

      <table class="commands">
        <tr>
          <td>
            <code>pnpm qwik add cloudflare-pages</code>
          </td>
          <td>
            <a href="https://developers.cloudflare.com/pages" target="_blank">
              Cloudflare Pages Server
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>pnpm qwik add express</code>
          </td>
          <td>
            <a href="https://expressjs.com/" target="_blank">
              Nodejs Express Server
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>pnpm qwik add netlify-edge</code>
          </td>
          <td>
            <a href="https://docs.netlify.com/" target="_blank">
              Netlify Edge Functions
            </a>
          </td>
        </tr>
      </table>
      <Link class="mindblow" href="https://github.com/importantimport/hsno">
        GitHub
      </Link>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Hsno'
}

export const onGet: RequestHandler = async (): Promise<Hsno.Post[]> =>
  await getPosts()
