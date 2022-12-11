import { ChangeEventHandler, FC, useMemo } from "react"

export type HandleProps = {
  text: string
  setText: (_: string) => void
}

export const Handle: FC<HandleProps> = (props) => {
  const { text, setText } = props

  const _onChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setText(event.currentTarget.value)

  const onChange = useMemo(() => _onChange, [])

  return <input className="py-2 px-4 border-none rounded-lg text-secondary-800 bg-secondary-300 outline-none text-sm" value={text} onChange={onChange} />
}