import { useSettings } from "../../providers"

import { Handle } from "../handle"
import { Selector } from "../selector"
import { Toggle } from "../toggle"

import { SettingsSection } from "./settingsSection"

export const SettingsList = () => {
  const { handle, setHandle } = useSettings()
  const { avatarInfo, setAvatarInfo, avatarInfoList } = useSettings()
  const { themeInfo, setThemeInfo, themeInfoList } = useSettings()
  const { languageInfo, setLanguageInfo, languageInfoList } = useSettings()
  const { showBreakpoints, toggleBreakpoints } = useSettings()

  return (
    <div className="flex flex-col gap-2">
      <SettingsSection title="Name" subtitle="Choose your name">
        <Handle text={handle} setText={setHandle} />
      </SettingsSection>
      <SettingsSection title="Avatar" subtitle="Choose your avatar">
        <Selector selectedOption={avatarInfo} setSelectedOption={setAvatarInfo} options={avatarInfoList} />
      </SettingsSection>
      <SettingsSection title="Theme" subtitle="Choose your theme">
        <Selector selectedOption={themeInfo} setSelectedOption={setThemeInfo} options={themeInfoList} />
      </SettingsSection>
      <SettingsSection title="Language" subtitle="Choose your language">
        <Selector selectedOption={languageInfo} setSelectedOption={setLanguageInfo} options={languageInfoList} />
      </SettingsSection>
      <SettingsSection title="Developer" subtitle="Show developer tools">
        <Toggle isOn={showBreakpoints} onClick={toggleBreakpoints} />
      </SettingsSection>
    </div>
  )
}