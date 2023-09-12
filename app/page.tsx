import Link from 'next/link'
import { formatDate } from '@/libs/utils'
import { getList } from '@/libs/microcms'

export default async function Home() {
  const data = await getList()

  return (
    <ul>
      {data.contents.map((article) => (
        <li key={article.id} className="mb-10">
          <Link
            href={`/articles/${article.id}`}
            className="block sm:flex gap-40"
          >
            <picture>
              <source
                type="image/webp"
                media="(max-width: 640px)"
                srcSet={`${article.thumbnail?.url}?fm=webp&w=414 1x, ${article.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
              />
              <source
                type="image/webp"
                srcSet={`${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126 1x, ${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126&dpr=2 2x`}
              />
              <img
                src={article.thumbnail?.url}
                alt=""
                className="h-auto w-full sm:w-[240px] mb-4 sm:mb-0"
                width={article.thumbnail?.width}
                height={article.thumbnail?.height}
              />
            </picture>
            <dl>
              <dt className="text-xl sm:text-2xl mb-2 font-bold">
                {article.title}
              </dt>
              <dd>{formatDate(article.publishedAt || article.createdAt)}</dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  )
}
