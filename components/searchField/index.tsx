'use client'

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
  return (
    <input
      type="search"
      name="q"
      ref={inputRef}
      className="py-0 px-6 border-y border-x border-solid border-[#ccc] rounded-2xl w-full sm:w-[600px] height-[40px] box-border my-0 mx-6 sm:mx-0"
      placeholder="Search..."
      onKeyDown={_onEnter}
      onCompositionStart={startComposition}
      onCompositionEnd={endComposition}
    />
  )
}
