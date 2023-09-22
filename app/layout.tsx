import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LIMIT } from '@/constants'
import { getTagList } from '@/libs/microcms'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Nav from '@/components/nav'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'Simple Blog',
  description: 'A simple blog presented by microCMS',
  openGraph: {
    title: 'Simple Blog',
    description: 'A simple blog presented by microCMS',
    images: '/og-image.png',
  },
  alternates: {
    canonical: '/',
  },
}

type Props = {
  children: React.ReactNode
}

export const revalidate = 0

export default async function RootLayout({ children }: Props) {
  const tags = await getTagList({
    limit: LIMIT,
  })

  return (
    <html lang="ja">
      <body className={inter.className}>
        <head />
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
