"use client";
import { useEffect, useState } from "react";
import { navbarSections } from "@/constants";
import { MdMenu, MdClose } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";
import { scrollToSection } from "@/helper";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-ani");
        } else {
            // entry.target.classList.remove("show-ani");
        }
      });
    });

    const hiddenElements = [...document.querySelectorAll("section"), document.querySelector(".nav-bar-sec")];
    hiddenElements.forEach((ei) => observer.observe(ei));
  }, []);

  return (
    <nav className="w-full h-[70px] bg-blue-50/80 backdrop-blur-lg dark:bg-zinc-800/80 mx-auto fixed nav-bar-sec z-50">
      {/* <div className="w-full h-full absolute left-0 top-0 blur-3xl"></div> */}
      <div className="h-full container mx-auto flex justify-between items-center text-black">
        <div
          className="max-md:text-xl md:text-2xl hover:scale-105 hover:cursor-pointer left-to-right-b-onhover before:bg-blue-500 dark:before:bg-orange-600"
          onClick={() => {
            scrollToSection("#hero");
          }}
        >
          <span className="text-gray-500 dark:text-gray-200">{"<"}</span>
          <span className="text-blue-500 dark:text-orange-600">
            AhmadAbounahia
          </span>
          <span className="text-gray-500 dark:text-gray-200">/{">"}</span>
        </div>
        <div className="flex items-center gap-3 md:gap-10">
          <ThemeToggle />
          <div className="max-lg:hidden flex gap-10">
            {navbarSections.map((eachSection, idx) => (
              <a
                key={idx}
                className="text-xl dark:text-white hover:scale-105 cursor-pointer left-to-right-b-onhover before:bg-blue-500 dark:before:bg-orange-600"
                // href={eachSection.href}
                onClick={() => {
                  scrollToSection(eachSection.href);
                }}
              >
                {eachSection.name}
              </a>
            ))}
          </div>
          <div
            className="cursor-pointer lg:hidden relative"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
            }}
          >
            <MdMenu
              className={`text-4xl text-black dark:text-white ${
                mobileMenuOpen ? "hidden" : ""
              }`}
              alt="Menu Icon"
            />
            <MdClose
              alt="Close Icon"
              className={`text-4xl dark:text-white   text-black  ${
                mobileMenuOpen ? "" : "hidden"
              }`}
            />

            <div
              className={` w-[170px] bg-white dark:bg-zinc-700 dark:text-zinc-200 rounded-md absolute top-[70px] right-[0px] ease-in duration-300 transition-transform ${
                mobileMenuOpen ? "translate-x-[0]" : "translate-x-[200%]"
              }`}
            >
              <div
                className={`flex flex-col gap-5 px-7 py-5 ${
                  mobileMenuOpen ? "" : ""
                }`}
              >
                {navbarSections.map((eachSection, idx) => (
                  <a
                    key={idx}
                    className=" text-xl hover:scale-105 hover:cursor-pointer"
                    href={eachSection.href}
                  >
                    {eachSection.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
