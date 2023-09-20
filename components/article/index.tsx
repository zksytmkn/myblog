import { type Article } from '@/libs/microcms'
import { formatDate, formatRichText } from '@/libs/utils'
import Tags from '@/components/tags'

type Props = {
  data: Article
}

export default function Article({ data }: Props) {
  return (
    <main className="flex flex-col justify-between items-center">
      <h1 className="text-4xl mb-6 text-center">{data.title}</h1>
      <Tags tags={data.tags} />
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
        <div>
          <time>{formatDate(data.publishedAt || data.createdAt)}</time>
        </div>
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
        [&>h1]:text-3xl
        [&>h1]:font-bold
        [&>h1]:mt-9
        [&>h1]:mb-4
        [&>h1]:border-b
        [&>h1]:border-solid
        [&>h1]:border-[#ccc]
        [&>h2]:text-2xl
        [&>h2]:font-bold
        [&>h2]:mt-9
        [&>h2]:mb-4
        [&>h3]:text-xl
        [&>h3]:font-bold
        [&>h3]:mt-9
        [&>h3]:mb-4
        [&>h4]:text-lg
        [&>h4]:font-bold
        [&>h4]:mt-9
        [&>h4]:mb-4
        [&>h5]:text-base
        [&>h5]:font-bold
        [&>h5]:mt-9
        [&>h5]:mb-4
        [&>p]:mt-8
        [&>p]:mb-2
        [&>p]:leading-loose
        [&>pre]:bg-[#f9f9f9]
        [&>pre]:shadow-inner
        [&>pre]:p-2
        [&>pre]:rounded-sm
        [&>pre]:overflow-x-auto
        [&_pre>code]:block
        [&_pre>code]:overflow-x-auto
        [&_pre>code]:bg-[#f7f7f7]
        [&_pre>code]:p-4
        [&_pre>code]:rounded-lg
        [&_ul]:my-2
        [&_ul]:ml-8
        [&_ol]:my-2
        [&_ol]:ml-8
        [&>ul]:my-8
        [&>ol]:my-8
        [&_ul>li]:list-disc
        [&_ol>li]:list-decimal
        [&_li]:my-2
        [&_a]:underline
        [&>figure>img]:max-w-full
        [&>figure>img]:h-auto
        [&>figure>img]:my-8
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
        [&>table th]:bg-[#f7f7f7]
        [&>table th]:text-left
        [&>table th]:p-4
        [&>table td]:text-left
        [&>table td]:p-4"
        dangerouslySetInnerHTML={{
          __html: `${formatRichText(data.content)}`,
        }}
      />
    </main>
  )
}
