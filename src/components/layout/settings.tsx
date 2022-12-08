import { useSettings } from "../../providers"
import { Selector } from "../selector"
import { Toggle } from "../toggle"

export const Settings = () => {
  const { showBreakpoints, toggleBreakpoints, theme, setTheme, themeList } = useSettings()

  return (
    <div className="block absolute z-10 bg-secondary-700 top-[72px] bottom-[72px] w-full">
      <h2 className="text-secondary-300 text-2xl px-8 pt-2">Settings</h2>
      <section className="flex flex-col px-8 pt-4">
        <span className="py-3 text-secondary-300 rounded-lg w-fit">Show breakpoints</span>
        <Toggle isOn={showBreakpoints} onClick={toggleBreakpoints} />
      </section>
      <section className="flex flex-col px-8 pt-4">
        <span className="py-3 text-secondary-300 rounded-lg w-fit">Choose theme</span>
        <Selector selectedOption={theme} setSelectedOption={setTheme} options={themeList}/>
      </section>
    </div>
  )
}