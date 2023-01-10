import { useLocales } from '../../../providers'
import { titlecase } from '../../../utilities'

export const Devices = () => {
	const { t } = useLocales()

	return (
		<section className="flex text-primary-600">
			<p className="md:hidden">{titlecase(t('cellphone'))}</p>
			<p className="hidden md:block lg:hidden">{titlecase(t('tablet'))}</p>
			<p className="hidden lg:block xl:hidden">{titlecase(t('laptop'))}</p>
			<p className="hidden xl:block">{titlecase(t('desktop'))}</p>
		</section>
	)
}
