// import Image from "next/image";
import banner from "@/assets/images/banner.png";

export default function Hero() {
  return (
    <section className="h-screen">
      <div className="h-screen w-screen absolute -z-10">
        <img
          className="w-full h-full object-cover"
          src={banner.src}
          alt="banner"
        />
      </div>
      <div className="w-1/3 h-screen flex flex-col justify-center pl-20 gap-6">
        <h1 className="text-[64px] leading-[64px] font-bold">
          Impulsamos tus proyectos
        </h1>
        <h2 className="text-[32px]">Es hora de crear tu página web</h2>
      </div>
    </section>
  );
}
