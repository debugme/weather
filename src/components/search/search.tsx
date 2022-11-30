import { ChangeEventHandler, FC, useRef, useState } from "react";

import { Nullable } from "../../types";
import { Search as SearchIcon } from "../images"
import { Field } from './field'
import { Spinner } from './spinner'
import { Popular } from './popular'
import { Status } from './status'

export type SearchProps = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void
  isLoading: boolean
  failure: Nullable<Error>
  resultCount: number
}

export const Search: FC<SearchProps> = (props) => {
  const { searchTerm, setSearchTerm, failure, resultCount, isLoading } = props

  const timerId = useRef<NodeJS.Timeout>()
  const [showSpinner, setShowSpinner] = useState(false)

  const showOrHideLoadingIndicator = () => {
    clearTimeout(timerId.current)
    setShowSpinner(true)
    timerId.current = setTimeout(() => {
      setShowSpinner(false)
    }, 500)
  }

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const searchTerm = event.target.value.toLocaleLowerCase()
    setSearchTerm(searchTerm)
    showOrHideLoadingIndicator()
  }

  return (
    <label className="relative w-full sm:mx-auto" htmlFor="searchBox">
      <Field value={searchTerm} onChange={onChange} />
      <Popular setSearchTerm={setSearchTerm} />
      <SearchIcon className="absolute top-4 left-3 w-6 h-6 text-secondary-700" />
      <Spinner showSpinner={showSpinner} />
      <Status searchTerm={searchTerm} isLoading={isLoading} failure={failure} resultCount={resultCount} />
    </label>
  )
}
