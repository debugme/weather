import { FC, useState } from "react"

export type ToggleProps = {
  isOn: boolean
  onClick: (isEnabled: boolean) => void
}

export const Toggle: FC<ToggleProps> = (props) => {
  const { isOn, onClick } = props

  const [isEnabled, setEnabled] = useState(isOn)
  const toggle = () => { 
    onClick(!isEnabled)
    setEnabled(isEnabled => !isEnabled) 
  }
  const alignment = isEnabled ? "right-[3px]" : "left-[3px]"
  return (
    <div className="relative w-10 border border-secondary-700 bg-secondary-400 h-6 rounded-2xl cursor-pointer" onClick={toggle}>
      <span className={"transition-all absolute h-4 w-4 rounded-full bg-secondary-700 top-[3px] " + alignment} />
    </div>
  )
}