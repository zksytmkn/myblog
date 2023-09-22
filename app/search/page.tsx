import { getList } from '@/libs/microcms'
import ArticleList from '@/components/articleList'
import Pagination from '@/components/pagination'

type Props = {
  searchParams: {
    q?: string
  }
}

export const revalidate = 0

export default async function Page({ searchParams }: Props) {
  const data = await getList({
    q: searchParams.q,
  })

  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination
        totalCount={data.totalCount}
        basePath="/search"
        q={searchParams.q}
      />
    </>
  )
}
