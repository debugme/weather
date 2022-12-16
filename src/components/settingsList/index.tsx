import { useSettings } from "../../providers"

import { Handle } from "../handle"
import { AvatarSelector, ThemeSelector } from "../selector"
import { Toggle } from "../toggle"

import { SettingsSection } from "./settingsSection"

export const SettingsList = () => {
  const { handle, setHandle } = useSettings()
  const { avatarInfo, setAvatarInfo, avatarInfoList } = useSettings()
  const { theme, setTheme, themeList } = useSettings()
  const { showBreakpoints, toggleBreakpoints } = useSettings()

  return (
    <div className="flex flex-col gap-2">
      <SettingsSection title="Name" subtitle="Choose your name">
        <Handle text={handle} setText={setHandle} />
      </SettingsSection>
      <SettingsSection title="Avatar" subtitle="Choose your avatar">
        <AvatarSelector selectedOption={avatarInfo} setSelectedOption={setAvatarInfo} options={avatarInfoList} />
      </SettingsSection>
      <SettingsSection title="Theme" subtitle="Choose your theme">
        <ThemeSelector selectedOption={theme} setSelectedOption={setTheme} options={themeList} />
      </SettingsSection>
      <SettingsSection title="Developer" subtitle="Show developer tools">
        <Toggle isOn={showBreakpoints} onClick={toggleBreakpoints} />
      </SettingsSection>
    </div>
  )
}