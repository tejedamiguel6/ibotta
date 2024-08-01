import { fetchGraphQL } from '@/lib/graphql/fetchGraphql'
import Image from 'next/image'

const query = `query HeroImage { 
heroImage(id: "7mRMBBXTaLo0FiUsxerJRf") {
  title
    altText
    description
      image {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
    }
  }
}
  
`

export default async function Logo() {
  const { data } = await fetchGraphQL(query)
  const image = data.heroImage.image.url
  const altText = data.heroImage.altText
  const width = data.heroImage.image.width
  const height = data.heroImage.image.height

  return (
    <section className='flex justify-center mt-12 mx-auto mb-8'>
      <h1 className='text-center text-6xl md:text-8xl font-bold leading-tight md:pr-8'>
        <Image src={image} alt={altText} width={width} height={height} />
      </h1>
    </section>
  )
}
