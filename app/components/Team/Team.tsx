"use client";

import "./Team.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { useState } from "react";
import teamHilber from "@/assets/images/team/team-hilber.png";
import teamEvelyn from "@/assets/images/team/team-evelyn.png";
import vectorRight from "@/assets/images/vector-right.svg";
import vectorLeft from "@/assets/images/vector-left.svg";

const team = [
  {
    id: 0,
    src: teamHilber.src,
  },
  {
    id: 1,
    src: teamEvelyn.src,
  },
  {
    id: 2,
    src: teamHilber.src,
  },
  {
    id: 3,
    src: teamEvelyn.src,
  },
  {
    id: 4,
    src: teamHilber.src,
  },
];

const initIndex = 2;

export default function Team() {
  const [index, setIndex] = useState(initIndex);
  // const swiperRef = useRef(null);

  const handleSlideClick = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setIndex(currentIndex);

    // if (currentIndex > index) goNext();
    // else goPrev();
  };

  // const goNext = () => {
  //   if (swiperRef?.current?.swiper) {
  //     swiperRef.current.swiper.slideNext();
  //   }
  // };

  // const goPrev = () => {
  //   if (swiperRef?.current?.swiper) {
  //     swiperRef.current.swiper.slidePrev();
  //   }
  // };

  return (
    <section className="w-screen h-screen flex justify-center items-center px-10 relative">
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
          modules={[EffectCoverflow]}
          slideToClickedSlide={true} // Navigates to clicked card
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 0,
            stretch: -20,
            depth: 100,
            modifier: 3,
            slideShadows: false,
          }}
          breakpoints={{
            375: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          // loop
        >
          {team.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="h-[800px] ">
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
    </section>
  );
}
