import { LIMIT } from '@/constants'
import { getList } from '@/libs/microcms'
import ArticleList from '@/components/articleList'
import Pagination from '@/components/pagination'

type Props = {
  params: {
    tagId: string
  }
}

export const revalidate = 60

export default async function Page({ params }: Props) {
  const { tagId } = params
  const data = await getList({
    limit: LIMIT,
    filters: `tags[contains]${tagId}`,
  })

  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} basePath={`/tags/${tagId}`} />
    </>
  )
}
