import vectorLocation from "@/assets/images/contact/vector-location.svg";
import vectorPhone from "@/assets/images/contact/vector-phone.svg";
import vectorEmail from "@/assets/images/contact/vector-email.svg";
import logoInstagram from "@/assets/images/contact/logo-instagram.svg";
import logoLinkedin from "@/assets/images/contact/logo-linkedin.svg";
import logoFacebook from "@/assets/images/contact/logo-facebook.svg";


export default function Contact() {
    return (
      <section className="w-screen h-full flex flex-col items-center gap-y-8" id="Contact">
        <div className="w-full flex flex-row items-center justify-center gap-12 mb-4 p-4">
          <div className="w-1/4 left-partner-line text-white" />
            <h3 className="text-xl text-[#EEE4F7] text-center font-bold">
              Contactanos
            </h3>
          <div className="w-1/4 right-partner-line" />
        </div>
        <div className="flex flex-row items-center justify-center gap-x-20">
          <div className="flex items-center bg-[#D9D9D91A] text-white border border-[#4DA3E1] p-4 gap-4">
            <img
              src={vectorEmail.src}
              className="w-6 h-6 text-white"
              alt="vectorEmail"
            />
            <span className="roboto-flex text-2xl font-thin tracking-wide">info@atlanticlabs.com.ar</span>
          </div>
          <div className="flex items-center bg-[#D9D9D91A] text-white border border-[#4DA3E1] p-4 gap-4">
            <img
              src={vectorPhone.src}
              className="w-6 h-6 text-white"
              alt="vectorPhone"
            />
            <span className="roboto-flex text-2xl font-thin tracking-wide">(0223) 15 5253659</span>
          </div>
          <div className="flex items-center bg-[#D9D9D91A] text-white border border-[#4DA3E1] p-4 gap-4">
            <img
              src={vectorLocation.src}
              className="w-6 h-6 text-white"
              alt="vectorLocation"
              />
            <span className="roboto-flex text-2xl font-thin tracking-wide">Mar del Plata, Argentina</span>
          </div>
        </div>
        <div className="w-full flex flex-row items-center justify-center gap-6 mb-4 p-12">
          <div className="w-1/4 left-partner-line text-white" />
          <img
              src={logoInstagram.src}
              className="w-8 h-8 text-white"
              alt="logoInstagram"
              />
            <img
              src={logoLinkedin.src}
              className="w-8 h-8 text-white"
              alt="logoLinkedin"
              />
          <img
              src={logoFacebook.src}
              className="w-8 h-8 text-white"
              alt="logoFacebook"
              />
          <div className="w-1/4 right-partner-line" />
        </div>
      </section>
    );
  }
  