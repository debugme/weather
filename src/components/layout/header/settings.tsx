import { useSettings } from "../../../providers"
import { AvatarSelector, ThemeSelector } from "../../selector"
import { Toggle } from "../../toggle"

export const Settings = () => {
  const { showBreakpoints, toggleBreakpoints, theme, setTheme, themeList, avatarInfo, setAvatarInfo, avatarInfoList } = useSettings()

  return (
    <div className="block absolute z-10 bg-secondary-700 top-header bottom-footer w-full">
      <h2 className="text-secondary-300 text-2xl px-8 pt-2">Settings</h2>
      
      <div className="my-8" />
      <section className="flex flex-col pb-4 px-4 mx-8 mt-4 rounded-lg bg-secondary-600 w-80">
        <span className="py-3 text-secondary-300 rounded-lg">Avatar</span>
        <p className="text-secondary-400 pb-4 text-sm">Choose your avatar</p>
        <AvatarSelector selectedOption={avatarInfo} setSelectedOption={setAvatarInfo} options={avatarInfoList} />
      </section>

      <div className="my-8" />
      <section className="flex flex-col pb-4 px-4 mx-8 mt-4 rounded-lg bg-secondary-600 w-80">
        <span className="py-3 text-secondary-300 rounded-lg">Theme</span>
        <p className="text-secondary-400 pb-4 text-sm">Choose your theme</p>
        <ThemeSelector selectedOption={theme} setSelectedOption={setTheme} options={themeList} />
      </section>

      <div className="my-8" />
      <section className="flex flex-col pb-4 px-4 mx-8 mt-4 rounded-lg bg-secondary-600 w-80">
        <span className="py-3 text-secondary-300 rounded-lg">Developer</span>
        <p className="text-secondary-400 pb-4 text-sm">Show developer tools</p>
        <Toggle isOn={showBreakpoints} onClick={toggleBreakpoints} />
      </section>
    </div>
  )
}