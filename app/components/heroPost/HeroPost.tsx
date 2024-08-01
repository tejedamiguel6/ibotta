import CoverImage from '../coverImage/coverImage'
import Avatar from '../authorAvatar/authorAvatar'
import Link from 'next/link'
import Date from '../../utils/date'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: {
  title: string
  coverImage: any
  date: string
  excerpt: string
  author: any
  slug: string
}) {
  return (
    <section>
      <div className='mb-8 md:mb-16'>
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div className='md:grid md:grid-cols-1 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28'>
        <div className='mb-6 mt-[-3rem]'>
          <h3 className='mb-4 lg:text-5xl text-4xl font-bold text-gray-800 '>
            <div className='pt-8'>
              <Link
                href={`/posts/${slug}`}
                className='hover:underline font-bold '
              >
                {title}
              </Link>
            </div>
          </h3>
          <div className='mb-4 md:mb-0 text-lg pb-6'>
            <Date dateString={date} />
          </div>
          <div>
            <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
          </div>
        </div>
        <div>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </section>
  )
}
