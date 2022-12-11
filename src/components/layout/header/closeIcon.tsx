import { FC } from "react"

type CloseIconProps = {
  className: string;
}

export const CloseIcon: FC<CloseIconProps> = (props) => {
  const { className } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}