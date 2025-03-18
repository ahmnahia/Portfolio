"use client";
import { useState } from "react";
import { MdOutlineOpenInNew } from "react-icons/md";
import WorkModal from "./WorkModal";
import { projects } from "@/constants";
import Image from "next/image";

export default function Work() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(undefined);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <section className="py-32 max-lg:py-[150px] relative" id="projects">
        <div className="side-page-svg absolute right-0 top-[0px] max-md:top-[-20px] w-[200px] h-[200px] max-sm:w-[150px] max-sm:h-[150px] rotate-[270deg] z-[-10]"></div>
        <div className="container">
          <h1 className="max-lg:text-4xl lg:text-6xl text-center  pt-5 text-blue-500 dark:text-orange-600 about-sec-title after:content-['02'] after:translate-x-[-450px] after:translate-y-[-130px] max-lg:after:translate-x-[-240px] max-lg:after:translate-y-[-90px]">
            Projects
          </h1>
          <h6 className="text-blue-400 dark:text-orange-400 text-xl my-6 max-sm:text-center">
            Some of My Work...
          </h6>
          <div className="flex gap-x-5 gap-y-14 flex-wrap mt-12 justify-center z-10">

            {projects.map((ep, idx) => (
              <div
                key={idx}
                className="w-[31%] max-lg:w-[47%] max-sm:w-[100%] p-5 border-2 border-zinc-400/20 dark:border-zinc-800/30 shadow-lg rounded-lg group cursor-pointer"
                onClick={() => {
                  toggleModal();
                  setSelectedProject(projects[idx]);
                }}
              >
                {/* top */}
                <div className="w-full h-[200px] flex justify-center translate-y-[-40px] relative">
                  <div className="overflow-hidden rounded-lg shadow-md dark:shadow-none">
                    <Image
                      src={ep.images.desk.en}
                      alt={ep.title}
                      className="w-full rounded-lg group-hover:scale-110 group-hover:blur-[1px] transition-all ease-in-out duration-500"
                    />
                  </div>
                  <div className="absolute left-4 bottom-[-15px] flex gap-4">
                    {ep.chips.map((echip, idx) => (
                      <div
                        className="rounded-sm bg-blue-500 text-white dark:bg-orange-600  py-2 px-6"
                        key={idx}
                      >
                        <p>{echip}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* mid */}
                <div className=" mt-1">
                  <h3 className="text-2xl">{ep.title}</h3>
                  <p className="mt-3 text-zinc-500 font-normal">
                    {ep.description}
                  </p>
                </div>
                {/* footer */}
                <div className="flex justify-end mt-5">
                  <button className="text-blue-500 dark:text-orange-600 flex items-center gap-1">
                    More Details
                    <span className="text-2xl group-hover:text-3xl transition-all duration-500">
                      <MdOutlineOpenInNew />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <WorkModal
          open={isModalOpen}
          toggleModal={toggleModal}
          selectedProject={selectedProject}
        />
      </section>
    </>
  );
}
