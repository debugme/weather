import { ChangeEventHandler, useRef, useState } from 'react'
import { SpinnerIcon } from '../../icons'
import { useLocales } from '../../providers'

import { ChipList } from '../chipList'
import { Field } from './field'
import { SearchIcon } from '../../icons'

export type SearchBoxProps = {
	searchTerm: string
	setSearchTerm: (searchTerm: string) => void
	isLoading: boolean
}

const list = ['london', 'dubai', 'tokyo', 'minsk', 'abuja']

export const SearchBox = (props: SearchBoxProps) => {
	const { searchTerm, setSearchTerm, isLoading } = props
	const { t } = useLocales()

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
		<label
			className="relative w-full sm:mx-auto mt-4 lg:mt-0"
			htmlFor="searchBox"
		>
			<Field value={searchTerm} onChange={onChange} />
			<span className="hidden md:block">
				<div className="mt-8" />
				<h2 className="text-3xl text-secondary-400 capitalize">
					{t('popular')}
				</h2>
				<ChipList
					list={list}
					selected={searchTerm}
					setSelected={setSearchTerm}
				/>
			</span>
			<SearchIcon />
			{showSpinner || isLoading ? <SpinnerIcon /> : null}
		</label>
	)
}
