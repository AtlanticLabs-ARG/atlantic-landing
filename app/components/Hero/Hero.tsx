// import Image from "next/image";
import banner from "@/assets/images/banner.png";
import Image from "next/image";
import logo from "@/assets/favicon.svg";

export default function Hero() {
  return (
    <section className="h-screen" id="hero">
      <div className="h-screen w-screen absolute -z-10">
        <img
          className="w-full h-full object-cover"
          src={banner.src}
          alt="banner"
        />
      </div>
      <nav className="px-8 py-2.5">
        <div className="flex justify-between items-center text-white">
          <Image
            src={logo.src}
            alt="AtlanticLabs"
            height={30}
            width={30}
          />
          <ul className="flex space-x-8 text-xl">
            <li>
              <a href="#about" className="cursor-pointer">
                Conocenos
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="#bases" className="cursor-pointer">
                Nuestro valores
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="#partners" className="cursor-pointer">
                Partners
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="#contact" className="cursor-pointer">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="w-2/3 h-[90%] flex flex-col justify-center pl-20 gap-8">
        <h1 className="text-[64px] leading-[64px] font-normal">
          Atlantic <br />
          <span className="font-bold">Labs</span>
        </h1>
        <h2 className="text-[32px]">
          Desarrollamos soluciones innovadoras <br />
          para impulsar tu crecimiento.
        </h2>
      </div>
    </section>
  );
}
