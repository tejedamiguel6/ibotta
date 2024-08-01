import ContentfulImage from '../../../lib/contentful-image'
import Link from 'next/link'

export default function CoverImage({
  title,
  url,
  slug,
}: {
  title: string
  url: string
  slug?: string
}) {
  const image = (
    <ContentfulImage
      alt={`Cover Image for ${title}`}
      priority
      width={2000}
      height={1000}
      className={{
        'hover:shadow-medium transition-shadow duration-200': slug,
      }}
      src={url}
    />
  )

  return (
    <div className='sm:mx-0'>
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
