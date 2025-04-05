"use client";
import { useRef, useState } from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { scrollToSection } from "@/helper";
import Image from "next/image";

export default function Hero2() {
  const imgRef = useRef();
  const timeoutRef = useRef(null);
  const lastMousePos = useRef({ x: 0, y: 0 });
  return (
    <section
      className="md:h-[100vh] flex items-center overflow-x-hidden py-10"
      id="hero"
      onMouseMove={(event) => {
        if (!imgRef.current || timeoutRef.current) return;

        if (window.screen.width < 700) {
          // not really enough space for transforming the image
          imgRef.current.style.transform = `translate(0px, 0px)`;
          return;
        }

        timeoutRef.current = requestAnimationFrame(() => {
          const deltaX = event.clientX - lastMousePos.current.x;
          const deltaY = event.clientY - lastMousePos.current.y;

          lastMousePos.current = { x: event.clientX, y: event.clientY };

          const moveX =
            deltaX < 0
              ? Math.max(deltaX * 0.6, -92)
              : Math.min(deltaX * 0.6, 92);
          const moveY =
            deltaY < 0
              ? Math.max(deltaY * 0.6, -20)
              : Math.min(deltaY * 0.6, 20);

          imgRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;

          timeoutRef.current = null;
        });
      }}
    >
      <div className="container flex justify-between max-lg:flex-col max-lg:gap-32 max-lg:items-center gap-10 max-sm:gap-8">
        <div className="max-lg:text-center flex-1 lg:relative animate-out">
          <h1 className="text-7xl  max-lg:text-5xl text-blue-500 dark:text-orange-600 ">
            Ahmad Abounahia
          </h1>
          <p className="text-xl  mt-5 text-zinc-800 dark:text-white font-normal">
            I’m a computer science graduate and I'm passionate about software
            development. I enjoy working with web development and always looking
            for ways to learn and improve.
          </p>
          <div
            className="mt-8 text-xl flex gap-3 items-center text-blue-black dark:text-white   cursor-pointer  bottom-0 max-lg:justify-center"
            onClick={() => {
              scrollToSection("#about-me");
            }}
          >
            <span className="text-4xl animate-bounce text-blue-500 dark:text-orange-500">
              <IoArrowDownCircleOutline />
            </span>
            More About Me
          </div>
        </div>
        <div className="w-auto flex justify-end relative flex-1">
          <Image
            ref={imgRef}
            id="pfp-img"
            src="/images/me2.jpg"
            className="pfp-pic-div w-full max-w-[400px] max-sm:w-[100%] h-[400px] max-md:h-[300px] bg-cover blob-shape bg-center relative transition-all blur-md"
            width={400}
            height={400}
            alt="Me"
            onLoadingComplete={(image) => {
              // image.classList.add("blur-none");
              image.classList.remove("blur-md");
            }}
          />
          <div className="for-svg-div bottom-[-40px] right-[240px] max-md:right-[160px] max-sm:hidden"></div>
          <div className="for-svg-div top-[-40px] right-[-40px] max-sm:hidden"></div>
        </div>
      </div>
    </section>
  );
}
