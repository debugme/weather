import { FC } from "react"
import { Spinner as SpinnerIcon } from "../images"

export type SpinnerProps = {
  showSpinner: boolean
}

export const Spinner: FC<SpinnerProps> = (props) => {
  const { showSpinner } = props
  if (!showSpinner)
    return null
  return <SpinnerIcon className="absolute top-4 right-3 w-6 h-6 text-secondary-700 animate-spin bg-secondary-50" />
}