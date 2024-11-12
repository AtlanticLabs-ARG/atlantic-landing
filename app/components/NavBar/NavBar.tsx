"use client";

import { useState, useEffect } from "react";
import logo from "@/assets/favicon.svg";
import Image from "next/image";
import closeIcon from "@/assets/images/navbar/close-button.svg";
import menuIcon from "@/assets/images/navbar/menu-button.svg";

const menuItems = [
  {
    title: "Conocenos",
    href: "#about",
  },
  {
    title: "Nuestro valores",
    href: "#bases",
  },
  {
    title: "Partners",
    href: "#partners",
  },
  {
    title: "Contacto",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(window.scrollY < 100);
  const [isTop, setIsTop] = useState(window.scrollY < 120);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    setMenuOpen(false);
    if (window.scrollY > 120) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }

    if (window.scrollY > 100) {
      if (window.scrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`z-10 fixed px-9 md:px-5 md:pl-9 py-3 md:py-5 top-0 w-full ${
        !isTop && !menuOpen && "bg-darkGreen navbar-shadow"
      } transition-all duration-700]
 ${isVisible ? "translate-y-0" : "-translate-y-28"} `}
    >
      <div className="flex justify-between items-center text-white">
        <a
          href="#hero"
          className={`${
            menuOpen ? "-translate-y-10" : "translate-y-0"
          } transition-transform duration-300`}
        >
          <Image
            src={logo.src}
            alt="AtlanticLabs"
            height={30}
            width={0}
            className="w-auto h-6 sm:h-7 md:h-[30px] xl:h-9"
          />
        </a>
        <ul className="space-x-5 lg:space-x-6 xl:space-x-8 text-base lg:text-lg xl:text-xl 2xl:text-2xl hidden md:flex">
          {menuItems.map((item, index) => (
            <li key={`nav-${index}`}>
              <a href={item.href} className="cursor-pointer">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none w-auto h-auto"
        >
          <Image src={menuIcon} alt="Menu icon" width={24} height={0} />
        </button>
        <div
          className={`w-screen flex flex-row justify-end absolute left-0 top-0 z-11 md:hidden transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full ml-2"
          } h-screen bg-[#001915CC] backdrop-blur-sm`}
        >
          <div className="w-1/2 max-w-48">
            <ul className="text-base flex flex-col bg-darkGreen z-20 rounded-bl-xl">
              <li
                key="close-button"
                className="bg-transparent min-w-full flex justify-end px-6 py-3"
              >
                <button onClick={toggleMenu}>
                  <Image
                    className="w-auto"
                    src={closeIcon}
                    width={0}
                    height={13}
                    alt="Cerrar menu"
                  />
                </button>
              </li>
              {menuItems.map((item, index) => (
                <li
                  key={`nav-${index}`}
                  className="bg-transparent hover:bg-blue text-softWhite hover:text-darkGreen transition-all duration-500 w-48 text-start flex px-2 py-2 cursor-pointer"
                >
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
