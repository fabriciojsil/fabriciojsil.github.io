import { cn } from "@/lib/lib";
import { ClassNameProps } from "@/types/props.types";

/**
 * Sticky section title with backdrop blur effect matching the slate design system.
 */
export const SectionTitle = ({
  title,
  className,
}: { title: string } & ClassNameProps) => {
  return (
    <div
      className={cn(
        [
          "sticky top-0 z-20 -mx-6 mb-4 bg-slate-700/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12",
        ],
        className
      )}
    >
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
        {title}
      </h2>
    </div>
  );
};
