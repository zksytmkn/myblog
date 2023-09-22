import Image from 'next/image'
import { formatDate } from '@/libs/utils'

type Props = {
  date: string
}

export default function PublishedDate({ date }: Props) {
  return (
    <span className="flex items-center leading-4 gap-2 my-3">
      <Image src="/clock.svg" alt="" width={16} height={16} priority />
      {formatDate(date)}
    </span>
  )
}
