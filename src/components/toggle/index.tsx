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

  const toggleBoxClassList = `relative w-16 border border-primary-600 h-7 rounded-2xl cursor-pointer ${isEnabled ? "bg-primary-600" : "bg-secondary-600"}`
  const toggleClassList = `transition-all absolute h-4 w-7 rounded-full top-[5px] ${isEnabled ? "right-[5px] bg-secondary-600" : "left-[5px] bg-primary-600"}`

  return (
    <div className={toggleBoxClassList} onClick={onClick}>
      <span className={toggleClassList} />
    </div>
  )
}