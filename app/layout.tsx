import type { Metadata } from 'next'
import { LIMIT } from '@/constants'
import { getTagList } from '@/libs/microcms'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Nav from '@/components/nav'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'Yoshimo Blog',
  description: 'A yoshimo blog presented by yoshimo',
  openGraph: {
    title: 'Yoshimo Blog',
    description: 'A yoshimo blog presented by yoshimo',
    images: '/ogp.png',
  },
  alternates: {
    canonical: '/',
  },
}

type Props = {
  children: React.ReactNode
}

export default async function RootLayout({ children }: Props) {
  const tags = await getTagList({
    limit: LIMIT,
  })

  return (
    <html lang="ja">
      <body className="text-[#333]">
        <Header />
        <Nav tags={tags.contents} />
        <main className="w-auto sm:w-[720px] p-6 sm:p-0 mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
