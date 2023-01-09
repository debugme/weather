import { useThemes } from '../providers'

import icons from '../icons/icons.json'

export const MenuIcon = () => {
	const { colorSwapper } = useThemes()
	const className = 'h-9 cursor-pointer'
	return <img className={className} src={colorSwapper(icons.menu)} alt="" />
}
