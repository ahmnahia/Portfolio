import { technologiesUsed } from "@/constants";

export default function AboutMe() {
  return (
    <section
      id="about-me-section"
      className="py-20 bg-white dark:bg-zinc-800  cus-color-transition"
    >
      <div className="container">
        <h1 className="max-lg:text-4xl lg:text-6xl text-center pt-24 text-blue-500 dark:text-orange-500 cus-color-transition">
          {" "}
          About Me
        </h1>
        <h6 className="text-blue-400 dark:text-orange-400 text-xl my-6 max-sm:text-center cus-color-transition">
          A Few Things About Me...
        </h6>
        <div className="border-l-4 border-blue-600  dark:border-orange-600 px-4 py-10 text-xl rounded-lg shadow-md dark:shadow-zinc-900 hover:shadow-lg bg-blue-50 dark:bg-zinc-700 text-blue-grey-900 dark:text-white font-light  mt-5 text-justify leading-8 cus-color-transition">
          I’m a computer science graduate, currently working at iHorizons Qatar,
          and I’m passionate about full stack development for both web and
          mobile. I enjoy building complete projects, working on both the
          front-end and back-end. I’m always eager to learn new tools and skills
          to keep up with industry trends and get better at what I do.
        </div>
        <h1 className="max-lg:text-4xl lg:text-6xl text-center pt-24 text-blue-500 dark:text-orange-500 cus-color-transition">
          Technologies I Use
        </h1>
        <h6 className="text-blue-400 dark:text-orange-400 text-xl my-6 max-sm:text-center cus-color-transition">
          My Arsenal...
        </h6>
        <div className="flex flex-wrap gap-y-10 lg:gap-20 justify-around">
          {technologiesUsed.map((eachTech, idx) => (
            <div key={idx} className="text-xl  items-center flex gap-5 lg:w-1/4 xl:w-1/5 max-lg:w-[31%] max-md:w-[45%] bg-blue-50 dark:bg-zinc-700 ps-4 max-md:ps-2 py-4 rounded-xl shadow-md hover:shadow-lg shadow-blue-grey-200 dark:shadow-zinc-900 border-l-4 border-blue-600 dark:border-orange-600 cus-color-transition hover:scale-110">
              <span className="text-6xl max-lg:text-2xl text-blue-900 dark:text-zinc-50 cus-color-transition">{eachTech.icon}</span> <span className="text-black max-md:text-sm dark:text-white cus-color-transition">{eachTech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
