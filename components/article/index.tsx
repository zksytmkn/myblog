import { type Article } from '@/libs/microcms'
import { formatRichText } from '@/libs/utils'
import PublishedDate from '@/components/date'
import TagList from '@/components/tagList'

type Props = {
  data: Article
}

export default function Article({ data }: Props) {
  return (
    <main className="flex flex-col justify-between items-center">
      <h1 className="text-4xl mb-6 text-center font-bold">{data.title}</h1>
      <TagList tags={data.tags} />
      <p className="my-6 mx-10 sm:mx-0 sm:mt-6 sm:mb-10 text-[#999] text-center">
        {data.description}
      </p>
      <div className="flex items-center mb-10 sm:mb-16 text-sm sm:text-base">
        {data.writer && (
          <div className="flex justify-center items-center border-r border-solid border-[#ccc] pr-6 sm:pr-10 mr-6 sm:mr-10">
            <picture>
              <source
                type="image/webp"
                srcSet={`${data.writer?.image?.url}?fm=webp&fit=crop&w=48&h=48 1x, ${data.writer?.image?.url}?fm=webp&fit=crop&w=48&h=48&dpr=2 2x`}
              />
              <img
                src={data.writer?.image?.url}
                alt=""
                className="block w-[32px] sm:w-[48px] h-[32px] sm:h-[48px] rounded-full"
                width={data.writer?.image?.width}
                height={data.writer?.image?.height}
              />
            </picture>
            <span className="ml-4">{data.writer?.name}</span>
          </div>
        )}
        <PublishedDate date={data.publishedAt || data.createdAt} />
      </div>
      <picture>
        <source
          type="image/webp"
          media="(max-width: 640px)"
          srcSet={`${data.thumbnail?.url}?fm=webp&w=414 1x, ${data.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
        />
        <source
          type="image/webp"
          srcSet={`${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504 1x, ${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504&dpr=2 2x`}
        />
        <img
          src={data.thumbnail?.url}
          alt=""
          className="w-full sm:w-[960px] h-auto mb-10 sm:mb-16]"
          width={data.thumbnail?.width}
          height={data.thumbnail?.height}
        />
      </picture>
      <div
        className="w-full sm:w-[720px]
        [&_first-child]:mt-0
        [&>h1]:text-[2rem]
        [&>h1]:mt-9
        [&>h1]:mb-4
        [&>h1]:border-b
        [&>h1]:border-solid
        [&>h1]:border-[#ccc]
        [&>h2]:text-2xl
        [&>h2]:mt-9
        [&>h2]:mb-4
        [&>h3]:text-xl
        [&>h3]:mt-9
        [&>h3]:mb-4
        [&>h4]:text-lg
        [&>h4]:mt-9
        [&>h4]:mb-4
        [&>h5]:text-base
        [&>h5]:mt-9
        [&>h5]:mb-4
        [&>p]:mt-8
        [&>p]:mb-2
        [&>p]:leading-loose
        [&>pre]:overflow-x-auto
        [&_pre>code]:bg-[#f7f7f7]
        [&_pre>code]:block
        [&_pre>code]:overflow-x-auto
        [&_pre>code]:p-4
        [&_div[data-filename]]:before:inline-block
        [&_div[data-filename]]:before:bg-[#f3f3f3]
        [&_div[data-filename]]:before:content-[attr(data-filename)]
        [&_div[data-filename]]:before:mt-4
        [&_div[data-filename]]:before:font-mono
        [&_div[data-filename]]:before:text-xs
        [&_div[data-filename]]:before:py-1
        [&_div[data-filename]]:before:px-4
        [&_div[data-filename]]:before:rounded-t
        [&_ul]:ml-8
        [&_ol]:ml-8
        [&>ul]:my-8
        [&>ol]:my-8
        [&_ul>li]:list-disc
        [&_ol>li]:list-decimal
        [&_li]:my-2
        [&_a]:underline
        [&>figure]:my-8
        [&>figure_img]:max-w-full
        [&>figure_img]:h-auto
        [&>figure_figcaption]:text-[0.8rem]
        [&>figure_figcaption]:text-[#999]
        [&>strong]:font-bold
        [&>blockquote]:border-l-4
        [&>blockquote]:border-solid
        [&>blockquote]:border-[#ccc]
        [&>blockquote]:pl-4
        [&>blockquote]:my-8
        [&>blockquote]:italic
        [&>hr]:my-16
        [&>hr]:h-px
        [&>hr]:bg-[#ccc]
        [&>hr]:border-none
        [&>table]:w-full
        [&>table]:my-8
        [&>table_th]:bg-[#f7f7f7]
        [&>table_th]:text-left
        [&>table_th]:p-4
        [&>table_th]:border
        [&>table_td]:text-left
        [&>table_td]:p-4
        [&>table_td]:border"
        dangerouslySetInnerHTML={{
          __html: `${formatRichText(data.content)}`,
        }}
      />
    </main>
  )
}
