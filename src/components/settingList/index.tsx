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

import { SettingSection } from './settingSection'

export const SettingList = () => {
	const { handle, setHandle } = useHandle()
	const { avatar, setAvatar, avatarList, avatarMap } = useAvatars()
	const { theme, setTheme, themeList, themeMap } = useThemes()
	const { locale, setLocale, localeList, localeMap, t } = useLocales()
	const { breakpoints, toggleBreakpoints } = useBreakpoints()
	const { signOut } = useSecurity()

	return (
		<div className="flex flex-col gap-2">
			<SettingSection title={t('name')} subtitle={t('chooseName')}>
				<Handle text={handle} setText={setHandle} />
			</SettingSection>
			<SettingSection title={t('avatar')} subtitle={t('chooseAvatar')}>
				<Selector
					selected={avatar}
					setSelected={setAvatar}
					selectionList={avatarList}
					selectionMap={avatarMap}
				/>
			</SettingSection>
			<SettingSection title={t('theme')} subtitle={t('chooseTheme')}>
				<Selector
					selected={theme}
					setSelected={setTheme}
					selectionList={themeList}
					selectionMap={themeMap}
				/>
			</SettingSection>
			<SettingSection title={t('locale')} subtitle={t('chooseLocale')}>
				<Selector
					selected={locale}
					setSelected={setLocale}
					selectionList={localeList}
					selectionMap={localeMap}
				/>
			</SettingSection>
			<SettingSection title={t('breakpoints')} subtitle={t('showBreakpoints')}>
				<Toggle isOn={breakpoints} onClick={toggleBreakpoints} />
			</SettingSection>
			<SettingSection title={t('signOut')} subtitle={t('showSignOut')}>
				<button
					onClick={signOut}
					className="px-4 py-2 text-sm rounded-lg outline-none text-primary-500 bg-secondary-600 outline-primary-600 focus:outline-white active:outline-primary-600"
				>
					{titlecase(t('signOut'))}
				</button>
			</SettingSection>
		</div>
	)
}
