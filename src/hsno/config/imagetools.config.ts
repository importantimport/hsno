import type { imagetools } from 'vite-imagetools'

export const config: Partial<Parameters<typeof imagetools>[0]> = {
  //   defaultDirectives: (_url) =>
  //     new URLSearchParams({
  //       width: ['480', '1024', '1920'].join(';'),
  //       format: ['avif', 'webp'].join(';')
  //     })
}
