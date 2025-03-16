"use client";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { projects } from "@/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
// import sdnConnectDeskEn from "@/assets/carouselImages/sdnconnect-desk-en.png";
import clsx from "clsx";
import "viewerjs/dist/viewer.css";
import Viewer from "viewerjs";
import { FaDesktop, FaMobileScreenButton, FaExpand } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function WorkModal({ open, toggleModal, selectedProject }) {
  const [languageRadio, setLanguageRadio] = useState("EN");
  const [device, setDevice] = useState("desk");
  const [isFading, setIsFading] = useState(false);

  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {}, []);

  // disable scroll when modal is open
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden"; // remove scroll
      document.body.style.overflow = "hidden"; // for older browsers (optional)
      const viewer = new Viewer(document.getElementById("image"), {
        inline: false,
        viewed() {
          // viewer.zoomTo(1);
        },
        keyboard: 0,
        rotatable: 0,
        title: 0,
        scalable: 0,
      });
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // for opacity animation
  useEffect(() => {
    if (open) {
      setIsFading(true); // Start the fade animation

      // Resume slide-up animation after fade animation completes (e.g., 3s)
      setTimeout(() => {
        setIsFading(false);
      }, 1000);
    }
  }, [open, languageRadio, device]);

  useEffect(() => {
    if (!api || !open) {
      setCount(0);
      setCurrent(0);
      setDevice("desk");
      setLanguageRadio("EN");
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api, open]);

  if (!open && !selectedProject) {
    return;
  }

  return (
    <div
      className="fixed inset-0 bg-white dark:bg-zinc-900 bg-opacity-60 z-50 work-modal-bg-svg dark:work-modal-bg-svg-dark overflow-y-auto"
      style={{ display: open ? "block" : "none" }}
    >
      <div
        className={clsx(
          "bg-transparent w-full h-full p-10 max-sm:p-2 relative flex flex-col justify-between"
        )}
      >
        <div>
          <div className="w-full flex justify-end ">
            <button
              className="text-8xl max-sm:text-3xl hover:shadow-sm shadow-orange-600"
              onClick={() => {
                toggleModal();
              }}
            >
              <IoCloseSharp />
            </button>
          </div>
          <div className="relative text-black dark:text-white max-sm:py-0 w-full mt-4 max-sm:mt-0  ">
            <div className="container flex flex-col" style={{}}>
              <div className="flex flex-wrap justify-center mb-6">
                <button
                  onClick={() => {
                    setLanguageRadio("EN");
                  }}
                  className={clsx(
                    "p-2 rounded-lg",
                    languageRadio == "EN"
                      ? "bg-blue-500 dark:bg-orange-600 text-white"
                      : ""
                  )}
                >
                  <span>EN</span>
                </button>
                <button
                  onClick={() => {
                    setLanguageRadio("AR");
                  }}
                  className={clsx(
                    "p-2 rounded-lg",
                    languageRadio == "AR"
                      ? "bg-blue-500 dark:bg-orange-600 text-white"
                      : ""
                  )}
                >
                  <span>AR</span>
                </button>
                <button
                  onClick={() => {
                    setDevice(device == "desk" ? "mob" : "desk");
                  }}
                  className={clsx("p-2 rounded-lg text-xl")}
                >
                  <span>
                    {device == "desk" ? (
                      <FaDesktop />
                    ) : (
                      <FaMobileScreenButton />
                    )}
                  </span>
                </button>
              </div>
              <div
                className={clsx(
                  "h-[600px] max-lg:h-[500px] max-sm:h-[300px] relative overflow-hidden flex justify-center rounded-md shadow-2xl dark:shadow-none",
                  device == "mob" && "shadow-none"
                )}
              >
                <Image
                  id="image"
                  src={
                    selectedProject.images[device][languageRadio.toLowerCase()]
                  }
                  alt="screenshot"
                  className={clsx(
                    "absolute cursor-zoom-in w-full rounded-md",
                    // open ? "animate-slide-up delay-500 " : "translate-y-0",
                    isFading
                      ? "animate-opacity-on-image-change translate-y-0"
                      : "animate-slide-up delay-500",
                    device == "mob"
                      ? "max-w-[382px] shadow-2xl dark:shadow-none"
                      : ""
                  )}
                />
              </div>
              <div className="mt-8  text-center flex flex-col items-center">
                <h3 className="text-4xl max-lg:text-2xl ">
                  {selectedProject.title}
                </h3>
                <p className="font-normal text-2xl max-lg:text-lg  mt-4 max-sm:mt-2 max-w-[900px] text-zinc-600 dark:text-zinc-400 ">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center max-sm:my-4 max-sm:py-4">
          <div className="flex gap-3 flex-wrap">
            <div
              className="flex items-center gap-1 text-2xl max-sm:text-lg group cursor-pointer"
              onClick={() => {
                document.getElementById("image").click();
              }}
            >
              <span className=" p-2 rounded-full text-blue-500 dark:text-orange-600 group-hover:scale-125 transition-all">
                <FaExpand />
              </span>
              <span className="text-xl max-sm:text-lg ">View Full Page</span>
            </div>
            <div className=" text-2xl max-sm:text-lg group cursor-pointer">
              <a
                href={selectedProject.link}
                className="text-xl max-sm:text-lg flex items-center gap-1"
                target="_blank"
              >
                <span className=" p-2 rounded-full text-blue-500 dark:text-orange-600 group-hover:scale-125 transition-all">
                  <FaExternalLinkAlt />
                </span>
                <span className="text-xl max-sm:text-lg">Link</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
