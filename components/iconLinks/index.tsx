import Image from 'next/image'
import Link from 'next/link'

export default function IconLinks() {
  return (
    <div className="flex space-x-4 py-4 lg:py-0">
      <Link href="/">
        <Image src="/home.svg" alt="home" width={24} height={24}></Image>
      </Link>
      <Link href="https://github.com/zksytmkn" target="_blank">
        <Image src="/github.svg" alt="github" width={24} height={24}></Image>
      </Link>
      <Link href="https://twitter.com/zksytmkn" target="_blank">
        <Image src="/twitter.svg" alt="twitter" width={24} height={24}></Image>
      </Link>
    </div>
  )
}
