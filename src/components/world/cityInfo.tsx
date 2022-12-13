import { FC, useEffect, useRef, useState } from "react"

import { getTimeFormatter } from "../../utilities"

export type CityInfoProps = {
  countryCode: string
}

export const CityInfo: FC<CityInfoProps> = (props) => {
  const { countryCode } = props

  const intervalId = useRef<NodeJS.Timeout>()
  const [localTime, setLocalTime] = useState(getTimeFormatter("GB", "medium").format(Date.now()))
  const oneSecond = 1000

  useEffect(() => {
    const callback = () => setLocalTime(getTimeFormatter(countryCode || "GB", "medium").format(new Date()))
    const cleanUp = () => clearInterval(intervalId.current)
    intervalId.current = setInterval(callback, oneSecond)
    return cleanUp
  }, [countryCode])

  return <p className="text-2xl tracking-widest pt-3 text-transparent bg-clip-text bg-primary-500">{localTime}</p>
}