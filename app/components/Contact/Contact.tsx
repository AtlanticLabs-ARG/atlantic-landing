import whiteLogoAtlantic from "@/assets/images/contact/white-logo-atlantic.svg";
import Image from "next/image";
import ContactForm from "./ContactForm";
import Social from "./Social";

export default function Contact() {
  return (
    <section
      className="w-screen h-full flex flex-col items-center mt-10 py-10 xl:py-40"
      id="contact"
    >
      <div className="container w-full h-full">
        <div className="w-full px-5 xl:px-20 2xl:px-48 gap-16 flex flex-col">
          <div className="w-full h-full relative border-[#4CA3E1] border-[1px] bg-[#E7E0CF1A] px-4 sm:px-8 py-6 sm:py-8 flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full flex flex-col justify-start items-center lg:gap-10">
              <div className="w-full flex flex-col text-start gap-3 font-extralight text-sm sm:text-base md:text-[18px] lg:text-base xl:text-xl">
                <h1 className="text-lightBlue text-base sm:text-lg md:text-xl lg:text-lg xl:text-3xl font-medium">
                  Llevamos tu idea al siguiente nivel
                </h1>
                <h3 className="pr-5 text-softWhite">
                  Nos encantaría a ayudarte a impulsar tu proyecto, nuestro
                  propósito es brindarte el apoyo y orientación que necesites.
                </h3>
                <h3 className="pr-5 text-softWhite">
                  Completá nuestro formulario de contacto y descubrí cómo
                  podemos potenciar juntos tus ideas.
                </h3>
                <h3 className="pr-5">¡Esperamos tu mensaje!</h3>
              </div>
              <div className="hidden w-full lg:flex lg:items-start">
                <Social />
              </div>
            </div>
            <div className="w-full h-full lg:min-h-full flex flex-col justify-center items-center pr-3 xl:pr-10">
              <ContactForm />
            </div>
            <Image
              src={whiteLogoAtlantic.src}
              className="object-contain absolute bottom-5 right-3 w-10 xs:w-12 sm:w-14 md:w-16 lg:w-[70px] xl:w-20 h-10 xs:h-12 sm:h-14 md:h-16 lg:h-[70px] xl:h-20"
              alt="Atlantic Labs"
              width={0}
              height={0}
            />
          </div>
          <div className="lg:hidden">
            <Social />
          </div>
          <div className="text-softWhite flex flex-col lg:flex-row justify-center lg:justify-start items-start lg:items-center gap-3 lg:gap-10 xl:gap-14 mt-12 lg:mt-16 font-thin text-xs sm:text-sm lg:text-base">
            <h3>Términos y condiciones</h3>
            <h3>© 2024 Atlantic Labs</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
