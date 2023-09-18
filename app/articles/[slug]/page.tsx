import { getDetail } from '@/libs/microcms'
import Article from '@/components/article'

type Props = {
  params: {
    slug: string
  }
}

export default async function Page({ params }: Props) {
  const data = await getDetail(params.slug)

  return <Article data={data} />
}
