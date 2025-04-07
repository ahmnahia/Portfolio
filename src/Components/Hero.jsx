import { FaCircleArrowDown } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="hero-div-bg ">
      <div className="w-full h-[100vh]  bg-transparent  flex max-md:flex-col-reverse max-md:justify-end max-md:pt-10  md:justify-between md:items-center container">
        {/* <div className="flex flex-wrap max-md:flex-col-reverse max-md:pt-10   md:gap-20 "> */}
        <div className=" relative ">
          <h1 className="max-sm:text-[40px] max-sm:mt-5 max-md:text-[50px] md:text-[35px] lg:text-[60px] xl:text-[68px] text-black ">
            <span className="dark:text-white">Hi, I{"'"}m </span>{" "}
            <span className="text-blue-600 dark:text-orange-400"> Ahmad</span>{" "}
          </h1>
          <p className="mt-10 text-xl leading-6 text-zinc-600 dark:text-zinc-400 font-bold">
            I like full stack development :).
          </p>
          <a href="#about-me-section" className="mt-10 md:mt-20 w-fit cursor-pointer bottom-0 p-4 bg-blue-400 dark:bg-orange-400 group hover:bg-blue-900 dark:hover:bg-orange-700 text-white rounded-md flex items-center gap-3 transition-colors delay-75 dark:text-orange-100">
            <FaCircleArrowDown className="text-blue-100 dark:text-orange-100 group-hover:text-blue-400 dark:group-hover:text-orange-100 transition-colors delay-75  text-xl " />
            More About Me
          </a>
        </div>
        <div className=" shadow-md rounded-lg md:w-[350px] lg:w-[450px] xl:w-[650px] ">
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}
