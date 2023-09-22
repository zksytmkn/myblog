import { LIMIT } from '@/constants'
import { getList } from '@/libs/microcms'
import ArticleList from '@/components/articleList'
import Pagination from '@/components/pagination'

export const revalidate = 0

export default async function Page() {
  const data = await getList({
    limit: LIMIT,
  })

  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} />
    </>
  )
}
