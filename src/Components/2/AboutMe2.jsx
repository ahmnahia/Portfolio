import { technologiesUsed } from "@/constants";
import { CarouselComponent } from "../CarouselComponent";
export default function AboutMe2() {
  return (
    <section
      id="about-me-section"
      className="py-10 max-lg:py-[300px] max-md:mt-20 cus-color-transition relative"
    >
      <div className="side-page-svg absolute left-0 top-0 w-[200px] h-[200px] rotate-[90deg]"></div>
      <div className="container">
        <h1 className="max-lg:text-4xl lg:text-6xl text-center pt-5 text-blue-500 dark:text-orange-600 cus-color-transition about-sec-title">
          About
        </h1>
        <h6 className="text-blue-400 dark:text-orange-400 text-xl my-6 max-sm:text-center cus-color-transition">
          A Few Things About Me...
        </h6>
        <div className="border-l-4 border-r-4 border-blue-600  dark:border-orange-600 px-4 py-10 text-xl rounded-lg shadow-md dark:shadow-zinc-900 hover:shadow-lg bg-blue-50 dark:bg-zinc-800 text-blue-grey-900 dark:text-orange-100 font-light  mt-5 text-justify leading-8 cus-color-transition">
          I’m a computer science graduate, currently working at iHorizons Qatar,
          and I’m passionate about full stack development for both web and
          mobile. I enjoy building complete projects, working on both the
          front-end and back-end. I’m always eager to learn new tools and skills
          to keep up with industry trends and get better at what I do.
        </div>
        {/* <h1 className="max-lg:text-4xl lg:text-6xl text-center pt-24 text-blue-500 dark:text-orange-500 cus-color-transition">
          Technologies I Use
        </h1> */}
        <CarouselComponent />
      </div>
    </section>
  );
}
