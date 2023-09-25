import { Tag } from '@/libs/microcms'
import SearchField from '@/components/searchField'
import TagList from '@/components/tagList'

type Props = {
  tags: Tag[]
}

export default function Nav({ tags }: Props) {
  return (
    <nav className="flex flex-col justify-center items-center gap-2 pt-0 px-6 pb-6 mb-10 border-b border-solid border-[#f3f3f3]">
      <SearchField />
      <TagList tags={tags} />
    </nav>
  )
}
