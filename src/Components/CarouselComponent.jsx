"use client";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { technologiesUsed } from "@/constants";

export function CarouselComponent() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, playOnInit: true })
  );

  return (
    <div className="logos group relative overflow-hidden whitespace-nowrap  py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)] mt-20">
      <div className="animate-slide-left inline-block w-max">
        {technologiesUsed.map((eachTech, idx) => (
          <div
            key={idx}
            className="text-xl  items-center  gap-5 max-md:w-fit max-md:px-10 w-[230px] bg-blue-50 dark:bg-zinc-800 ps-4 max-md:ps-2 py-4 rounded-xl shadow-md shadow-blue-grey-200 dark:shadow-zinc-900 border-l-4 border-blue-600 dark:border-orange-600 cus-color-transition hover:scale-110 transition-transform ease-in-out mx-4 inline-block "
          >
            <div className="flex items-center gap-2">
              <span className="text-[35px] text-blue-900 dark:text-zinc-50 cus-color-transition">
                {eachTech.icon}
              </span>
              <span className="text-black max-md:text-sm dark:text-white cus-color-transition">
                {eachTech.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="animate-slide-left inline-block w-max">
        {technologiesUsed.map((eachTech, idx) => (
          <div
            key={idx}
            className="text-xl  items-center  gap-5 max-md:w-fit max-md:px-10 w-[230px] bg-blue-50 dark:bg-zinc-800 ps-4 max-md:ps-2 py-4 rounded-xl shadow-md shadow-blue-grey-200 dark:shadow-zinc-900 border-l-4 border-blue-600 dark:border-orange-600 cus-color-transition hover:scale-110 transition-transform ease-in-out mx-4 inline-block "
          >
            <div className="flex items-center gap-2">
              <span className="text-[35px] text-blue-900 dark:text-zinc-50 cus-color-transition">
                {eachTech.icon}
              </span>
              <span className="text-black max-md:text-sm dark:text-white cus-color-transition">
                {eachTech.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
