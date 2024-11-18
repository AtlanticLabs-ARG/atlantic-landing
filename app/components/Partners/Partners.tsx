"use client";

import Image from "next/image";
import pdm from "@/assets/images/partners/parense-de-manos.png";
import dids from "@/assets/images/partners/3dids.svg";
import syd from "@/assets/images/partners/syd.svg";
import teiki from "@/assets/images/partners/teiki.svg";
import latinus from "@/assets/images/partners/latinus.svg";
import pdmLogo from "@/assets/images/partners/pdm-logo.svg";
import { useInView, motion, Variants } from "framer-motion";
import { MutableRefObject, useRef } from "react";

const items = [
  {
    alt: "3Dids",
    image: dids.src,
    width: dids.width,
    height: dids.height,
    delay: 0,
  },
  {
    alt: "Parense de manos logo",
    image: pdmLogo.src,
    width: pdmLogo.width,
    height: pdmLogo.height,
    delay: 0.5,
  },
  {
    alt: "Sucio y Desprolijo",
    image: syd.src,
    width: syd.width,
    height: syd.height,
    delay: 1,
  },
  {
    alt: "Teiki",
    image: teiki.src,
    width: teiki.width,
    height: teiki.height,
    delay: 1.5,
  },
  {
    alt: "Latinus",
    image: latinus.src,
    width: latinus.width,
    height: latinus.height,
    delay: 2,
  },
];

const directions = {
  left: "left",
  right: "right",
};

export default function Partners() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef);

  const title2Ref = useRef(null);
  const title2InView = useInView(title2Ref);

  const logosRef = useRef(null);
  const logosInView = useInView(logosRef);

  const variant = {
    hidden: { opacity: 0 },
    show: (custom: number) => ({
      opacity: 1,
      transition: {
        duration: 1,
        delay: custom * 0.5,
      },
    }),
  };

  const titleVariant: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    show: () => ({
      scaleX: titleInView ? 1 : 0,
      opacity: titleInView ? 1 : 0,
      transition: {
        duration: 0.5,
      },
    }),
  };

  const title2Variant: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    show: () => ({
      scaleX: title2InView ? 1 : 0,
      opacity: title2InView ? 1 : 0,
      transition: {
        duration: 0.5,
      },
    }),
  };

  const buildLine = (direction: string, variant: Variants, inView: boolean) => {
    const className =
      direction === "right"
        ? "right-partner-line origin-right"
        : "left-partner-line";

    return (
      <div className="w-1/4">
        <motion.div
          className={className}
          variants={variant}
          initial="hidden"
          animate={inView && "show"}
        />
      </div>
    );
  };

  const buildSection = (
    ref: MutableRefObject<null>,
    inView: boolean,
    variant: Variants
  ) => {
    return (
      <>
        {/* Left Line */}
        {buildLine(directions.left, variant, inView)}

        {/* Title */}
        <motion.h3
          ref={ref}
          className="text-base md:text-lg lg:text-2xl text-softWhite text-center"
          animate={{
            opacity: inView ? 1 : 0,
            transition: {
              duration: 1,
            },
          }}
        >
          Vinculados a marcas que nos inspiran
        </motion.h3>

        {/* Right Line */}
        {buildLine(directions.right, variant, inView)}
      </>
    );
  };

  return (
    <section
      className="w-screen flex justify-center py-16 lg:py-32  cursor-default"
      id="partners"
    >
      <div className="container">
        <div className="flex flex-col justify-start items-center">
          {/* First title with lines */}
          <div className="w-full flex flex-row items-center justify-center gap-12">
            {buildSection(titleRef, titleInView, titleVariant)}
          </div>

          {/* Logos */}
          <div
            ref={logosRef}
            className="w-full flex flex-wrap justify-center lg:justify-between items-center gap-10 md:gap-16 lg:gap-0 pt-14 lg:pt-28 pb-20 lg:pb-40 px-10"
          >
            {items.map((item) => (
              <motion.div
                variants={variant}
                initial="hidden"
                animate={logosInView && "show"}
                custom={item.delay}
                key={item.alt}
                className="w-1/3 md:w-1/4 lg:w-1/6 flex justify-center"
              >
                <Image
                  alt={item.alt}
                  src={item.image}
                  width={item.width}
                  height={item.height}
                  className="grayscale transition duration-500 hover:grayscale-0 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>

          {/* Second title with lines */}
          <div className="w-full flex flex-row items-center justify-center gap-10 pb-16">
            {buildSection(title2Ref, title2InView, title2Variant)}
          </div>

          {/* PDM Picture */}
          <img
            className="w-full lg:w-3/4"
            src={pdm.src}
            alt="Parense de manos II"
          />
        </div>
      </div>
    </section>
  );
}
