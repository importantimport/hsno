import type { RequestHandler } from '@builder.io/qwik-city'

export const onGet: RequestHandler = async ({ response }) =>
  response.headers.set('Content-Type', 'application/json; charset=utf-8')! && {
    mode: import.meta.env.MODE
  }
