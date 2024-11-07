import vectorFooter from "@/assets/images/contact/vector-bg.svg";
import whiteLogoAtlantic from "@/assets/images/contact/white-logo-atlantic.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="w-screen h-screen flex flex-row justify-center items-end relative pt-20 pb-10">
      <Image
        src={whiteLogoAtlantic.src}
        className="object-contain absolute bottom-10 left-10"
        alt="Atlantic Labs"
        width={350}
        height={350}
      />
      <div className="w-full px-[20%] flex flex-row justify-center items-end">
        <div className="w-1/4 h-full flex flex-col items-start justify-end gap-4 text-left font-thin">
          <h3 className="text-2xl">Sobre Nosotros</h3>
          <h3 className="text-2xl">Nuestros Valores</h3>
          <h3 className="text-2xl">Partners</h3>
          <h3 className="text-2xl">Último proyecto</h3>
          <h3 className="text-2xl">Contacto</h3>
          <h3 className="text-2xl">Términos y condiciones</h3>
        </div>
        <div className="w-1/4 h-full flex flex-col items-end justify-end">
          <h3 className="text-xl font-thin justify-end">
            © 2024 Atlantic Labs
          </h3>
        </div>
      </div>
      <img
        src={vectorFooter.src}
        className="h-full object-contain absolute top-0 right-0"
        alt="vectorBackground"
      />
    </section>
  );
}
