import { component$ } from '@builder.io/qwik'
import {
  QwikCity,
  RouterOutlet,
  ServiceWorkerRegister
} from '@builder.io/qwik-city'
import { QwikSpeak } from 'qwik-speak'
import { RouterHead } from '~/components/router-head/router-head'
import { config, translateFn } from '~/../speak.config'

// TODO: REMOVE
import './global.css'

export default component$(() => (
  <QwikSpeak config={config} translateFn={translateFn}>
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCity>
  </QwikSpeak>
))
