import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simple Blog',
  description: 'A simple blog presented by microCMS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <head />
        <header className="py-4 px-6">
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
