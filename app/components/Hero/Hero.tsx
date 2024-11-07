// import Image from "next/image";
import banner from "@/assets/images/banner.png";
import Image from "next/image";
import logo from "@/assets/favicon.svg";

export default function Hero() {
  return (
    <section
      className="w-screen h-screen relative flex justify-center"
      id="hero"
    >
      <div className="container w-full h-full">
        {/* Navbar */}
        {/* <header>
          <nav className="px-8 py-2.5">
            <div className="flex justify-between items-center text-white">
              <Image src={logo.src} alt="AtlanticLabs" height={30} width={30} />
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
        </header> */}

        {/* Background image */}
        <img
          className="w-full h-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
          src={banner.src}
          alt="banner"
        />

        {/* Hero */}
        <div className="w-5/6 md:w-3/4 h-[90%] flex flex-col justify-center pl-20 gap-8">
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-normal">
            Atlantic <br />
            <span className="font-bold">Labs</span>
          </h1>
          <h2 className="text-xl md:text-2xl xl:text-4xl">
            Desarrollamos soluciones innovadoras <br />
            para impulsar tu crecimiento.
          </h2>
        </div>
      </div>
    </section>
  );
}
