import { ChangeEventHandler, useRef, useState } from 'react'
import { useIcons, useLocales } from '../../providers'
import { titlecase } from '../../utilities'

import { ChipList } from '../chipList'
import { Field } from './field'

export const SpinnerIcon = () => {
	const { icons } = useIcons()
	const className =
		'absolute w-6 h-6 top-4 right-[7px] animate-spin bg-secondary-400'
	return <img className={className} src={icons.spinner} alt="" />
}

export const SearchIcon = () => {
	const { icons } = useIcons()
	const className = 'absolute w-6 h-6 top-4 left-3'
	return <img className={className} src={icons.search} alt="" />
}

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
				<h2 className="text-3xl text-secondary-400">
					{titlecase(t('popular'))}
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
