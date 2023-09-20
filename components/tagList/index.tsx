import { Tag } from '@/libs/microcms'
import TagListItem from '@/components/tagListItem'

type Props = {
  tags?: Tag[]
  hasLink?: boolean
}

export default function TagList({ tags, hasLink = true }: Props) {
  if (!tags) {
    return null
  }
  return (
    <ul className="flex gap-2 my-2">
      {tags.map((tag) => (
        <li key={tag.id}>
          <TagListItem tag={tag} hasLink={hasLink} />
        </li>
      ))}
    </ul>
  )
}
