"use client";
import { useState } from "react";
import { navbarSections } from "@/constants";
import Image from "next/image";
import { icons } from "@/constants";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full h-[70px] bg-blue-50 mx-auto fixed z-10">
      <div className="h-full container-cus mx-auto flex justify-between items-center text-black">
        <div className="max-md:text-xl md:text-2xl hover:scale-105 hover:cursor-pointer">
          <span className="text-gray-500">{"<"}</span>
          <span className="text-blue-500">AhmadAbounahia </span>{" "}
          <span className="text-gray-500">/{">"}</span>
        </div>
        <div className="">
          <div className="max-lg:hidden flex gap-10">
            {navbarSections.map((eachSection, idx) => (
              <div
                key={idx}
                className=" text-xl hover:text-red-500 hover:scale-105 hover:cursor-pointer"
              >
                {eachSection}
              </div>
            ))}
          </div>
          <div
            className="cursor-pointer lg:hidden relative"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
            }}
          >
            <Image
              className={`w-8 text-red-50 ${mobileMenuOpen ? "hidden" : ""}`}
              src={icons.iconMenu}
              alt="Menu Icon"
            />
            <Image
            alt="Close Icon"
              className={`w-12 translate-x-2 text-red-50  ${
                mobileMenuOpen ? "" : "hidden"
              }`}
              src={icons.iconClose}
            />
            <div
              className={` w-[170px] bg-white rounded-md absolute top-[70px] right-[0px] ease-in duration-300 transition-transform ${
                mobileMenuOpen ? "translate-x-[0]" : "translate-x-[200%]"
              }`}
            >
              <div
                className={`flex flex-col gap-5 px-7 py-5 ${
                  mobileMenuOpen ? "" : ""
                }`}
              >
                {navbarSections.map((eachSection, idx) => (
                  <div
                    key={idx}
                    className=" text-xl hover:text-red-500 hover:scale-105 hover:cursor-pointer"
                  >
                    {eachSection}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
