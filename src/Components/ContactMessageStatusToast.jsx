"use client";

import clsx from "clsx";

export default function ContactMessageStatusToast({ messageStatus }) {
  return (
    <div
      className={clsx(
        "fixed left-8 bottom-8 overflow-hidden translate-x-[-150%] transition-all duration-500",
        messageStatus.messageSent ? "z-50 translate-x-0" : "-z-50"
      )}
    >
      <div
        className={clsx(
          "w-[400px] max-sm:w-[95%] relative p-4 bg-blue-100 dark:bg-zinc-900 rounded-sm ",
          messageStatus.error && "bg-red-100"
        )}
      >
        <div
          className={clsx(
            "w-[100%] rounded-lg border-t-[5px] border-blue-500 dark:border-orange-600 absolute left-0 top-0 duration-5000 delay-500",
            messageStatus.error && "border-red-500 dark:border-red-500",

            messageStatus.messageSent &&
              "transition-transform translate-x-[-100%]"
          )}
        ></div>
        <h3
          className={clsx(
            "mt-3 text-blue-500 dark:text-orange-500",
            messageStatus.error && "text-red-500 dark:text-red-500"
          )}
        >
          {messageStatus.error ? "An Error Ouccured!" : "Success!"}
        </h3>
        <p
          className={clsx(
            "mt-2 font-normal text-blue-600 dark:text-orange-300",
            messageStatus.error && "text-red-400 dark:text-red-400"
          )}
        >
          {messageStatus.error
            ? "Something went wrong, please contact me via email."
            : "Message has been sent successfully! Will reply back as soon as possible."}
        </p>
      </div>
    </div>
  );
}
