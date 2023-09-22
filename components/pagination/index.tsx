import Link from 'next/link'
import { LIMIT } from '@/constants'

type Props = {
  totalCount: number
  current?: number
  basePath?: string
  q?: string
}

export default function Pagination({
  totalCount,
  current = 1,
  basePath = '',
  q,
}: Props) {
  const pages = Array.from({ length: Math.ceil(totalCount / LIMIT) }).map(
    (_, i) => i + 1
  )

  return (
    <ul className="flex justify-center items-center p-6 mt-6">
      {pages.map((p) => (
        <li className="mx-1">
          {current !== p ? (
            <Link
              href={`${basePath}/p/${p}` + (q ? `?q=${q}` : '')}
              className="flex justify-center items-center w-9 h-6 rounded"
            >
              {p}
            </Link>
          ) : (
            <span className="flex justify-center items-center w-9 h-6 rounded bg-[#eee]">
              {p}
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}
