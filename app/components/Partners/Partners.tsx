import Image from "next/image";
import pdm from "@/assets/images/partners/parense-de-manos.png";
import dids from "@/assets/images/partners/3dids.png";
import syd from "@/assets/images/partners/syd.png";
import teiki from "@/assets/images/partners/teiki.png";
import pdmLogo from "@/assets/images/partners/pdm-logo.png";

const items = [
  {
    alt: "3Dids",
    image: dids.src,
    width: dids.width,
    height: dids.height,
  },
  {
    alt: "Parense de manos logo",
    image: pdmLogo.src,
    width: pdmLogo.width,
    height: pdmLogo.height,
  },
  {
    alt: "Sucio y Desprolijo",
    image: syd.src,
    width: syd.width,
    height: syd.height,
  },
  {
    alt: "Teiki",
    image: teiki.src,
    width: teiki.width,
    height: teiki.height,
  },
];
export default function Partners() {
  return (
    <section className="w-screen flex justify-center mt-40 mb-48 cursor-default">
      <div className="w-5/6 h-full flex flex-col justify-start items-center gap-16">
        <div className="w-full flex flex-row items-center justify-center gap-12">
          <div className="w-1/4 left-partner-line text-white" />
          <h3 className="text-xl text-[#EEE4F7] text-center">
            Vinculados a marcas que nos inspiran
          </h3>
          <div className="w-1/4 right-partner-line" />
        </div>
        <div className="w-2/3 flex flex-row justify-between items-center mt-16 mb-28">
          {items.map((item) => {
            return (
              <Image
                key={item.alt}
                alt={item.alt}
                src={item.image}
                width={item.width}
                height={item.height}
                className="grayscale transition duration-500 hover:grayscale-0 hover:scale-105"
              />
            );
          })}
        </div>
        <div className="w-full flex flex-row items-center justify-center gap-10">
          <div className="w-1/4 left-partner-line text-white" />
          <h3 className="text-xl text-[#EEE4F7] text-center">
            Nuestra última colaboración{" "}
          </h3>
          <div className="w-1/4 right-partner-line" />
        </div>
        <Image
          alt="Parense de manos II"
          src={pdm.src}
          width={pdm.width}
          height={pdm.height}
        />
      </div>
    </section>
  );
}