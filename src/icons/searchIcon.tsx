import { useIcons } from '../providers'

export const SearchIcon = () => {
	const { icons } = useIcons()
	const className = 'absolute w-6 h-6 top-4 left-3'
	return <img className={className} src={icons.search} alt="" />
}
