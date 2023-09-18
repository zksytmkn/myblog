import { Tag } from '@/libs/microcms'
import TagItem from '@/components/tagItem'

type Props = {
  tags?: Tag[]
  hasLink?: boolean
}

export default function Tags({ tags, hasLink = true }: Props) {
  if (!tags) {
    return null
  }
  return (
    <ul className="flex gap-2 my-2">
      {tags.map((tag) => (
        <li key={tag.id}>
          <TagItem tag={tag} hasLink={hasLink} />
        </li>
      ))}
    </ul>
  )
}
