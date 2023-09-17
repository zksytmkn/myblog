import { LIMIT } from '@/constants'
import { getList } from '@/libs/microcms'
import ListItem from '@/components/listItem'
import Pagination from '@/components/pagination'

export default async function Page() {
  const data = await getList({
    limit: LIMIT,
  })

  return (
    <div>
      <ul>
        {data.contents.map((article) => (
          <ListItem key={article.id} article={article} />
        ))}
      </ul>
      <Pagination totalCount={data.totalCount} />
    </div>
  )
}
