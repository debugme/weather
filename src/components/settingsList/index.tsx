import {
	useAvatars,
	useBreakpoints,
	useLocales,
	useSecurity,
	useHandle,
	useThemes,
} from '../../providers'
import { titlecase } from '../../utilities'

import { Handle } from '../handle'
import { Selector } from '../selector'
import { Toggle } from '../toggle'

import { SettingsSection } from './settingsSection'

export const SettingsList = () => {
	const { handle, setHandle } = useHandle()
	const { avatar, setAvatar, avatarList, avatarMap } = useAvatars()
	const { theme, setTheme, themeList, themeMap } = useThemes()
	const { locale, setLocale, localeList, localeMap, t } = useLocales()
	const { breakpoints, toggleBreakpoints } = useBreakpoints()
	const { signOut } = useSecurity()

	return (
		<div className="flex flex-col gap-2">
			<SettingsSection title={t('name')} subtitle={t('chooseName')}>
				<Handle text={handle} setText={setHandle} />
			</SettingsSection>
			<SettingsSection title={t('avatar')} subtitle={t('chooseAvatar')}>
				<Selector
					selected={avatar}
					setSelected={setAvatar}
					selectionList={avatarList}
					selectionMap={avatarMap}
				/>
			</SettingsSection>
			<SettingsSection title={t('theme')} subtitle={t('chooseTheme')}>
				<Selector
					selected={theme}
					setSelected={setTheme}
					selectionList={themeList}
					selectionMap={themeMap}
				/>
			</SettingsSection>
			<SettingsSection title={t('locale')} subtitle={t('chooseLocale')}>
				<Selector
					selected={locale}
					setSelected={setLocale}
					selectionList={localeList}
					selectionMap={localeMap}
				/>
			</SettingsSection>
			<SettingsSection title={t('breakpoints')} subtitle={t('showBreakpoints')}>
				<Toggle isOn={breakpoints} onClick={toggleBreakpoints} />
			</SettingsSection>
			<SettingsSection title={t('signOut')} subtitle={t('showSignOut')}>
				<button
					onClick={signOut}
					className="py-2 px-4 rounded-lg text-sm outline-none text-primary-500 bg-secondary-600 outline-primary-600 focus:outline-white active:outline-primary-600"
				>
					{titlecase(t('signOut'))}
				</button>
			</SettingsSection>
		</div>
	)
}
