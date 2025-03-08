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
import { FaDesktop, FaMobileScreenButton } from "react-icons/fa6";
import { FaExpand } from "react-icons/fa6";

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

  useEffect(() => {
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

    return () => {
      viewer.destroy();
    };
  }, []);

  // disable scroll when modal is open
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden"; // remove scroll
      document.body.style.overflow = "hidden"; // for older browsers (optional)
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
      className="fixed inset-0 bg-black bg-opacity-60 z-50 "
      style={{ display: open ? "block" : "none" }}
    >
      <div className="bg-white dark:bg-zinc-900 w-full h-full p-10 relative">
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
        <div className="relative text-black dark:text-white max-sm:py-4 w-full mt-4 max-sm:mt-4 bg-zinc-50 dark:bg-zinc-900">
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
                  {device == "desk" ? <FaDesktop /> : <FaMobileScreenButton />}
                </span>
              </button>
            </div>
            <div className="h-[600px] max-sm:h-[400px] relative overflow-hidden flex justify-center rounded-md">
              <Image
                id="image"
                onClick={() => {}}
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
                  device == "mob" ? "max-w-[382px] " : ""
                )}
              />
            </div>
            <div className="mt-4  text-center">
              <h3 className="text-4xl">{selectedProject.title}</h3>
              <p className="font-normal text-2xl mt-4">
                {selectedProject.description}
              </p>
            </div>
            {/* <Carousel mt-4 setApi={setApi}>
            <CarouselContent>
              <CarouselItem className="basis-full h-[400px]"></CarouselItem>
              {projects[0].images.map((img, idx) => (
                <CarouselItem
                  key={idx}
                  className="basis-full h-[650px] transition-all duration-700"
                  style={{
                    // scale: current == idx + 1 ? 1.1 : 0.8,
                    transform:
                      idx + 1 < current
                        ? `translateX(95px)`
                        : idx + 1 == current
                        ? null
                        : "translateX(-95px)",
                    zIndex: current == idx + 1 ? 10 : 0,
                    // opacity: Math.abs(current - idx-1) >= 2 ? 0 : 1,
                  }}
                >
                  <Image src={img} alt="screenshot" className="w-full h-full" />
                </CarouselItem>
              ))}
              <CarouselItem className="basis-1/3 h-[400px]"></CarouselItem>
            </CarouselContent>
          </Carousel> */}
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 flex w-full justify-center">
        <div>
          <div
            className="flex items-center gap-1 text-2xl group cursor-pointer"
            onClick={() => {
              document.getElementById("image").click();
            }}
          >
            
            <span className=" p-2 rounded-full text-blue-500 dark:text-orange-600 group-hover:scale-125">
              <FaExpand />
            </span>
            <span className="text-xl">Full page screenshot</span>
          </div>
        </div>
      </div>
    </div>
  );
}
