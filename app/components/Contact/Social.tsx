import vectorLocation from "@/assets/images/contact/vector-location.svg";
import vectorPhone from "@/assets/images/contact/vector-phone.svg";
import vectorEmail from "@/assets/images/contact/vector-email.svg";
import logoInstagram from "@/assets/images/contact/logo-instagram.svg";
import logoLinkedin from "@/assets/images/contact/logo-linkedin.svg";
import Link from "next/link";

export default function Social() {
  return (
    <div className="flex flex-col justify-start items-start gap-10">
      <div className="justify-center flex flex-col items-start gap-5 text-base font-extralight roboto-flex tracking-wide">
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
          <span>(0223) 15 5433194</span>
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
      <div className="flex flex-row items-center justify-start gap-6">
        <Link href="https://www.instagram.com/atlantic.labs" target="_blank">
          <img
            src={logoInstagram.src}
            className="w-7 h-7 contact-media-logo-filter"
            alt="logoInstagram"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/company/atlanticlabs/"
          target="_blank"
        >
          <img
            src={logoLinkedin.src}
            className="w-7 h-7 contact-media-logo-filter"
            alt="logoLinkedin"
          />
        </Link>
      </div>
    </div>
  );
}
