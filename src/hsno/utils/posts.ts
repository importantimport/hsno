export type GenPostsOptions = {
  postSlug?: string
  postLimit?: number
  filterUnlisted?: boolean
}

export const getPosts = async (
  { postSlug, postLimit, filterUnlisted }: GenPostsOptions = {
    filterUnlisted: false
  }
): Promise<Hsno.Post[]> =>
  (
    await Promise.all(
      Object.entries(
        import.meta.glob<Hsno.Module['frontmatter']>(
          '../../routes/\\(posts\\)/**/index*.{md,mdx}',
          { import: 'frontmatter' }
        )
      ).map(async ([path, module]) => ({
        ...(await module()),
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
