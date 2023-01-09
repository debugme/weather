import { useThemes } from '../../../providers'

import icons from '../../../icons/icons.json'

export const Breakpoints = () => {
	const { colorSwapper } = useThemes()

	const className = 'w-6 h-6 ml-2 inline-flex'

	const cellphoneEnabled = colorSwapper(icons.cellphoneEnabled)
	const cellphoneDisabled = colorSwapper(icons.cellphoneDisabled)
	const tabletEnabled = colorSwapper(icons.tabletEnabled)
	const tabletDisabled = colorSwapper(icons.tabletDisabled)
	const laptopEnabled = colorSwapper(icons.laptopEnabled)
	const laptopDisabled = colorSwapper(icons.laptopDisabled)
	const desktopEnabled = colorSwapper(icons.desktopEnabled)
	const desktopDisabled = colorSwapper(icons.desktopDisabled)

	const cellphoneAlt = '0px - 767px'
	const tabletAlt = '768px - 1023px'
	const laptopAlt = '1024px - 1279px'
	const desktopAlt = '1280px - ∞'

	return (
		<div className="borderx">
			<section className="flex md:hidden">
				<img className={className} src={cellphoneEnabled} alt={cellphoneAlt} />
				<img className={className} src={tabletDisabled} alt={tabletAlt} />
				<img className={className} src={laptopDisabled} alt={laptopAlt} />
				<img className={className} src={desktopDisabled} alt={desktopAlt} />
			</section>

			<section className="hidden md:flex lg:hidden">
				<img className={className} src={cellphoneDisabled} alt={cellphoneAlt} />
				<img className={className} src={tabletEnabled} alt={tabletAlt} />
				<img className={className} src={laptopDisabled} alt={laptopAlt} />
				<img className={className} src={desktopDisabled} alt={desktopAlt} />
			</section>

			<section className="hidden lg:flex xl:hidden">
				<img className={className} src={cellphoneDisabled} alt={cellphoneAlt} />
				<img className={className} src={tabletDisabled} alt={tabletAlt} />
				<img className={className} src={laptopEnabled} alt={laptopAlt} />
				<img className={className} src={desktopDisabled} alt={desktopAlt} />
			</section>

			<section className="hidden xl:flex">
				<img className={className} src={cellphoneDisabled} alt={cellphoneAlt} />
				<img className={className} src={tabletDisabled} alt={tabletAlt} />
				<img className={className} src={laptopDisabled} alt={laptopAlt} />
				<img className={className} src={desktopEnabled} alt={desktopAlt} />
			</section>
		</div>
	)
}
