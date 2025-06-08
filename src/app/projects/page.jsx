"use client";
import { useEffect, useState } from "react";
import BreadcrumbWrapper from "@/components/BreadcrumbWrapper";
import CategoryCard from "@/components/projects/CategoryCard";
import { IoPerson } from "react-icons/io5";
import { GrOrganization } from "react-icons/gr";
import { MdOutlineOpenInNew } from "react-icons/md";
import { PROJECT_CATEGORIES, projects } from "@/constants";
import Image from "next/image";
import StackTooltip from "@/components/StackTooltip";
import WorkModal from "@/components/WorkModal";
import "./projects.css";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState(
    PROJECT_CATEGORIES.PERSONAL
  );
  const [filteredProjects, setFilteredProjects] = useState(
    projects.filter((ep) => ep.chips.includes(selectedCategory))
  );
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProjcet] = useState(undefined);

  useEffect(() => {
    setFilteredProjects(
      projects.filter((ep) => ep.chips.includes(selectedCategory))
    );
  }, [selectedCategory]);

  return (
    <section className="container my-8 opacity-100">
      <BreadcrumbWrapper pagename={"Projects"} />
      <div className="mt-12 text-6xl animate-fade-in animation-delay-0">
        <h1 className="w-fit">
          Projects
          <span className="block w-1/2 border-b-8 rounded-lg border-blue-400 dark:border-orange-400 mt-12"></span>
        </h1>
      </div>
      <div className="mt-12 flex flex-wrap gap-8 animate-fade-in animation-delay-400">
        <CategoryCard
          title={"Personal Projects"}
          description={
            "A collection of self-initiated projects where practiced skills, and built tools that interest me."
          }
          icon={<IoPerson />}
          isActive={selectedCategory === PROJECT_CATEGORIES.PERSONAL}
          handleOnClick={() => {
            setSelectedCategory(PROJECT_CATEGORIES.PERSONAL);
          }}
        />
        <CategoryCard
          title={"Work Projects"}
          description={
            "Projects I contributed to as part of professional roles, focusing on real-world requirements, collaboration, and delivery."
          }
          icon={<GrOrganization />}
          isActive={selectedCategory === PROJECT_CATEGORIES.WORK}
          handleOnClick={() => {
            setSelectedCategory(PROJECT_CATEGORIES.WORK);
          }}
        />
      </div>
      <div className="mt-24 flex flex-col gap-24 max-md:gap-12 animate-fade-in animation-delay-800">
        {filteredProjects.map((ep, idx) => (
          <div
            key={ep.title}
            className="flex w-full max-lg:flex-col-reverse  bg-zinc-100 rounded-lg dark:bg-zinc-900"
          >
            <div className="flex-1 flex flex-col justify-start gap-8 p-12 relative">
              {/* left */}
              <div className="flex flex-wrap justify-start gap-4 ">
                {/* stack */}
                {ep.stack.map((estack, idx) => (
                  <div className=" " key={idx}>
                    <StackTooltip icon={estack.icon} name={estack.name} />
                  </div>
                ))}
              </div>
              <h1 className="text-4xl max-sm:text-2xl">{ep.title}</h1>
              <p className="xl:text-2xl text-xl max-sm:text-sm font-normal text-zinc-500 dark:text-zinc-400">
                {ep.description}
              </p>
              <div className="lg:absolute lg:bottom-6">
                <button
                  onClick={() => {
                    setSelectedProjcet(ep);
                    setOpenModal(true);
                  }}
                  className="text-blue-500 dark:text-orange-500 flex items-center gap-1"
                >
                  More Details
                  <span className="text-2xl group-hover:text-3xl transition-[font-size]  duration-500">
                    <MdOutlineOpenInNew />
                  </span>
                </button>
              </div>
            </div>
            <div className="lg:flex-1 overflow-hidden lg:h-[500px] max-lg:h-[500px] max-sm:h-[300px] max-lg:rounded-lg rounded-r-lg">
              {/* right */}
              <Image
                alt={ep.title + " Image"}
                src={
                  ep.chips.includes(PROJECT_CATEGORIES.PERSONAL)
                    ? ep.fullScreenImages[0]
                    : ep.images[0].image
                }
                className=""
              />
            </div>
          </div>
        ))}
      </div>
      {openModal && (
        <WorkModal
          open={openModal}
          selectedProject={selectedProject}
          toggleModal={() => {
            setOpenModal(false);
          }}
        />
      )}
    </section>
  );
}
