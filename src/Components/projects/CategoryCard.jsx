import clsx from "clsx";

export default function CategoryCard({
  title,
  description,
  icon,
  isActive,
  handleOnClick,
}) {
  return (
    <div
      className="md:flex-1 max-md:w-full flex gap-4 bg-zinc-100 hover:shadow-lg  dark:bg-zinc-900 p-8 rounded-lg hover:-translate-y-3 transition-all cursor-pointer"
      onClick={handleOnClick}
    >
      <div className="w-fit">
        <span
          className={clsx(
            "text-4xl",
            `${
              isActive
                ? "text-blue-400 dark:text-orange-400"
                : "text-black dark:text-white"
            }`
          )}
        >
          {icon}
        </span>
      </div>
      <div className="w-full ">
        <p
          className={clsx(
            "text-2xl",
            `${
              isActive
                ? "text-blue-400 dark:text-orange-400"
                : "text-black dark:text-white"
            }`
          )}
        >
          {title}
        </p>
        <p className="mt-4 font-normal text-zinc-500 dark:text-zinc-400">{description}</p>
      </div>
    </div>
  );
}
