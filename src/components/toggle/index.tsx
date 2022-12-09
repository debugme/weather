import { FC, useState } from "react"

export type ToggleProps = {
  isOn: boolean
  onClick: () => void
}

export const Toggle: FC<ToggleProps> = (props) => {
  const [isEnabled, setEnabled] = useState(props.isOn)
  
  const onClick = () => { 
    props.onClick()
    setEnabled(isEnabled => !isEnabled) 
  }

  const toggleBoxClassList = "relative w-10 border border-secondary-700  h-6 rounded-2xl cursor-pointer bg-secondary-400"
  const toggleClassList = `transition-all absolute h-4 w-4 rounded-full bg-secondary-700 top-[3px] ${isEnabled ? "right-[3px]" : "left-[3px]"}`

  return (
    <div className={toggleBoxClassList} onClick={onClick}>
      <span className={toggleClassList} />
    </div>
  )
}