import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="pt-4 px-6 pb-2">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="YOSHIMO"
          className="h-6 w-auto"
          width={348}
          height={133}
          priority
        />
      </Link>
    </header>
  )
}
