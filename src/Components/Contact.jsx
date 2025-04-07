"use client";
import { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { sendMessage } from "@/serverActions/contactForm";
import ContactMessageStatusToast from "./ContactMessageStatusToast";
import { Loader2 } from "lucide-react";

export default function Contact() {
  const [messageStatus, setMessageStatus] = useState({
    messageSent: false,
    error: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const formAction = async (e) => {
    e.preventDefault();
    setIsLoading(true); // show loading spinner for the user

    const formData = new FormData(e.target);
    const formValues = {};
    for (const [key, value] of formData.entries()) {
      formValues[key] = value;
    }
    const res = await sendMessage(formValues);
    setMessageStatus(res); // to show a toast message
    e.target.reset(); //reset form values
    setIsLoading(false); // loading done
    setTimeout(() => {
      setMessageStatus({
        messageSent: false,
        error: res.error,
      });
    }, 6000);
  };

  return (
    <section className="py-32 max-lg:py-[150px] relative" id="contact">
      <div className="side-page-svg absolute left-0 top-[0px] max-md:top-[-20px] w-[200px] h-[200px] max-sm:w-[150px] max-sm:h-[150px] rotate-[90deg] z-[-10]"></div>
      <div className="container">
        <h1 className="max-lg:text-4xl lg:text-6xl text-center  pt-5 text-blue-500 dark:text-orange-600 about-sec-title after:content-['03'] after:translate-x-[-10px] after:translate-y-[-150px] max-lg:after:translate-x-[-70px] max-lg:after:translate-y-[-80px]">
          Contact
        </h1>
        <div className="mt-24 p-12 py-20 max-md:px-6 border-zinc-400/20 border-2 rounded-xl shadow-md relative">
          <div className="absolute top-[-30px] flex flex-wrap gap-6">
            <div className="text-lg font-normal bg-white shadow-lg dark:shadow-none dark:bg-zinc-900 text-black dark:text-white rounded-sm group cursor-pointer relative">
              <a href="mailto:me@ahmadnahia.com" className="flex items-center">
                <span className="absolute left-0 top-0 h-full w-0 group-hover:bg-blue-500 dark:group-hover:bg-orange-700 transition-all duration-150 ease-linear group-hover:w-full rounded-sm "></span>
                <span className="text-4xl bg-blue-500 dark:bg-orange-700 text-white px-3 py-3 rounded-l-sm max-md:rounded-sm z-10">
                  <IoMailOutline />
                </span>
                <span className="px-5 group-hover:text-white z-10 font-bold max-md:hidden">
                  me@ahmadnahia.com
                </span>
              </a>
            </div>

            <div className="text-lg  font-normal bg-white shadow-lg dark:shadow-none dark:bg-zinc-900 text-black dark:text-white rounded-sm group cursor-pointer relative">
              <a
                href="https://www.linkedin.com/in/ahmad-abounahia-191502285/"
                className="flex items-center"
                target="_blank"
              >
                <span className="absolute left-0 top-0 h-full w-0 group-hover:bg-blue-500 dark:group-hover:bg-orange-700 transition-all duration-150 ease-linear group-hover:w-full rounded-sm "></span>
                <span className="text-4xl bg-blue-500 dark:bg-orange-700 text-white px-3 py-3 rounded-l-sm max-md:rounded-sm z-10">
                  <IoLogoLinkedin />
                </span>
                <span className="px-5 group-hover:text-white z-10 font-bold max-md:hidden">
                  Ahmad Abounahia
                </span>
              </a>
            </div>
          </div>
          <form onSubmit={formAction} id="contact-form">
            <div className="flex gap-10 flex-wrap">
              <input
                className="flex-1 bg-zinc-200 dark:bg-zinc-800 dark:text-white text-black p-3 font-normal rounded-md"
                placeholder="Your Name"
                type="text"
                id="name-input"
                name="name"
                maxLength={25}
                minLength={3}
                required
              />
              <input
                className="flex-1 bg-zinc-200 dark:bg-zinc-800 dark:text-white text-black p-3 font-normal rounded-md"
                placeholder="Email"
                type="email"
                id="email-input"
                name="email"
                required
              />
            </div>
            <div className="mt-10 h-[20vh]">
              <textarea
                className="h-full w-full bg-zinc-200 dark:bg-zinc-800 dark:text-white text-black p-3 font-normal rounded-md resize-none"
                placeholder="Reach out to me about anything!"
                required
                minLength={2}
                maxLength={800}
                name="message"
                id="message-input"
              />
            </div>
            <div className="absolute bottom-[-30px] right-12 max-sm:right-6 flex flex-wrap gap-6">
              <button
                type="submit"
                name="submit"
                // onClick={() => {
                //   setMessageStatus({messageSent: true, error: true});
                //   setTimeout(() => {
                //     setMessageStatus({
                //       messageSent: false,
                //       error: false,
                //     });
                //   }, 6000);
                // }}
                disabled={isLoading}
                className="text-lg flex items-center font-normal bg-white shadow-lg dark:bg-zinc-900 text-black dark:text-white rounded-sm group cursor-pointer relative"
              >
                <span className="absolute left-0 top-0 h-full w-0 group-hover:bg-blue-500 dark:group-hover:bg-orange-700 transition-all duration-150 ease-linear group-hover:w-full rounded-sm "></span>
                <span className="text-4xl bg-blue-500 dark:bg-orange-700 text-white px-3 py-3 rounded-l-sm max-sm:rounded-sm z-10">
                  {isLoading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <IoIosSend />
                  )}
                </span>
                <span className="px-5 group-hover:text-white z-10 font-bold max-sm:hidden">
                  Send Message
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <ContactMessageStatusToast messageStatus={messageStatus} />
    </section>
  );
}
