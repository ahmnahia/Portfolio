import { CarouselComponent } from "./CarouselComponent";

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="py-10 max-lg:pt-[300px] max-md:mt-20 relative"
    >
      <div className="side-page-svg absolute left-0 top-0 w-[200px] h-[200px] rotate-[90deg]"></div>
      <div className="container">
        <h1 className="max-lg:text-4xl lg:text-6xl text-center  text-blue-500 dark:text-orange-600 about-sec-title">
          About
        </h1>
        <h6 className="text-blue-400 dark:text-orange-400 text-xl my-6 max-sm:text-center">
          A Few Things About Me...
        </h6>
        <div className="border-l-4 border-r-4 border-blue-600  dark:border-orange-600 px-4 py-10 text-xl rounded-lg shadow-md dark:shadow-zinc-900 bg-blue-50 dark:bg-zinc-800 text-black dark:text-white font-light  mt-5 text-justify leading-8">
          Frontend Developer who enjoys building clean, responsive web apps and
          constantly learning new tools and technologies. I like experimenting
          with new ideas and building things that are both useful and easy to
          use. Always trying to get better with every project.
        </div>
        <CarouselComponent />
      </div>
    </section>
  );
}
