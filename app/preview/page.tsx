import { getDetail } from '@/libs/microcms'
import Article from '@/components/article'

type Props = {
  searchParams: {
    slug?: string
    draftKey?: string
  }
}

// ISRを無効にし、キャッシュを使用せずにSSRでページをレンダリングする
export const revalidate = 0

export default async function Page({ searchParams }: Props) {
  if (!searchParams.slug || !searchParams.draftKey) {
    return null
  }
  const data = await getDetail(searchParams.slug, {
    draftKey: searchParams.draftKey,
  })

  return <Article data={data} />
}
