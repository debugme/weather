import { SettingsList } from "../components"

export const Settings = () => {
  return (
    <section className="flex flex-col w-3/4 mx-auto xborder">
      <h2 className="text-3xl text-secondary-400">Settings</h2>
      <div className="flex flex-col gap-2 borderx">
        <SettingsList />
      </div>
    </section>
  )
}