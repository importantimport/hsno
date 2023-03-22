export type GetPostsOptions = {
  postSlug?: string
  postLimit?: number
  filterUnlisted?: boolean
}

export const getPosts = async (
  { postSlug, postLimit, filterUnlisted }: GetPostsOptions = {
    filterUnlisted: false
  }
): Promise<Hsno.Post[]> =>
  (
    await Promise.all([
      ...Object.entries(
        import.meta.glob<Hsno.Module['frontmatter']>(
          '../../routes/\\(posts\\)/**/index*.{md,mdx}',
          { import: 'frontmatter' }
        )
      ).map(async ([path, module]) => ({
        ...(await module()),
        slug: path.substring(0, path.lastIndexOf('/')).slice(21),
        path
      })),
      ...Object.entries(
        import.meta.glob<Hsno.Module['frontmatter']>(
          '../../../public/**/*.{md,mdx}',
          { import: 'frontmatter' }
        )
      ).map(async ([path, module]) => ({
        ...(await module()),
        slug: path.substring(0, path.lastIndexOf('.')).slice(16),
        path
      }))
    ])
  )
    .filter(
      (post, index) =>
        (!postSlug || post.slug === postSlug) &&
        (!postLimit || index < postLimit) &&
        (!filterUnlisted || !post.flags?.includes('unlisted'))
    )
    .sort(
      (a, b) =>
        Date.parse(b.published ?? b.created ?? '1989-06-04') -
        Date.parse(a.published ?? a.created ?? '1989-06-04')
    )

export const getPostsContent = async (
  { postSlug, postLimit, filterUnlisted }: GetPostsOptions = {
    filterUnlisted: false
  }
): Promise<Hsno.Post[]> =>
  (
    await Promise.all(
      Object.entries(
        import.meta.glob<Hsno.Module>([
          '../../routes/\\(posts\\)/**/index*.{md,mdx}',
          '../../../public/**/*.{md,mdx}'
        ])
      ).map(async ([path, module]) => ({
        ...(await module()).frontmatter,
        Content: (await module()).default,
        slug: path.substring(0, path.lastIndexOf('/')).slice(21),
        path
      }))
    )
  )
    .filter(
      (post, index) =>
        (!postSlug || post.slug === postSlug) &&
        (!postLimit || index < postLimit) &&
        (!filterUnlisted || !post.flags?.includes('unlisted'))
    )
    .sort(
      (a, b) =>
        Date.parse(b.published ?? b.created ?? '1989-06-04') -
        Date.parse(a.published ?? a.created ?? '1989-06-04')
    )

const modules = import.meta.glob<Hsno.Module['default']>(
  '../../../public/**/*.{md,mdx}',
  {
    import: 'default',
    eager: true
  }
)

export const usePostContent = (slug: string) =>
  Object.entries(modules).find(([path]) =>
    path.startsWith(`../../../public/${slug}.md`)
  )?.[1]

export const usePostsSlug = () =>
  Object.keys(modules).map((path) => ({
    post: path.substring(0, path.lastIndexOf('.')).slice(16)
  }))
