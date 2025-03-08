"use client";
import Image from "next/image";
import { useRef } from "react";

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

        timeoutRef.current = requestAnimationFrame(() => {
          const deltaX = event.clientX - lastMousePos.current.x;
          const deltaY = event.clientY - lastMousePos.current.y;

          lastMousePos.current = { x: event.clientX, y: event.clientY };

          const moveX = Math.min(deltaX * 0.6, 92);
          const moveY = Math.min(deltaY * 0.6, 20);

          imgRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;

          timeoutRef.current = null;
        });
      }}
    >
      <div className="container flex justify-between max-lg:flex-col max-lg:gap-32 max-lg:items-center gap-10">
        <div className="max-lg:text-center flex-1">
          <h1 className="text-7xl  max-lg:text-5xl text-blue-500 dark:text-orange-600 ">
            Ahmad Abounahia
          </h1>
          <p className="text-xl  mt-5 text-zinc-800 dark:text-orange-100 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sint
            perspiciatis facilis totam sed dolor error ab rem necessitatibus.
            Eaque consequatur voluptatibus amet laudantium asperiores
            consectetur obcaecati earum quis aut.
          </p>
        </div>
        <div className="w-auto flex justify-end relative flex-1">
          <img
            ref={imgRef}
            id="pfp-img"
            src="/images/me2.jpg"
            className="pfp-pic-div w-full max-w-[400px] max-sm:w-[100%] h-[400px] max-md:h-[300px] bg-cover blob-shape bg-center relative"
          />
          <div className="for-svg-div bottom-[-40px] right-[240px] max-md:right-[160px]"></div>
          <div className="for-svg-div top-[-40px] right-[-40px]"></div>
        </div>
      </div>
    </section>
  );
}
