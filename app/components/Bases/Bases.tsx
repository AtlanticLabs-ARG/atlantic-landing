import arrow from "@/assets/arrow.svg";
import Image from "next/image";

const items = [
  {
    number: "01",
    title: "Solución",
    text: "Diseñamos soluciones personalizadas que se adaptan a cada necesidad.",
    class: "w-full lg:w-4/5",
  },
  {
    number: "02",
    title: "Identidad",
    text: "Nos comprometemos a transmitir un mensaje único en cada proyecto.",
    class: "w-full lg:w-[70%]",
  },
  {
    number: "03",
    title: "Impacto",
    text: "Nuestra meta es marcar la diferencia.",
    class: "w-full lg:w-3/5",
  },
  {
    number: "04",
    title: "Compañía",
    text: "Queremos acompañarte en cada paso.",
    class: "w-full lg:w-1/2",
  },
  {
    number: "05",
    title: "Evolución",
    text: "Creemos firmemente en la importancia de mantener un progreso continuo.",
    class: "w-full lg:w-2/5",
  },
];

export default function Bases() {
  return (
    <section
      className="w-screen flex flex-col justify-start items-center py-28 cursor-default"
      id="bases"
    >
      <div className="container flex justify-center">
        <div className="w-full h-full flex flex-col justify-start items-center px-6 xxs:px-8 xs:px-10">
          <h1 className="text-xs xxs:text-sm xs:text-base md:text-lg lg:text-2xl font-semibold text-lightBlue">
            Como equipo confiamos en 5 bases principales
          </h1>
          <div className="w-full flex flex-col justify-start items-start lg:items-end my-14">
            {items.map((item, index) => (
              <div
                className={`group relative transition-all duration-[${
                  500 + 25 * index
                }] ease-in-out border border-lightBlue h-16 lg:h-32 xl:h-auto w-full flex justify-end overflow-hidden`}
                key={item.number}
              >
                <div
                  className={`${item.class} text-sm sm:text-lg xl:text-xl text-[#ECE6F0] px-3 lg:px-8 py-2 lg:py-5 flex items-center group-hover:w-full group-hover:justify-start transition-all duration-500 ease-in-out`}
                >
                  {/* Número y título */}
                  <span className="text-3xl lg:text-4xl xl:text-5xl text-lightBlue font-bold text-center mr-10 lg:group-hover:block lg:group-hover:text-darkGreen transition-all duration-500 ease-in-out">
                    {item.number}
                  </span>

                  <h3 className="mr-2">{item.title}</h3>

                  {/* Flecha */}
                  <div className="min-w-2 lg:hidden">
                    <Image
                      className="w-full h-full object-contain"
                      src={arrow.src}
                      alt="arrow"
                      width={8}
                      height={8}
                    />
                  </div>
                </div>
                {/* Deslizable con texto descriptivo*/}
                <span className="w-full h-full absolute top-0 right-0 z-[1] lg:ml-2 translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out bg-lightBlue text-darkGreen px-3 sm:px-4 lg:px-5 py-2 lg:py-4 flex items-center lg:space-x-5 text-sm sm:text-base lg:text-lg xl:text-xl">
                  {/* Numero visible en web */}
                  <h1 className="hidden lg:flex text-3xl lg:text-5xl text-darkGreen font-bold text-start">
                    {item.number}
                  </h1>
                  <span>{item.text}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
