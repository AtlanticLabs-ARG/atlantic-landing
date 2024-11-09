import arrow from "@/assets/arrow.svg";
import Image from "next/image";

const items = [
  {
    number: "01",
    title: "Solución",
    fullText:
      "- Diseñamos soluciones personalizadas que se adaptan a cada necesidad.",
    text: "Diseñamos soluciones personalizadas que se adaptan a cada necesidad.",
    class: "w-full lg:w-4/5",
  },
  {
    number: "02",
    title: "Identidad",
    fullText:
      "- Nos comprometemos a transmitir un mensaje único en cada proyecto.",
    text: "Nos comprometemos a transmitir un mensaje único en cada proyecto.",
    class: "w-full lg:w-[70%]",
  },
  {
    number: "03",
    title: "Impacto",
    fullText: "- Nuestra meta es marcar la diferencia.",
    text: "Nuestra meta es marcar la diferencia.",
    class: "w-full lg:w-3/5",
  },
  {
    number: "04",
    title: "Compañía",
    fullText: "- Queremos acompañarte en cada paso.",
    text: "Queremos acompañarte en cada paso.",
    class: "w-full lg:w-1/2",
  },
  {
    number: "05",
    title: "Evolución",
    fullText:
      "- Creemos firmemente en la importancia de mantener un progreso continuo.",
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
        <div className="w-full h-full flex flex-col justify-start items-center px-20">
          <h1 className="text-xl lg:text-2xl text-lightBlue">
            Como equipo confiamos en 5 bases principales
          </h1>
          <div className="w-full flex flex-col justify-start items-start lg:items-end my-14">
            {items.map((item, index) => (
              <div
                className={`group transition-all duration-[${
                  500 + 25 * index
                }] ease-in-out border border-lightBlue h-32 lg:h-auto w-full flex justify-end overflow-hidden`}
                key={item.number}
              >
                <div
                  className={`${item.class} text-sm sm:text-lg xl:text-xl text-[#ECE6F0] px-8 py-5 flex items-center group-hover:w-full group-hover:justify-start group-hover:text-darkGreen group-hover:bg-lightBlue transition-all duration-500 ease-in-out`}
                >
                  {/* Number and title */}
                  <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-lightBlue text-center mr-10 group-hover:hidden lg:group-hover:block lg:group-hover:text-darkGreen transition-all duration-500 ease-in-out">
                    {item.number}
                  </span>

                  <h3 className="group-hover:hidden lg:group-hover:block mr-3 group-hover:mr-0">
                    {item.title}
                  </h3>

                  {/* Arrow png */}
                  <div className="min-w-2 group-hover:hidden lg:hidden">
                    <Image
                      className="w-full h-full object-contain"
                      src={arrow.src}
                      alt="arrow"
                      width={8}
                      height={8}
                    />
                  </div>

                  {/* Description */}
                  <span className="hidden lg:block lg:ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 lg:delay-300 lg:text-nowrap">
                    {item.fullText}
                  </span>

                  {/* Description with title */}
                  <span className="block lg:hidden lg:ml-2 opacity-0 group-hover:opacity-100 translate-x-[200%] group-hover:translate-x-0 group-hover:block lg:group-hover:hidden transition-opacity duration-500">
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
