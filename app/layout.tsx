import './globals.css'
import { Inter, Roboto } from 'next/font/google'
import { EXAMPLE_PATH, CMS_NAME } from '@/lib/constants'

export const metadata = {
  title: `Next.js and ${CMS_NAME} Example`,
  description: `This is a blog built with Next.js and ${CMS_NAME}.`,
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

// const roboto = Roboto({
//   variable: '--font-roboto',
//   subsets: ['latin'],
//   display: 'swap',
//   weight: '400',
// })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${inter.variable} `}>
      <body>
        <section className='min-h-screen'>
          <main>{children}</main>
        </section>
      </body>
    </html>
  )
}
