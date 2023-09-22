import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { LIMIT } from '@/constants'
import { getTagList } from '@/libs/microcms'
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
        <header className="pt-4 px-6 pb-2">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="SIMPLE"
              className="h-6 w-auto"
              width={348}
              height={133}
              priority
            />
          </Link>
        </header>
        <Nav tags={tags.contents} />
        <main className="w-auto sm:w-[720px] p-6 sm:p-0 mx-auto">
          {children}
        </main>
        <footer className="py-4 px-6 text-center">
          <p className="text-[#999] text-xs">
            © SIMPLE. All Rights Reserved 2023
          </p>
        </footer>
      </body>
    </html>
  )
}
