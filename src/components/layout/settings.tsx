import { useSettings } from "../../providers"
import { Selector } from "../selector"
import { Toggle } from "../toggle"

export const Settings = () => {
  const { showBreakpoints, toggleBreakpoints, theme, setTheme, themeList } = useSettings()

  return (
    <div className="block absolute z-10 bg-secondary-700 top-[72px] bottom-[72px] w-full">
      
      <h2 className="text-secondary-300 text-2xl px-8 pt-2">Settings</h2>
      
      <div className="my-8" />
      
      <section className="flex flex-col pb-4 px-4 mx-8 mt-4 rounded-lg bg-secondary-800 w-80">
        <span className="py-3 text-secondary-300 rounded-lg">Tooling</span>
        <p className="text-secondary-400 pb-4">Allows you to show or hide what breakpoints are supported</p>
        <Toggle isOn={showBreakpoints} onClick={toggleBreakpoints} />
      </section>

      <div className="my-8" />

      <section className="flex flex-col pb-4 px-4 mx-8 mt-4 rounded-lg bg-secondary-800 w-80">
        <span className="py-3 text-secondary-300 rounded-lg">Theming</span>
        <p className="text-secondary-400 pb-4">Allows you to choose between cool and warm themes</p>
        <Selector selectedOption={theme} setSelectedOption={setTheme} options={themeList} />
      </section>

    </div>
  )
}