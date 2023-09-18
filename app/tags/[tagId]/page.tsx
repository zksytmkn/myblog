import { LIMIT } from '@/constants'
import { getList, getTag } from '@/libs/microcms'
import ListItem from '@/components/listItem'
import Pagination from '@/components/pagination'
import TagItem from '@/components/tagItem'

type Props = {
  params: {
    tagId: string
  }
}

export default async function Page({ params }: Props) {
  const data = await getList({
    limit: LIMIT,
    filters: `tags[contains]${params.tagId}`,
  })
  const tag = await getTag(params.tagId)
  return (
    <div>
      <p className="mb-8">
        <TagItem tag={tag} hasLink={false} />
        の記事一覧
      </p>
      <ul>
        {data.contents.map((article) => (
          <ListItem key={article.id} article={article} />
        ))}
      </ul>
      <Pagination totalCount={data.totalCount} />
    </div>
  )
}
