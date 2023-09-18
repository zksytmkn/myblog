import { LIMIT } from '@/constants'
import { getList, getTag } from '@/libs/microcms'
import ListItem from '@/components/listItem'
import Pagination from '@/components/pagination'

type Props = {
  params: {
    tagId: string
  }
}

export default async function Page({ params }: Props) {
  const { tagId } = params
  const data = await getList({
    limit: LIMIT,
    filters: `tags[contains]${tagId}`,
  })
  const tag = await getTag(tagId)
  return (
    <div>
      <ul>
        {data.contents.map((article) => (
          <ListItem key={article.id} article={article} />
        ))}
      </ul>
      <Pagination totalCount={data.totalCount} basePath={`/tags/${tagId}`} />
    </div>
  )
}
