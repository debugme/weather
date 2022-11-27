import { FC, Fragment, MouseEventHandler } from "react"

const popular = ["Tokyo", "Taipei", , "Hong Kong", "Shanghai", "Jakarta", "Manilla"]

export type PopularProps = {
  setSearchTerm: (searchTerm: string) => void
  resultCount: number
}

export const Popular: FC<PopularProps> = (props) => {
  const { setSearchTerm, resultCount } = props

  const onClick: MouseEventHandler<HTMLElement> = (event) => {
    const searchTerm = event.currentTarget.innerText
    setSearchTerm(searchTerm)
  }

  const tagList = popular.map(text => (
    <dd className="mt-3 py-2 px-3 text-primary-800 bg-primary-300 inline-block rounded-lg cursor-pointer w-auto text-center" key={text} onClick={onClick}>{text}</dd>
  ))

  return (
    <Fragment>
      <h2 className="text-3xl text-secondary-600 w-20 mt-8">Popular</h2>
      <dl className="flex justify-start items-center pt-1 flex-wrap gap-x-2 md:gap-2 md:pb-2">
        {tagList}
      </dl>
    </Fragment>
  )
}
