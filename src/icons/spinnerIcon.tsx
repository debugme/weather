import { useIcons } from '../providers'

export const SpinnerIcon = () => {
	const { icons } = useIcons()
	const className =
		'absolute w-6 h-6 top-4 right-[7px] animate-spin bg-secondary-400'
	return <img className={className} src={icons.spinner} alt="" />
}
