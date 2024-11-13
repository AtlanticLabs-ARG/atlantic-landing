export default function Hero() {
  return (
    <section
      className="w-screen h-screen lg:max-h-none flex justify-start bg-banner"
      id="hero"
    >
      <div className="container w-full h-full">
        {/* Hero */}
        <div className="w-full xxs:w-2/3 lg:w-1/2 xl:w-3/5 h-[90%] flex flex-col justify-start lg:justify-center px-11 py-20 xs:py-24 sm:py-28 lg:py-0 gap-5 ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal leading-8">
            Atlantic <br />
            <span className="font-bold">Labs</span>
          </h1>
          <h2 className="font-semibold lg:font-normal text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-6">
            Desarrollamos soluciones innovadoras para impulsar tu crecimiento.
          </h2>
        </div>
      </div>
    </section>
  );
}
