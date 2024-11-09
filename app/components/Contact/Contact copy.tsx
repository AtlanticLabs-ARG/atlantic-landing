import vectorLocation from "@/assets/images/contact/vector-location.svg";
import vectorPhone from "@/assets/images/contact/vector-phone.svg";
import vectorEmail from "@/assets/images/contact/vector-email.svg";
import logoInstagram from "@/assets/images/contact/logo-instagram.svg";
import logoLinkedin from "@/assets/images/contact/logo-linkedin.svg";
import logoFacebook from "@/assets/images/contact/logo-facebook.svg";
import whiteLogoAtlantic from "@/assets/images/contact/white-logo-atlantic.svg";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      className="w-screen h-full flex flex-col items-center py-40"
      id="contact"
    >
      <div className="w-full px-80">
        <div className="w-full h-full relative border-[#4CA3E1] border-[1px] bg-[#E7E0CF1A] px-5 py-10 flex flex-row justify-between items-center">
          <div className="w-full flex flex-col justify-start items-center gap-10">
            <div className="w-full flex flex-col text-start gap-4 font-light text-xl text-softWhite px-10">
              <h1 className="text-lightBlue text-3xl font-semibold">
                Llevamos tu idea al siguiente nivel
              </h1>
              <h3>
                Nos encantaría a ayudarte a impulsar tu proyecto,
                <br />
                nuestro propósito es brindarte el apoyo y orientación <br />
                que necesites.
              </h3>
              <h3>
                Completá nuestro formulario de contacto y descubrí <br />
                cómo podemos potenciar juntos tus ideas.
              </h3>
              <h3>¡Esperamos tu mensaje!</h3>
            </div>
            <div className="w-full justify-center flex flex-col items-start gap-5 text-base font-extralight roboto-flex tracking-wide px-10">
              <div className="flex items-center text-white gap-4">
                <img
                  src={vectorEmail.src}
                  className="w-5 h-5 contact-logo-filter"
                  alt="vectorEmail"
                />
                <span>info@atlanticlabs.com.ar</span>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={vectorPhone.src}
                  className="w-5 h-5 contact-logo-filter"
                  alt="vectorPhone"
                />
                <span>(0223) 15 5253659</span>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={vectorLocation.src}
                  className="w-5 h-5 contact-logo-filter"
                  alt="vectorLocation"
                />
                <span>Mar del Plata, Argentina</span>
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-start gap-6 px-10">
              <img
                src={logoInstagram.src}
                className="w-8 h-8 contact-media-logo-filter"
                alt="logoInstagram"
              />
              <img
                src={logoLinkedin.src}
                className="w-8 h-8 contact-media-logo-filter"
                alt="logoLinkedin"
              />
              <img
                src={logoFacebook.src}
                className="w-8 h-8 contact-media-logo-filter"
                alt="logoFacebook"
              />
            </div>
          </div>
          <div className="w-full max-w-[40%] h-full min-h-full flex flex-col justify-center items-center p-10">
            <ContactForm />
          </div>
          <Image
            src={whiteLogoAtlantic.src}
            className="object-contain absolute bottom-5 right-3"
            alt="Atlantic Labs"
            width={75}
            height={75}
          />
        </div>
      </div>
    </section>
  );
}
