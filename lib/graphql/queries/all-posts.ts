import { fetchGraphQL } from '../fetchGraphql'
import { POST_GRAPHQL_FIELDS } from './post-query'

function extractPostEntries(fetchResponse: any): any[] {
  // console.log('fetchResponse-->', fetchResponse?.data?.postCollection.items)
  return fetchResponse?.data?.postCollection?.items
}

export async function getAllPosts(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
        postCollection(where: { slug_exists: true }, order: date_ASC, preview: ${
          isDraftMode ? 'true' : 'false'
        }) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode,
    0
  )
  // return entries?.data?.postCollection?.items
  return extractPostEntries(entries)
}
