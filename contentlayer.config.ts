import { defineDocumentType, makeSource } from 'contentlayer/source-files'

// https://contentlayer.dev/docs/getting-started-cddd76b7#add-contentlayer-config
export const Article = defineDocumentType(() => ({
  computedFields: {
    url: { resolve: (post) => post._raw.flattenedPath, type: 'string' },
  },
  fields: {
    created: { required: true, type: 'date' },
    title: { required: true, type: 'string' },
  },
  filePathPattern: 'articles/**/*.md',
  name: 'Article',
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Article] })
