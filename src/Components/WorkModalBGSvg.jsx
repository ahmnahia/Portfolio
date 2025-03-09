"use client";
import TopographySVG from "@/assets/svgs/topography.svg";

const WorkModalBGSvg = () => {
  return (
    <div className="relative w-full h-full bg-white">
      <TopographySVG className="absolute inset-0 w-full h-full opacity-20" />
      <div className="relative z-10 p-6"> {/* Content goes here */} </div>
    </div>
  );
};

export default WorkModalBackground;
