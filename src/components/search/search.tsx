import { ChangeEventHandler, FC, useRef, useState } from "react";

import { ChipList } from '../chipList'
import { Search as SearchIcon } from "../images"
import { Field } from './field'
import { Spinner } from './spinner'

export type SearchProps = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void
  isLoading: boolean
}

const list = ["Milan", "Lagos", "Tokyo", "Kitui", "Arica", "Dubai"]

export const Search: FC<SearchProps> = (props) => {
  const { searchTerm, setSearchTerm, isLoading } = props

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
      <ChipList title="Popular" list={list} selected={searchTerm} setSelected={setSearchTerm} />
      <SearchIcon className="absolute w-6 h-6 top-4 left-3 text-secondary-700" />
      <Spinner showSpinner={showSpinner || isLoading} />
    </label>
  )
}
