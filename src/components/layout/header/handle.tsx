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

  const colors = "text-secondary-300 bg-secondary-600 border-secondary-300 outline-secondary-400 focus:outline-primary-600 selection:text-secondary-700 selection:bg-primary-600"

  return <input className={`py-2 px-4 rounded-lg text-sm outline-none ${colors}`} value={text} onChange={onChange} />
}