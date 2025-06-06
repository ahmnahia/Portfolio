"use client";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import clsx from "clsx";
import "viewerjs/dist/viewer.css";
import {
  FaDesktop,
  FaMobileScreenButton,
  FaExpand,
  FaGithub,
} from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import useWorkModalHook from "@/hooks/useWorkModalHook";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/WorkModal.css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components_temp/ui/tooltip";
import StackTooltip from "./StackTooltip";

export default function WorkModal({ open, toggleModal, selectedProject }) {
  const {
    state: { workState, personalState, projectStack },
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
          "bg-transparent w-full h-full p-10 pb-0 max-sm:p-2 max-sm:pb-0 relative flex flex-col justify-between"
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
            <div className="container max-w-[1200px] flex flex-col" style={{}}>
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
                    "h-[450px] max-lg:h-[450px] max-sm:h-[300px] relative overflow-hidden  rounded-md shadow-2xl dark:shadow-none",
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
                          loading="eager"
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
              ) : personalState ? (
                <div className="personal-slider-div">
                  {personalState.sliderSettings.beforeChange && (
                    <Slider
                      {...personalState.sliderSettings}
                      className="animate-opacity-on-image-change translate-y-0"
                    >
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
                            loading="eager"
                            alt="Project Screenshot"
                          />
                        </div>
                      ))}
                    </Slider>
                  )}
                  <div>
                    <ul id="images">
                      {personalState.fullScreenImages.map((ei, idx) => (
                        <li className="hidden" key={idx}>
                          <Image
                            id="image"
                            alt="hidden fullscreen img"
                            src={ei}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <></>
              )}
              <div className="mt-8  text-center flex flex-col items-center">
                {/* title & desc */}
                <h3 className="text-4xl max-lg:text-2xl">
                  {selectedProject.title}
                </h3>
                <p className="font-normal text-2xl max-lg:text-lg  mt-4 mb-8 max-sm:mt-2 max-w-[900px] text-zinc-600 dark:text-zinc-400 ">
                  {selectedProject.description}
                </p>
              </div>
              {projectStack && (
                <div className=" flex justify-center">
                  {/* stack */}
                  <div className="flex flex-wrap justify-center gap-4 p-4">
                    {projectStack.map((es, idx) => (
                      <StackTooltip icon={es.icon} name={es.name} key={idx} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center max-sm:mt-4 ">
          <div className="flex gap-3 flex-wrap items-start py-4">
            <div
              className="flex items-center gap-1 group cursor-pointer"
              onClick={() => {
                document.getElementById("image").click();
              }}
            >
              <span className="text-2xl max-sm:text-lg p-2 rounded-full text-blue-500 dark:text-orange-600 group-hover:scale-125 transition-all">
                <FaExpand />
              </span>
              <span className="text-xl max-sm:text-lg">View Full Page</span>
            </div>
            {selectedProject.githubLink && (
              <div className="group cursor-pointer">
                <a
                  href={selectedProject.githubLink}
                  className="text-2xl max-sm:text-lg flex items-center gap-1"
                  target="_blank"
                >
                  <span className=" p-2 rounded-full text-blue-500 dark:text-orange-600 group-hover:scale-125 transition-all">
                    <FaGithub />
                  </span>
                  <span className="text-xl max-sm:text-lg">Github</span>
                </a>
              </div>
            )}
            {(selectedProject.link || selectedProject.showDisabledLink) && (
              <div className="group cursor-pointer">
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger>
                      <a
                        href={selectedProject.link}
                        className={clsx(
                          "text-2xl max-sm:text-lg flex items-center gap-1",
                          selectedProject.showDisabledLink &&
                            "cursor-not-allowed opacity-50"
                        )}
                        target="_blank"
                      >
                        <span className=" p-2 rounded-full text-blue-500 dark:text-orange-600 group-hover:scale-125 transition-all">
                          <FaExternalLinkAlt />
                        </span>
                        <span className="text-xl max-sm:text-lg">Link</span>
                      </a>
                    </TooltipTrigger>
                    {selectedProject.showDisabledLink && (
                      <TooltipContent className="font-normal">
                        <p>Sorry, this webpage is down.</p>
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
