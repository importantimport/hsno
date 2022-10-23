import { qwikCityGenerate } from '@builder.io/qwik-city/static/node'
import render from '~/entry.ssr'
import { fileURLToPath } from 'url'
import { join } from 'path'

import { config as hsnoConfig } from '~/../hsno.config'

// Execute Qwik City Static Site Generator
qwikCityGenerate(render, {
  origin: new URL(hsnoConfig.url).pathname,
  outDir: join(fileURLToPath(import.meta.url), '..', '..', 'dist')
})
