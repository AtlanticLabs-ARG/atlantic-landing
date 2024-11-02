import about from "@/assets/images/about/about.png";
import vision from "@/assets/images/about/vision.png";
import mision from "@/assets/images/about/mision.png";
import Image from "next/image";
const items = [
  {
    title: "Visión",
    image: vision.src,
    text: [
      "Ser una empresa reconocida por nuestra",
      "capacidad de innovación y nuestro impacto",
      "construyendo en el crecimiento de nuestros clientes,",
      "construyendo relaciones sólidas y posicionándonos",
      "como líderes en el mundo tecnologico.",
    ],
  },
  {
    title: "¿Quiénes somos?",
    image: about.src,
    text: [
      "Somos una empresa de desarrollo IT",
      "fundada en Mar del Plata por un grupo de amigos",
      "entusiasmados por la tecnología y la innovación.",
      "Juntos, buscamos crear soluciones que ",
      "transformen ideas en realidades.",
    ],
  },
  {
    title: "Misión",
    image: mision.src,
    text: [
      "Crear soluciones tecnológicas innovadoras",
      "y de alto impacto que impulsen el crecimiento",
      "de nuestros clientes y de nuestra empresa,",
      "adaptándonos a sus necesidades y",
      "generando valor en cada proyecto.",
    ],
  },
];

export default function About() {
  return (
    <section className="w-screen h-screen mt-40 flex justify-center">
      <div className="w-5/6 h-full flex flex-row justify-center items-start">
        {items.map((item) => {
          return (
            <div
              className="group transition duration-500 ease-in-out w-1/3 flex flex-col justify-center items-center gap-5 text-[#D9D9D980] hover:scale-125"
              key={item.title}
            >
              <Image
                width={80}
                height={80}
                className="object-cover grayscale opacity-80 transition duration-500 group-hover:opacity-1 group-hover:grayscale-0"
                src={item.image}
                alt={item.title}
              />
              <h1 className="text-base transition duration-500 group-hover:text-lightBlue">
                {item.title}
              </h1>
              <div className="flex flex-col items-center justify-start text-sm mt-2 transition duration-500 group-hover:text-[#EEE4F7]">
                {item.text.map((text, index) => {
                  return <h3 key={`${item.title}-text-${index}`}>{text}</h3>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
