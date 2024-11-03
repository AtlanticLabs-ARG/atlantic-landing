import Image from "next/image";
import publicity from "@/assets/images/publicity.png";

export default function Publicity() {
  return (
    <section className="w-full mb-40 flex items-center justify-center">
      <div className="w-11/12">
        <Image
          alt="Parense de manos II"
          src={publicity.src}
          width={publicity.width}
          height={publicity.height}
        />
      </div>
    </section>
  );
}
