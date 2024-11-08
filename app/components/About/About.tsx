import about from "@/assets/images/about/about.png";
import vision from "@/assets/images/about/vision.png";
import mision from "@/assets/images/about/mision.png";
import Image from "next/image";

const items = [
  {
    title: "Visión",
    image: vision.src,
    text: "Ser una empresa reconocida por nuestra capacidad de innovación y nuestro impacto construyendo en el crecimiento de nuestros clientes, construyendo relaciones sólidas y posicionándonos como líderes en el mundo tecnologico.",
    class:
      "pt-60 lg:pt-20 absolute lg:static top-[60vh] lg:top-[0px] -z-10 lg:z-0",
  },
  {
    title: "¿Quiénes somos?",
    image: about.src,
    text: "Somos una empresa de desarrollo IT fundada en Mar del Plata por un grupo de amigos entusiasmados por la tecnología y la innovación. Juntos, buscamos crear soluciones que transformen ideas en realidades.",
    class: "pt-20 absolute lg:static top-[0%] order-1 lg:order-[0]",
  },
  {
    title: "Misión",
    image: mision.src,
    text: "Crear soluciones tecnológicas innovadoras y de alto impacto que impulsen el crecimiento de nuestros clientes y de nuestra empresa, adaptándonos a sus necesidades y generando valor en cada proyecto.",
    class:
      "pt-60 lg:pt-20 absolute lg:static top-[120vh] lg:top-[0px] -z-20 lg:z-0",
  },
];

export default function About() {
  return (
    <section className="w-screen py-10 flex justify-center" id="about">
      <div className="container flex justify-center">
        <div className="w-5/6 flex flex-col gap-20 lg:flex-row justify-center items-center lg:items-start relative h-[200vh] lg:h-auto">
          {items.map((item) => (
            <div
              className={`${item.class} h-[80vh] lg:h-auto group cursor-default transition duration-500 ease-in-out w-3/4 lg:w-1/3 flex flex-col justify-center items-center gap-5 text-[#D9D9D980] bg-darkGreen lg:hover:scale-125 pb-20 rounded-[8vh] px-10 shadow-[rgba(91,134,229,0.2)_0px_0px_40px] lg:shadow-none`}
              key={item.title}
            >
              <Image
                width={80}
                height={0}
                className="object-cover lg:grayscale lg:opacity-80 transition duration-500 group-hover:opacity-1 group-hover:grayscale-0 w-14 lg:w-20 h-auto"
                src={item.image}
                alt={item.title}
              />
              <h2 className="text-xl lg:text-2xl transition duration-500 text-lightBlue lg:text-[#D9D9D980] group-hover:text-lightBlue text-center">
                {item.title}
              </h2>
              <div className="flex flex-col items-center justify-start text-center text-sm mt-2 transition duration-500 text-[#EEE4F7] lg:text-[#D9D9D980] group-hover:text-[#EEE4F7]">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
