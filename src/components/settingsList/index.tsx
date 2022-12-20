import { useAvatars, useBreakpoints, useLanguages, useSettings, useThemes } from "../../providers"

import { Handle } from "../handle"
import { Selector } from "../selector"
import { Toggle } from "../toggle"

import { SettingsSection } from "./settingsSection"

export const SettingsList = () => {
  const { handle, setHandle } = useSettings()
  const { avatarInfo, setAvatarInfo, avatarInfoList } = useAvatars()
  const { themeInfo, setThemeInfo, themeInfoList } = useThemes()
  const { languageInfo, setLanguageInfo, languageInfoList, t } = useLanguages()
  const { showBreakpoints, toggleBreakpoints } = useBreakpoints()

  return (
    <div className="flex flex-col gap-2">
      <SettingsSection title={t("name")} subtitle={t("chooseName")}>
        <Handle text={handle} setText={setHandle} />
      </SettingsSection>
      <SettingsSection title={t("avatar")} subtitle={t("chooseAvatar")}>
        <Selector selectedOption={avatarInfo} setSelectedOption={setAvatarInfo} options={avatarInfoList} />
      </SettingsSection>
      <SettingsSection title={t("theme")} subtitle={t("chooseTheme")}>
        <Selector selectedOption={themeInfo} setSelectedOption={setThemeInfo} options={themeInfoList} />
      </SettingsSection>
      <SettingsSection title={t("locale")} subtitle={t("chooseLocale")}>
        <Selector selectedOption={languageInfo} setSelectedOption={setLanguageInfo} options={languageInfoList} />
      </SettingsSection>
      <SettingsSection title={t("breakpoints")} subtitle={t("showBreakpoints")}>
        <Toggle isOn={showBreakpoints} onClick={toggleBreakpoints} />
      </SettingsSection>
    </div>
  )
}