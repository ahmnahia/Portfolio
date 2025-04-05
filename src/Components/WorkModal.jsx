"use client";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import clsx from "clsx";
import "viewerjs/dist/viewer.css";
import { FaDesktop, FaMobileScreenButton, FaExpand } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import useWorkModalHook from "@/hooks/useWorkModalHook";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/WorkModal.css";

export default function WorkModal({ open, toggleModal, selectedProject }) {
  const {
    state: { workState, personalState },
    changeLanguageOrDevice,
  } = useWorkModalHook(open, selectedProject);

  if (!open || !selectedProject) {
    return;
  }

  return (
    <div
      className="work-modal fixed inset-0 bg-white dark:bg-zinc-900 z-50 work-modal-bg-svg dark:work-modal-bg-svg-dark overflow-y-auto"
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
              className="text-6xl max-sm:text-3xl hover:shadow-sm shadow-orange-600"
              onClick={() => {
                toggleModal();
              }}
            >
              <IoCloseSharp />
            </button>
          </div>
          <div className="relative text-black dark:text-white max-sm:py-0 w-full  max-sm:mt-0  ">
            <div className="container flex flex-col" style={{}}>
              {workState ? (
                <div className="flex flex-wrap justify-center mb-6">
                  <button
                    onClick={() => {
                      changeLanguageOrDevice("EN");
                    }}
                    className={clsx(
                      "p-2 rounded-lg",
                      workState.languageRadio == "EN"
                        ? "bg-blue-500 dark:bg-orange-600 text-white"
                        : ""
                    )}
                  >
                    <span>EN</span>
                  </button>
                  <button
                    onClick={() => {
                      changeLanguageOrDevice("AR");
                    }}
                    className={clsx(
                      "p-2 rounded-lg",
                      workState.languageRadio == "AR"
                        ? "bg-blue-500 dark:bg-orange-600 text-white"
                        : ""
                    )}
                  >
                    <span>AR</span>
                  </button>
                  <button
                    onClick={() => {
                      changeLanguageOrDevice(
                        undefined,
                        workState.device == "desk" ? "mob" : "desk"
                      );
                    }}
                    className={clsx("p-2 rounded-lg text-xl")}
                  >
                    <span>
                      {workState.device == "desk" ? (
                        <FaDesktop />
                      ) : (
                        <FaMobileScreenButton />
                      )}
                    </span>
                  </button>
                </div>
              ) : (
                <></>
              )}
              {workState ? (
                <div
                  className={clsx(
                    "h-[500px] max-lg:h-[500px] max-sm:h-[300px] relative overflow-hidden  rounded-md shadow-2xl dark:shadow-none",
                    workState.device == "mob" && "shadow-none"
                  )}
                >
                  <ul id="images">
                    {workState.images.map((eachImage, idx) => (
                      <li key={idx} className="w-full flex justify-center z-10">
                        <Image
                          id="image"
                          src={eachImage.image}
                          alt="screenshot"
                          className={clsx(
                            "absolute cursor-zoom-in rounded-md w-full",
                            workState.device == eachImage.device &&
                              workState.languageRadio == eachImage.lang
                              ? "block"
                              : "hidden",
                            workState.device == "mob"
                              ? "max-w-[382px] shadow-2xl dark:shadow-none"
                              : "",
                            workState.isFading
                              ? "animate-opacity-on-image-change translate-y-0"
                              : "animate-slide-up delay-500"
                          )}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ) : personalState && personalState.sliderSettings.beforeChange ? (
                <div className="personal-slider-div">
                  <Slider {...personalState.sliderSettings} className="">
                    {personalState.images.map((ei, idx) => (
                      <div
                        key={idx}
                        className={clsx(
                          "personal-img-div",
                          personalState.currentSlideIdx + 1 == idx ||
                            (personalState.currentSlideIdx ==
                              personalState.images.length - 1 &&
                              idx == 0)
                            ? "translate-x-[-180px]"
                            : "translate-x-0",
                          personalState.currentSlideIdx - 1 == idx ||
                            (personalState.currentSlideIdx == 0 &&
                              idx == personalState.images.length - 1)
                            ? "translate-x-[180px]"
                            : "translate-x-0",
                          Math.abs(personalState.currentSlideIdx - idx) >= 2
                            ? "opacity-0"
                            : "opacity-100"
                        )}
                      >
                        <Image
                          className="w-full h-full"
                          src={ei}
                          alt="Project Screenshot"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              ) : (
                <></>
              )}
              <div className="mt-8  text-center flex flex-col items-center">
                <h3 className="text-4xl max-lg:text-2xl ">
                  {selectedProject.title}
                </h3>
                <p className="font-normal text-2xl max-lg:text-lg  mt-4 mb-8 max-sm:mt-2 max-w-[900px] text-zinc-600 dark:text-zinc-400 ">
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
            <div className=" text-2xl max-sm:text-lg group cursor-pointer my-4">
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
