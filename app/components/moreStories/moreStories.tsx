import PostPreview from '@/app/components/postPreview/PostPreview'

export default function MoreStories({ morePosts }: { morePosts: any[] }) {
  return (
    <section className='mt-[-4rem]'>
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32'>
        {morePosts.map((post) => {
          return (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          )
        })}
      </div>
    </section>
  )
}
