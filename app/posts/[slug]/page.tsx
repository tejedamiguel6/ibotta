import Link from 'next/link'
import { draftMode } from 'next/headers'
import MoreStories from '../../components/moreStories/moreStories'
import Avatar from '../../components/authorAvatar/authorAvatar'
import Date from '../../utils/date'
import CoverImage from '../../components/coverImage/coverImage'
import { Markdown } from '@/lib/markdown'
import { getAllPosts } from '@/lib/graphql/queries/all-posts'
import { getPostAndMorePosts } from '@/lib/graphql/queries/post-and-more'
import { Metadata } from 'next'
import Image from 'next/image'

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `${params.slug}`,
    description: `This is a blog post about ${params.slug}`,
  }
}

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false)

  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const { isEnabled } = draftMode()
  const { post, morePosts } = await getPostAndMorePosts(params.slug, isEnabled)
  const playlistData = post?.track
  // console.log('---==>', playlistData)

  return (
    <div className='container mx-auto px-5'>
      <h2 className='mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter'>
        <Link href='/' className='hover:underline'>
          Blog
        </Link>
        .
      </h2>
      <article>
        <h1 className='mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl'>
          {post.title}
        </h1>
        <div className='hidden md:mb-12 md:block'>
          {post.author && (
            <Avatar name={post.author.name} picture={post.author.picture} />
          )}
        </div>
        <div className='mb-8 sm:mx-0 md:mb-16'>
          <CoverImage title={post.title} url={post.coverImage?.url} />
        </div>
        <div className='mx-auto max-w-2xl'>
          <div className='mb-6 block md:hidden'>
            {post.author && (
              <Avatar name={post.author.name} picture={post.author.picture} />
            )}
          </div>
          <div className='mb-6 text-lg'>
            <Date dateString={post?.date} />
          </div>
        </div>

        <div className='mx-auto max-w-2xl'>
          <div className='prose'>
            <Markdown content={post.content} />
          </div>
          {playlistData && (
            <div className='prose'>
              <Link href={playlistData[1]}>
                <Image
                  className='rounded-lg  mt-4'
                  src={playlistData[0]}
                  width={100}
                  height={100}
                  alt='playlist'
                />
              </Link>
            </div>
          )}
        </div>
      </article>
      <hr className='border-accent-2 mt-28 mb-24' />
      <MoreStories morePosts={morePosts} />
    </div>
  )
}
