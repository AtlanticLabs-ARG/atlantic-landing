"use client";

import "./Team.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useState } from "react";
import teamHilber from "@/assets/images/team/team-hilber.png";
import teamEvelyn from "@/assets/images/team/team-evelyn.png";
import teamFranco from "@/assets/images/team/team-franco.png";
import teamEmanuel from "@/assets/images/team/team-emanuel.png";
import teamLucia from "@/assets/images/team/team-lucia.png";
import teamCamilaB from "@/assets/images/team/team-camila-b.png";
import teamCamilaS from "@/assets/images/team/team-camila-s.png";
import vectorRight from "@/assets/images/vector-right.svg";
import vectorLeft from "@/assets/images/vector-left.svg";

const team = [
  {
    id: 0,
    src: teamCamilaS.src,
    alt: "Camila Suarez",
  },
  {
    id: 1,
    src: teamEmanuel.src,
    alt: "Emanuel Maldonado",
  },
  {
    id: 2,
    src: teamLucia.src,
    alt: "Lucia Chinni",
  },
  {
    id: 3,
    src: teamHilber.src,
    alt: "Hilber Fraiese",
  },
  {
    id: 4,
    src: teamFranco.src,
    alt: "Franco Fraiese",
  },
  {
    id: 5,
    src: teamCamilaB.src,
    alt: "Camila Bosco",
  },
  {
    id: 6,
    src: teamEvelyn.src,
    alt: "Evelyn Meson",
  },
];

const initIndex = 3;

const breakpoints = {
  375: {
    slidesPerView: 1,
  },
  640: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 5,
  },
};

export default function Team() {
  const [index, setIndex] = useState(initIndex);

  const handleSlideClick = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex;
    setIndex(currentIndex);
  };

  const slideClass = (id: number) =>
    Math.abs(index - id) > 1 ? "opacity-0 lg:opacity-100" : "opacity-100";

  return (
    <section className="w-screen h-screen flex justify-center items-center px-10 relative dur">
      <div className="container flex flex-col justify-center">
        <div className="flex justify-center">
          {/* eslint-disable-next-line */}
          <img
            src={vectorLeft.src}
            className="w-1/2 h-full object-contain object-left absolute top-0 left-0"
            alt="vectorRight"
          />
          {/* eslint-disable-next-line */}
          <img
            src={vectorRight.src}
            className="w-1/2 h-full object-contain absolute top-0 right-0"
            alt="vectorRight"
          />
          <div className="h-screen w-screen flex justify-center items-center">
            <Swiper
              initialSlide={initIndex}
              centeredSlides={true}
              onSlideChange={handleSlideClick}
              modules={[EffectCoverflow, Pagination]}
              slideToClickedSlide={true}
              grabCursor
              pagination={{
                clickable: true,
                bulletActiveClass: "swiper-pagination-active-bullet-button",
                bulletClass: "swiper-pagination-bullet-button",
              }}
              breakpoints={breakpoints}
              effect={"coverflow"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 3,
                slideShadows: false,
              }}
              style={{ paddingBottom: 40 }}
            >
              {team.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className={`h-[650px] ${slideClass(item.id)}`}>
                    {item.id !== index && <div className="overlay" />}
                    {/* eslint-disable-next-line */}
                    <img
                      className="w-full h-full object-contain"
                      src={item.src}
                      alt="banner"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/*  <div className="flex justify-center gap-3">
          {team.map((item) => (
            <button
              className={``}
              onClick={() => setIndex(item.id)}
              key={item.id}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}
