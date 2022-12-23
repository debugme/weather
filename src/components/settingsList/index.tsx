import { useAvatars, useBreakpoints, useLanguages, useSettings, useThemes } from "../../providers"

import { Handle } from "../handle"
import { Selector } from "../selector"
import { Toggle } from "../toggle"

import { SettingsSection } from "./settingsSection"

export const SettingsList = () => {
  const { handle, setHandle } = useSettings()
  const { avatar, setAvatar, avatarList, avatarMap } = useAvatars()
  const { theme, setTheme, themeList, themeMap } = useThemes()
  const { language, setLanguage, languageList, languageMap, t } = useLanguages()
  const { showBreakpoints, toggleBreakpoints } = useBreakpoints()

  return (
    <div className="flex flex-col gap-2">
      <SettingsSection title={t("name")} subtitle={t("chooseName")}>
        <Handle text={handle} setText={setHandle} />
      </SettingsSection>
      <SettingsSection title={t("avatar")} subtitle={t("chooseAvatar")}>
        <Selector selected={avatar} setSelected={setAvatar} selectionList={avatarList} selectionMap={avatarMap}/>
      </SettingsSection>
      <SettingsSection title={t("theme")} subtitle={t("chooseTheme")}>
        <Selector selected={theme} setSelected={setTheme} selectionList={themeList} selectionMap={themeMap}/>
      </SettingsSection>
      <SettingsSection title={t("locale")} subtitle={t("chooseLocale")}>
        <Selector selected={language} setSelected={setLanguage} selectionList={languageList} selectionMap={languageMap} />
      </SettingsSection>
      <SettingsSection title={t("breakpoints")} subtitle={t("showBreakpoints")}>
        <Toggle isOn={showBreakpoints} onClick={toggleBreakpoints} />
      </SettingsSection>
    </div>
  )
}