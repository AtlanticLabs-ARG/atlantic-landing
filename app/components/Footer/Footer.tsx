import vectorFooter from "@/assets/images/footer/vector-bg.svg";
import whiteLogoAtlantic from "@/assets/images/footer/white-logo-atlantic.svg";

export default function Footer() {
    return (
      <section className="w-screen h-screen flex flex-row justify-center items-center relative">
        <img
        src={whiteLogoAtlantic.src}
        className="object-contain absolute bottom-5 left-5"
        alt="vectorBackground"
        />

        <div className="w-1/4 h-full flex flex-col items-start justify-end pl-20 gap-4 text-left pb-20">
          <h3 className="text-xl font-light">
            Sobre Nosotros
          </h3>
          <h3 className="text-xl font-light">
            Nuestros Valores
          </h3>
          <h3 className="text-xl font-light">
            Partners
          </h3>
          <h3 className="text-xl font-light">
            Último proyecto
          </h3>
          <h3 className="text-xl font-light">
            Contacto
          </h3>
          <h3 className="text-xl font-light">
            Términos y condiciones
          </h3>
        </div>
        <div className="w-1/4 h-full flex flex-col items-end justify-end pr-20 pb-20">
          <h3 className="text-xl font-light justify-end">
          © 2024 Atlantic Labs
          </h3>
        </div>
        <img
        src={vectorFooter.src}
        className="h-full object-contain absolute top-0 right-0"
        alt="vectorBackground"
        />
      </section>
    );
  }
  