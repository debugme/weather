import { SettingsList } from '../components'
import { useLocales } from '../providers'
import { titlecase } from '../utilities'

export const Settings = () => {
	const { t } = useLocales()

	return (
		<section className="flex flex-col w-3/4 mx-auto xborder">
			<h2 className="text-3xl text-secondary-400">
				{titlecase(t('settings'))}
			</h2>
			<div className="flex flex-col gap-2 borderx">
				<SettingsList />
			</div>
		</section>
	)
}
