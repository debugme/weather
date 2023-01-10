import { useIcons } from '../providers'

export const GithubIcon = () => {
	const { icons } = useIcons()
	return <img className="h-6 w-5" src={icons.github} alt="" />
}
