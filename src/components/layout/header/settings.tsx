import { useSettings } from "../../../providers"
import { AvatarSelector, ThemeSelector } from "../../selector"
import { Toggle } from "../../toggle"

import { Handle } from "./handle"

export const Settings = () => {
  const { showBreakpoints, toggleBreakpoints, theme, setTheme, themeList, avatarInfo, setAvatarInfo, avatarInfoList, handle, setHandle } = useSettings()

  return (
    <div className="pt-4 block absolute z-10 bg-secondary-700 top-header bottom-footer w-full bg-gradient-to-tr from-secondary-800 via-secondary-700 to-secondary-600">
      <h2 className="text-secondary-300 text-2xl px-8 pt-2">Settings</h2>

      <div className="my-8" />
      <section className="flex flex-col pb-4 px-4 mx-8 mt-4 rounded-lg bg-secondary-600 w-[400px]">
        <span className="py-3 text-secondary-300 rounded-lg">Name</span>
        <p className="text-secondary-400 pb-4 text-sm">Choose your name</p>
        <Handle text={handle} setText={setHandle} />
      </section>

      <div className="my-8" />
      <section className="flex flex-col pb-4 px-4 mx-8 mt-4 rounded-lg bg-secondary-600 w-[400px]">
        <span className="py-3 text-secondary-300 rounded-lg">Avatar</span>
        <p className="text-secondary-400 pb-4 text-sm">Choose your avatar</p>
        <AvatarSelector selectedOption={avatarInfo} setSelectedOption={setAvatarInfo} options={avatarInfoList} />
      </section>

      <div className="my-8" />
      <section className="flex flex-col pb-4 px-4 mx-8 mt-4 rounded-lg bg-secondary-600 w-[400px]">
        <span className="py-3 text-secondary-300 rounded-lg">Theme</span>
        <p className="text-secondary-400 pb-4 text-sm">Choose your theme</p>
        <ThemeSelector selectedOption={theme} setSelectedOption={setTheme} options={themeList} />
      </section>

      <div className="my-8" />
      <section className="flex flex-col pb-4 px-4 mx-8 mt-4 rounded-lg bg-secondary-600 w-[400px]">
        <span className="py-3 text-secondary-300 rounded-lg">Developer</span>
        <p className="text-secondary-400 pb-4 text-sm">Show developer tools</p>
        <Toggle isOn={showBreakpoints} onClick={toggleBreakpoints} />
      </section>
    </div>
  )
}