import { useLanguages } from "../../../providers"

export const Devices = () => {
  const { t } = useLanguages()
  
  return (
    <section className="flex text-primary-600">
      <p className="md:hidden capitalize">{t("cellphone")}</p>
      <p className="hidden md:block lg:hidden capitalize">{t("tablet")}</p>
      <p className="hidden lg:block xl:hidden capitalize">{t("laptop")}</p>
      <p className="hidden xl:block capitalize">{t("desktop")}</p>
    </section>
  )
}