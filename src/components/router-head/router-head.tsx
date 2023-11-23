import { component$ } from '@builder.io/qwik'
import { useDocumentHead, useLocation } from '@builder.io/qwik-city'

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead()
  const loc = useLocation()

  return (
    <>
      <title>{head.title}</title>

      <link href={loc.url.href} rel="canonical" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />

      {/* TODO: hsno.config.ts site.icon.endsWith('.svg') */}
      <link href="/icon.svg" rel="icon" sizes="any" type="image/svg+xml" />
      <link href="/icon-192.png" rel="icon" sizes="192x192" type="image/png" />
      <link href="/favicon.ico" rel="icon" sizes="64x64" type="image/x-icon" />
      <link href="/icon-maskable-180.png" rel="apple-touch-icon" sizes="180x180" type="image/png" />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  )
})
