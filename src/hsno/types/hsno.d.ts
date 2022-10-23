/* eslint-disable @typescript-eslint/no-unused-vars */
import type { DocumentHeadValue } from '@builder.io/qwik-city'
import type { FFFFlavoredFrontmatter } from 'fff-flavored-frontmatter'
import type { HsnoConfig } from '~/hsno/types/config'

declare global {
  namespace Hsno {
    interface DocumentHeadValue extends DocumentHeadValue {
      frontmatter?: Omit<FFFFlavoredFrontmatter, 'title'> &
        Record<string, unknown>
    }

    type Module = {
      frontmatter?: FFFFlavoredFrontmatter & Record<string, unknown>
      default: unknown // MDXContent
    }

    type Post = FFFFlavoredFrontmatter & {
      slug: string
      path: string
      content: string // MDXContent
    }

    type Config = HsnoConfig
  }
}
