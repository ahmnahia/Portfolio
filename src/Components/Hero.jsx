import LottieAnimation from "@/Components/LottieAnimation";
import Image from "next/image";
import { FaCircleArrowDown } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="hero-div-bg">
      <div className="w-full h-[100vh]  bg-transparent  md:flex  md:justify-center md:items-center container-cus mx-auto">
        <div className="flex flex-wrap max-md:flex-col-reverse max-md:pt-10   md:gap-20 ">
          <div className="max-md:mt-10 md:flex-1 relative md:min-h-[300px]">
            <p className="max-sm:text-[40px] max-lg:text-[60px] lg:text-[68px] text-black ">
              <span className="">Hi, I&aposm </span>{" "}
              <span className="text-blue-600"> Ahmad</span>{" "}
            </p>
            <p className="mt-10 text-xl leading-6 text-zinc-600 font-bold">
              I like full stack development :).
            </p>
            <button className="mt-10 md:mt-20  bottom-0 p-4 bg-blue-400 group hover:bg-blue-900 text-white rounded-md flex items-center gap-3 transition-colors delay-75">
              <FaCircleArrowDown className="text-blue-100 group-hover:text-blue-400 transition-colors delay-75  text-xl " />
              More About Me
            </button>
          </div>
          <div className="md:flex-1  shadow-md rounded-lg md:min-w-[500px] md:min-h-[300px]">
            <LottieAnimation />
          </div>
        </div>
      </div>
    </div>
  );
}
