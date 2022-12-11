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

  const toggleBoxClassList = `relative w-14 border border-primary-600  h-8 rounded-2xl cursor-pointer ${isEnabled ? "bg-primary-600" : "bg-secondary-600"}`
  const toggleClassList = `transition-all absolute h-6 w-6 rounded-full top-[3px] ${isEnabled ? "right-[3px] bg-secondary-600" : "left-[3px] bg-primary-600"}`

  return (
    <div className={toggleBoxClassList} onClick={onClick}>
      <span className={toggleClassList} />
    </div>
  )
}