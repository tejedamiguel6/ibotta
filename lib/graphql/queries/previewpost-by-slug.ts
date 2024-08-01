import { fetchGraphQL } from '../fetchGraphql'
import { POST_GRAPHQL_FIELDS } from './post-query'

function extractPost(fetchResponse: any): any {
  return fetchResponse?.data?.postCollection?.items?.[0]
}

export async function getPreviewPostBySlug(slug: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
        postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`,
    true,
    0
  )
  return extractPost(entry)
}
