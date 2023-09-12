import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import { load } from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/hybrid.css'

export const formatDate = (date: string) => {
  const utcDate = new Date(date)
  const jstDate = utcToZonedTime(utcDate, 'Asia/Tokyo')
  return format(jstDate, 'd MMMM, yyyy')
}

export const formatRichText = (richText: string) => {
  const $ = load(richText)
  $('pre code').each((_, elm) => {
    const res = hljs.highlightAuto($(elm).text())
    $(elm).html(res.value)
  })
  return $.html()
}
