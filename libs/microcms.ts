import { notFound } from 'next/navigation'
import { createClient } from 'microcms-js-sdk'
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from 'microcms-js-sdk'

// タグの型定義
export type Tag = {
  name: string
} & MicroCMSContentId &
  MicroCMSDate

// ライターの型定義
export type Writer = {
  name: string
  image?: MicroCMSImage
} & MicroCMSContentId &
  MicroCMSDate

// ブログの型定義
export type Blog = {
  title: string
  description: string
  content: string
  thumbnail?: MicroCMSImage
  tags?: Tag[]
  writer?: Writer
}

export type Article = Blog & MicroCMSContentId & MicroCMSDate

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required')
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required')
}

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
})

// ブログ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Blog>({
      endpoint: 'blog',
      queries,
    })
    .catch(notFound)
  return listData
}

// ブログの詳細を取得
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client
    .getListDetail<Blog>({
      endpoint: 'blog',
      contentId,
      queries,
    })
    .catch(notFound)

  return detailData
}
