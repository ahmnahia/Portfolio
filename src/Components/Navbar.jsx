"use client";
import { useState } from "react";
import { navbarSections } from "@/constants";
import { MdMenu, MdClose } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full h-[70px] bg-blue-50 dark:bg-zinc-800 mx-auto fixed z-10 nav-bar-sec">
      <div className="h-full container mx-auto flex justify-between items-center text-black">
        <div className="max-md:text-xl md:text-2xl hover:scale-105 hover:cursor-pointer left-to-right-b-onhover before:bg-blue-500 dark:before:bg-orange-600">
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
                href={eachSection.href}
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
