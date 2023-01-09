import { useThemes } from '../providers'

import icons from '../icons/icons.json'

export const GithubIcon = () => {
	const { colorSwapper } = useThemes()
	return <img className="h-6 w-5" src={colorSwapper(icons.github)} alt="" />
}
