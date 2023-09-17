import { LIMIT } from '@/constants'
import { getList } from '@/libs/microcms'
import ListItem from '@/components/listItem'
import Pagination from '@/components/pagination'

type Props = {
  params: {
    current: string
  }
}

export default async function Page({ params }: Props) {
  const current = parseInt(params.current as string, 10)
  const data = await getList({
    limit: LIMIT,
    offset: LIMIT * (current - 1),
  })

  return (
    <div>
      <ul>
        {data.contents.map((article) => (
          <ListItem key={article.id} article={article} />
        ))}
      </ul>
      <Pagination totalCount={data.totalCount} current={current} />
    </div>
  )
}
