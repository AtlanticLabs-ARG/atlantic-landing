import Image from "next/image";
import publicity from "@/assets/images/publicity.png";

export default function Publicity() {
  return (
    <section className="w-screen flex items-center justify-center py-20">
      <div className="w-full">
        <Image
          alt="Publicidad AtlanticLabs"
          src={publicity.src}
          width={publicity.width}
          height={publicity.height}
        />
      </div>
    </section>
  );
}
