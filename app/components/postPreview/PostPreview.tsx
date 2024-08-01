import Link from 'next/link'
import Avatar from '@/app/components/authorAvatar/authorAvatar'

import DateComponent from '@/app/utils/date'
import CoverImage from '../coverImage/coverImage'

export default function PostPreview({
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
    <div>
      <div className='mb-5'>
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <h3 className='text-3xl mb-3 leading-snug font-bold'>
        <Link href={`/posts/${slug}`} className='hover:underline'>
          {title}
        </Link>
      </h3>
      <div className='text-lg mb-4'>
        <DateComponent dateString={date} />
      </div>
      <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  )
}
