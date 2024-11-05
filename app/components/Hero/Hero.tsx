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
