import { useThemes } from '../providers'
import icons from './icons.json'

export const SearchIcon = () => {
	const { colorSwapper } = useThemes()
	const className = 'absolute w-6 h-6 top-4 left-3'
	return <img className={className} src={colorSwapper(icons.search)} alt="" />
}
