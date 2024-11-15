import about from "@/assets/images/about/about.png";
import vision from "@/assets/images/about/vision.png";
import mision from "@/assets/images/about/mision.png";

const items = [
  {
    title: "Visión",
    image: vision.src,
    text: "Ser una empresa reconocida por nuestra capacidad de innovación y nuestro impacto construyendo en el crecimiento de nuestros clientes, construyendo relaciones sólidas y posicionándonos como líderes en el mundo tecnologico.",
    class:
      "pt-40 xs:pt-36 sm:pt-28 lg:pt-20 sm:pb-10 absolute lg:static top-[53vh] xxs:top-[50vh] sm:top-[45vh] lg:top-[0px] -z-10 lg:z-0 h-[70vh] xxs:h-[65vh] sm:h-[60vh]",
  },
  {
    title: "¿Quiénes somos?",
    image: about.src,
    text: "Somos una empresa de desarrollo IT fundada en Mar del Plata por un grupo de amigos entusiasmados por la tecnología y la innovación. Juntos, buscamos crear soluciones que transformen ideas en realidades.",
    class:
      "pt-20 xxs:py-0 absolute lg:static top-[0%] order-1 lg:order-[0] h-[65vh] xxs:h-[60vh] sm:h-[55vh]",
  },
  {
    title: "Misión",
    image: mision.src,
    text: "Crear soluciones tecnológicas innovadoras y de alto impacto que impulsen el crecimiento de nuestros clientes y de nuestra empresa, adaptándonos a sus necesidades y generando valor en cada proyecto.",
    class:
      "pt-40 xs:pt-36 sm:pt-28 lg:pt-20 sm:pb-10 absolute lg:static top-[112vh] xxs:top-[105vh] sm:top-[95vh] lg:top-[0px] -z-20 lg:z-0 h-[70vh] xxs:h-[65vh] sm:h-[60vh]",
  },
];

export default function About() {
  return (
    <section className="w-screen py-10 lg:pt-32 flex justify-center" id="about">
      <div className="container flex justify-center">
        <div className="w-full flex flex-col gap-20 lg:flex-row justify-center items-center lg:items-start relative h-[240vh] lg:h-auto">
          {items.map((item) => (
            <div
              className={`${item.class} lg:h-auto group cursor-default transition duration-500 ease-in-out w-3/4 lg:w-1/3 flex flex-col justify-center items-center gap-5 text-[#D9D9D980] bg-darkGreen lg:hover:scale-125 pb-20 rounded-[8vh] px-5 xxs:px-8 sm:px-14 lg:px-10 shadow-[rgba(91,134,229,0.2)_0px_0px_40px] lg:shadow-none`}
              key={item.title}
            >
              {/* <Image
                width={80}
                height={0}
                className="object-cover lg:grayscale lg:opacity-80 transition duration-500 group-hover:opacity-1 group-hover:grayscale-0 lg:w-20 h-auto"
                src={item.image}
                alt={item.title}
              /> */}
              <img
                className="object-cover lg:grayscale lg:opacity-80 transition duration-500 group-hover:opacity-1 group-hover:grayscale-0 w-20 lg:w-20 h-auto"
                src={item.image}
                alt={item.title}
              />
              <h2 className="text-xl lg:text-2xl transition duration-500 text-lightBlue lg:text-[#D9D9D980] group-hover:text-lightBlue text-center">
                {item.title}
              </h2>
              <div className="flex flex-col items-center justify-start text-center text-sm xs:text-base mt-2 transition duration-500 text-softWhite lg:text-[#D9D9D980] group-hover:text-softWhite">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
