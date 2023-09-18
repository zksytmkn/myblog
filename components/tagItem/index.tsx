import Link from 'next/link'
import { Tag } from '@/libs/microcms'

type Props = {
  tag: Tag
  hasLink?: boolean
}

export default function TagItem({ tag, hasLink = true }: Props) {
  if (hasLink) {
    return (
      <Link
        href={`/tags/${tag.id}`}
        className="bg-[#f3f3f3] py-1 px-2 text-xs rounded"
      >
        #{tag.name}
      </Link>
    )
  }
  return (
    <span className="bg-[#f3f3f3] py-1 px-2 text-xs rounded">#{tag.name}</span>
  )
}
