import { useThemes } from '../providers'

import icons from '../icons/icons.json'

export const CloseIcon = () => {
	const { colorSwapper } = useThemes()
	const className = 'h-9 cursor-pointer'
	return <img className={className} src={colorSwapper(icons.close)} alt="" />
}
