"use client";

import { useState, useEffect } from "react";
import logo from "@/assets/favicon.svg";
import Image from "next/image";
export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      if (window.scrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    } else {
      setIsVisible(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`z-10 navbar-shadow fixed px-7 py-2.5 top-0 w-full bg-[#D9D9D9CC] transition-transform duration-300]
 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="flex justify-between items-center text-darkGreen">
        <a href="#hero">
          <Image
            src={logo.src}
            alt="AtlanticLabs"
            height={30}
            width={30}
            className="logo-filter"
          />
        </a>
        <ul className="flex space-x-8 text-xl">
          <li>
            <a href="#about" className="cursor-pointer">
              Conocenos
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="#bases" className="cursor-pointer">
              Nuestro valores
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="#partners" className="cursor-pointer">
              Partners
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="#contact" className="cursor-pointer">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
