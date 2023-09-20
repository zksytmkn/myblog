import { Article } from '@/libs/microcms'
import ArticleListItem from '@/components/articleListItem'

type Props = {
  articles?: Article[]
}

export default function ArticleList({ articles }: Props) {
  if (!articles) {
    return null
  }
  return (
    <ul>
      {articles.map((article) => (
        <ArticleListItem key={article.id} article={article} />
      ))}
    </ul>
  )
}
