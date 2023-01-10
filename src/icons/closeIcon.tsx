import { useIcons } from '../providers'

export const CloseIcon = () => {
	const { icons } = useIcons()
	const className = 'h-9 cursor-pointer'
	return <img className={className} src={icons.close} alt="" />
}
