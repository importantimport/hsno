/* eslint-disable @typescript-eslint/no-unused-vars */
import type { DocumentHeadValue as QwikCityDocumentHeadValue } from '@builder.io/qwik-city'
import type { FFFFlavoredFrontmatter } from 'fff-flavored-frontmatter'
import type { HsnoConfig, HsnoUserConfig } from '~/hsno/types/config'
import type { MDXContent } from 'mdx/types'

declare global {
  namespace Hsno {
    interface DocumentHeadValue extends QwikCityDocumentHeadValue {
      frontmatter?: Omit<FFFFlavoredFrontmatter, 'title'> &
        Record<string, unknown>
    }

    type Module = {
      frontmatter?: FFFFlavoredFrontmatter & Record<string, unknown>
      default: MDXContent
    }

    type Post = FFFFlavoredFrontmatter & {
      slug: string
      path: string
      frontmatter?: FFFFlavoredFrontmatter & Record<string, unknown>
      Content?: MDXContent
    }

    type Config = HsnoConfig

    type UserConfig = HsnoUserConfig
  }
}
