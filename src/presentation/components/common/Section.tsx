import { cn } from "@/lib/lib";
import { ClassNameProps } from "@/types/props.types";
import { PropsWithChildren } from "react";

/**
 * Standard section wrapper with consistent margins and scroll offset.
 */
export const Section = ({
  id,
  ariaLabel,
  className,
  children,
}: {
  id?: string;
  ariaLabel?: string;
} & ClassNameProps & PropsWithChildren) => {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(["mb-16 scroll-mt-16 md:mb-24"], className)}
    >
      {children}
    </section>
  );
};
