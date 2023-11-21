import { component$ } from '@builder.io/qwik'
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city'

import { RouterHead } from './components/router-head/router-head'
import './global.css'

import '@unocss/reset/tailwind.css'
// import 'uno.css'
import 'virtual:unocss-devtools'

/**
 * The root of a QwikCity site always start with the <QwikCityProvider> component,
 * immediately followed by the document's <head> and <body>.
 *
 * Don't remove the `<head>` and `<body>` elements.
 */
export default component$(() => (
  <QwikCityProvider>
    <head>
      <meta charSet="utf-8" />
      <link href="/manifest.json" rel="manifest" />
      <RouterHead />
    </head>
    <body lang="en">
      <RouterOutlet />
      <ServiceWorkerRegister />
    </body>
  </QwikCityProvider>
),
)
