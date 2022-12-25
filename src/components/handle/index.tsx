import { ChangeEventHandler, useMemo } from "react"

export type HandleProps = {
  text: string
  setText: (_: string) => void
}

export const Handle = (props: HandleProps) => {
  const { text, setText } = props

  const _onChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setText(event.currentTarget.value)

  const onChange = useMemo(() => _onChange, [])

  const colors = "text-primary-500 bg-secondary-600 outline-primary-600 focus:outline-white selection:text-secondary-700 selection:bg-primary-600"

  return <input className={`py-2 px-4 rounded-lg text-sm outline-none ${colors}`} value={text} onChange={onChange} />
}