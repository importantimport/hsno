import type { DocumentHeadValue } from '@builder.io/qwik-city'

import type { FFFFlavoredFrontmatter } from 'fff-flavored-frontmatter'

declare global {
  namespace Hsno {
    type DocumentHeadValue = DocumentHeadValue & {
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
  }
}
