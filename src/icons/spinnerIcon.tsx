import { useThemes } from '../providers'

import icons from './icons.json'

export const SpinnerIcon = () => {
	const { colorSwapper } = useThemes()
	const className =
		'absolute w-6 h-6 top-4 right-[7px] animate-spin bg-secondary-400'
	return <img className={className} src={colorSwapper(icons.spinner)} alt="" />
}
