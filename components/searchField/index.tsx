'use client'

import { useSearchParams } from 'next/navigation'
import { useCallback, useRef, useState } from 'react'

export default function SearchField() {
  const [composing, setComposition] = useState(false)
  const startComposition = () => setComposition(true)
  const endComposition = () => setComposition(false)
  const _onEnter: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.code === 'Enter' && !composing) {
        location.href = `/search?q=${inputRef.current?.value}`
      }
    },
    [composing]
  )
  const inputRef = useRef<HTMLInputElement>(null)
  const searchParams = useSearchParams()
  const defaultQuery = searchParams.get('q') || ''

  return (
    <input
      type="search"
      name="q"
      ref={inputRef}
      className="py-0 pr-6 pl-12 border-y border-x border-solid border-[#ccc]
      rounded-3xl w-full sm:w-[600px] h-10 box-border my-0 mx-6 sm:mx-0
      bg-[url('/search.svg')] bg-no-repeat"
      style={{
        backgroundPosition: '16px center',
      }}
      placeholder="Search..."
      onKeyDown={_onEnter}
      onCompositionStart={startComposition}
      onCompositionEnd={endComposition}
      defaultValue={defaultQuery}
    />
  )
}
