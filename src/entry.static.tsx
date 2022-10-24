import { qwikCityGenerate } from '@builder.io/qwik-city/static/node'
import render from '~/entry.ssr'
import { resolve } from 'path'

import { config as hsnoConfig } from '~/../hsno.config'

// Execute Qwik City Static Site Generator
qwikCityGenerate(render, {
  origin: new URL(hsnoConfig.url).origin,
  outDir: resolve('dist')
})
