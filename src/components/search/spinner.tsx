import { FC } from "react"
import { Spinner as SpinnerIcon } from "../images"

export type SpinnerProps = {
  showSpinner: boolean
}

export const Spinner: FC<SpinnerProps> = (props) => {
  const { showSpinner } = props
  if (!showSpinner)
    return null
  return <SpinnerIcon className="absolute w-6 h-6 top-4 right-3 text-secondary-700 animate-spin bg-secondary-50" />
}