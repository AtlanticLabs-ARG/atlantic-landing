const items = [
  {
    number: "01",
    title: "Solución",
    text: " - Diseñamos soluciones personalizadas que se adaptan a cada necesidad.",
  },
  {
    number: "02",
    title: "Identidad",
    text: " - Nos comprometemos a transmitir un mensaje único en cada proyecto",
  },
  {
    number: "03",
    title: "Impacto",
    text: "- Nuestra meta es marcar la diferencia.",
  },
  {
    number: "04",
    title: "Compañía",
    text: "- Queremos acompañarte en cada paso.",
  },
  {
    number: "05",
    title: "Evolución",
    text: "- Creemos firmemente en la importancia de mantener un progreso continuo.",
  },
];

export default function Bases() {
  return (
    <section className="w-screen flex flex-col justify-start items-center my-28 cursor-default">
      <div className="w-11/12 h-full flex flex-col justify-start items-center">
        <h1 className="text-2xl text-lightBlue">
          Como equipo confiamos en 5 bases principales
        </h1>
        <div className="w-11/12 flex flex-col justify-start items-end my-14">
          {items.map((item, index) => {
            return (
              <div
                className={`transition duration-[${
                  500 + 25 * index
                }] ease-in-out border border-lightBlue w-full flex justify-end group`}
              >
                <div
                  className={`bases-${index} pl-8 text-[#ECE6F0] text-xl py-5 flex items-center group-hover:w-full group-hover:justify-start group-hover:text-darkGreen group-hover:bg-lightBlue transition-all duration-500 ease-in-out`}
                >
                  <span className="text-5xl text-lightBlue text-center mr-10 group-hover:text-darkGreen transition-all duration-500 ease-in-out">
                    {item.number}
                  </span>
                  {item.title}
                  <span
                    className={`ml-2 hidden opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-500 delay-500`}
                  >
                    {item.text}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
