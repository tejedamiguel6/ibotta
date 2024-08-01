import { fetchGraphQL } from '../fetchGraphql'
import { POST_GRAPHQL_FIELDS } from '../queries/post-query'

export async function getPostAndMorePosts(
  slug: string,
  preview: boolean
): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
        postCollection(where: { slug: "${slug}" }, preview: ${
      preview ? 'true' : 'false'
    }, limit: 1) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`,
    preview,
    0
  )
  const entries = await fetchGraphQL(
    `query {
        postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
      preview ? 'true' : 'false'
    }, limit: 2) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`,
    preview,
    0
  )

  return {
    post: entry.data.postCollection.items[0],
    morePosts: entries.data.postCollection.items,
  }
}
