export const Devices = () => {
  return (
    <section className="flex text-primary-600">
      <p className="md:hidden">Cellphone</p>
      <p className="hidden md:block lg:hidden">Tablet</p>
      <p className="hidden lg:block xl:hidden">Laptop</p>
      <p className="hidden xl:block">Desktop</p>
    </section>
  )
}