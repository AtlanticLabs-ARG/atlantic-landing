import publicity from "@/assets/images/publicity.png";

export default function Publicity() {
  return (
    <section className="w-screen flex items-center justify-center py-20">
      <div className="w-full">
        <img
          alt="Publicidad AtlanticLabs"
          className={`w-[${publicity.width}px] h-[${publicity.height}px]`}
          src={publicity.src}
        />
      </div>
    </section>
  );
}
