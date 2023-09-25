import { getTag } from '@/libs/microcms'
import TagListItem from '@/components/tagListItem'

type Props = {
  children: React.ReactNode
  params: {
    tagId: string
  }
}

export default async function TagsLayout({ children, params }: Props) {
  const { tagId } = params
  const tag = await getTag(tagId)

  return (
    <div>
      <p className="mb-8">
        <TagListItem tag={tag} hasLink={false} />
        の記事一覧
      </p>
      <div>{children}</div>
    </div>
  )
}
