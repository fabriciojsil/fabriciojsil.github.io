import { cn } from "@/lib/lib";
import { ClassNameProps } from "@/types/props.types";
import { PropsWithChildren } from "react";

/**
 * Reusable rounded badge for skills, technologies, and status indicators.
 */
export const Badge = ({
  children,
  className,
}: ClassNameProps & PropsWithChildren) => {
  return (
    <div
      className={cn(
        [
          "flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300",
        ],
        className
      )}
    >
      {children}
    </div>
  );
};
