import { draftMode } from 'next/headers'
import MoreStories from './components/moreStories/moreStories'
import { getAllPosts } from '@/lib/graphql/queries/all-posts'
import HeroPost from './components/heroPost/HeroPost'
import Logo from './components/logo/Logo'

export default async function Page() {
  const { isEnabled } = draftMode()
  const allPosts = await getAllPosts(isEnabled)
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const getExcerpt = allPosts.map((item) => item.excerpt)
  const getFirstExcerpt = getExcerpt[0]

  return (
    <div className='container mx-auto px-5'>
      <header>
        <Logo />
      </header>
      <section>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={getFirstExcerpt}
          />
        )}
      </section>
      <main>
        <section>
          <MoreStories morePosts={morePosts} />
        </section>
      </main>
    </div>
  )
}
