import { ChangeEventHandler, FC, useRef, useState } from "react";

import { ChipList } from '../chipList'
import { Field } from './field'
import { SearchIcon } from "./searchIcon";
import { SpinnerIcon } from './spinnerIcon'

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
    <label className="relative w-full sm:mx-auto mt-4 lg:mt-0" htmlFor="searchBox">
      <Field value={searchTerm} onChange={onChange} />
      <span className="hidden md:block">
        <h2 className="mt-8 text-3xl text-secondary-400">Popular</h2>
        <ChipList list={list} selected={searchTerm} setSelected={setSearchTerm} />
      </span>
      <SearchIcon className="absolute w-6 h-6 top-4 left-3 text-secondary-700" />
      {(showSpinner || isLoading) ? <SpinnerIcon /> : null}
    </label>
  )
}
