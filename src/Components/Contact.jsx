import { IoMailOutline } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

export default function Contact() {
  return (
    <section className="py-32 max-lg:py-[150px] relative" id="contact">
      <div className="side-page-svg absolute left-0 top-[0px] max-md:top-[-20px] w-[200px] h-[200px] max-sm:w-[150px] max-sm:h-[150px] rotate-[90deg] z-[-10]"></div>
      <div className="container">
        <h1 className="max-lg:text-4xl lg:text-6xl text-center  pt-5 text-blue-500 dark:text-orange-600 cus-color-transition about-sec-title after:content-['03'] after:translate-x-[-10px] after:translate-y-[-150px] max-lg:after:translate-x-[-70px] max-lg:after:translate-y-[-80px]">
          Contact
        </h1>
        <div className="mt-24 p-12 py-20 max-md:px-6 border-zinc-400/20 border-2 rounded-xl shadow-md relative">
          <div className="absolute top-[-30px] flex flex-wrap gap-6">
            <div className="text-lg flex items-center font-normal bg-white shadow-lg dark:shadow-none dark:bg-zinc-900 text-black dark:text-white rounded-sm group cursor-pointer relative">
              <span className="absolute left-0 top-0 h-full w-0 group-hover:bg-blue-500 dark:group-hover:bg-orange-700 transition-all duration-150 ease-linear group-hover:w-full rounded-sm "></span>
              <span className="text-4xl bg-blue-500 dark:bg-orange-700 text-white px-3 py-3 rounded-l-sm z-10">
                <IoMailOutline />
              </span>
              <span className="px-5 group-hover:text-white z-10 font-bold">
                email@email.com
              </span>
            </div>
            <div className="text-lg flex items-center font-normal bg-white shadow-lg dark:shadow-none dark:bg-zinc-900 text-black dark:text-white rounded-sm group cursor-pointer relative">
              <span className="absolute left-0 top-0 h-full w-0 group-hover:bg-blue-500 dark:group-hover:bg-orange-700 transition-all duration-150 ease-linear group-hover:w-full rounded-sm "></span>
              <span className="text-4xl bg-blue-500 dark:bg-orange-700 text-white px-3 py-3 rounded-l-sm z-10">
                <IoLogoLinkedin />
              </span>
              <span className="px-5 group-hover:text-white z-10 font-bold">
                Ahmad Abounahia
              </span>
            </div>
          </div>
          <div className="flex gap-10 flex-wrap">
            <input
              className="flex-1 bg-zinc-200 dark:bg-zinc-800 dark:text-white text-black p-3 font-normal"
              placeholder="Your Name"
              type="text"
            />
            <input
              className="flex-1 bg-zinc-200 dark:bg-zinc-800 dark:text-white text-black p-3 font-normal"
              placeholder="Email"
              type="email"
            />
          </div>
          <div className="mt-10 h-[20vh]">
            <textarea
              className="h-full w-full bg-zinc-200 dark:bg-zinc-800 dark:text-white text-black p-3 font-normal"
              placeholder="Reach me out about anything!"
            />
          </div>
          <div className="absolute bottom-[-30px] right-12 flex flex-wrap gap-6">
            <button className="text-lg flex items-center font-normal bg-white shadow-lg dark:bg-zinc-900 text-black dark:text-white rounded-sm group cursor-pointer relative">
              <span className="absolute left-0 top-0 h-full w-0 group-hover:bg-blue-500 dark:group-hover:bg-orange-700 transition-all duration-150 ease-linear group-hover:w-full rounded-sm "></span>
              <span className="text-4xl bg-blue-500 dark:bg-orange-700 text-white px-3 py-3 rounded-l-sm z-10">
                <IoIosSend />
              </span>
              <span className="px-5 group-hover:text-white z-10 font-bold">
                Send Message
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
