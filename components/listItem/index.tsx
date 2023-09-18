import Image from 'next/image'
import Link from 'next/link'
import { Article } from '@/libs/microcms'
import { formatDate } from '@/libs/utils'
import Tags from '../tags'

type Props = {
  article: Article
}

export default function ListItem({ article }: Props) {
  return (
    <li className="mb-10">
      <Link href={`/articles/${article.id}`} className="block sm:flex gap-40">
        {article.thumbnail ? (
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
        ) : (
          <Image
            className="h-auto w-full sm:w-[240px] mb-4 sm:mb-0"
            src="/no-image.png"
            alt="No Image"
            width={1200}
            height={630}
          />
        )}
        <dl>
          <dt className="text-xl sm:text-2xl mb-2 font-bold">
            {article.title}
          </dt>
          <dd>
            <Tags tags={article.tags} hasLink={false} />
          </dd>
          <dd>{formatDate(article.publishedAt || article.createdAt)}</dd>
        </dl>
      </Link>
    </li>
  )
}
