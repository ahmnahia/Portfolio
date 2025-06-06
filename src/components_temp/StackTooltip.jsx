import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components_temp/ui/tooltip";

export default function StackTooltip({ icon, name }) {
  return (
    <TooltipProvider delayDuration={0} className="w-fit">
      <Tooltip>
        <TooltipTrigger>
          <span className="inline-block text-4xl max-sm:text-4xl text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-orange-400 transition-colors duration-500">
            {icon}
          </span>
        </TooltipTrigger>
        <TooltipContent className="font-normal">
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
