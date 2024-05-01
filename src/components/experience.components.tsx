import { ExperienceItemType } from "@/data/profile.data";
import { cn } from "@/lib/lib";
import { ClassNameProps } from "@/types/props.types";
import { PropsWithChildren } from "react";

export const Experience = ({ children }: PropsWithChildren) => {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 "
      aria-label="Work experience"
    >
      {children}
    </section>
  );
};

export const ExperienceTitle = ({
  title,
  className,
}: { title: string } & ClassNameProps) => {
  return (
    <div
      className={cn(
        [
          "sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-700/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12",
        ],
        className
      )}
    >
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 ">
        {title}
      </h2>
    </div>
  );
};

export const ExperienceList = ({
  className,
  children,
}: ClassNameProps & PropsWithChildren) => {
  return <ol className={cn(["group/list"], className)}>{children}</ol>;
};

export const ExperienceItem = ({
  className,
  item,
}: { item: ExperienceItemType } & ClassNameProps & PropsWithChildren) => {
  return (
    <li className={cn(["mb-12"], className)}>
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
          aria-label={item.period}
        >
          {item.period}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className=" flex justify-between font-medium leading-snug text-slate-200">
            <div className="mb-2">
              <span>{item.position},</span>
              <a
                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                href={item.companyUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={item.position}
              >
                <span className="pl-2">{item.company}</span>
              </a>
            </div>
            <div className=" text-xs"> {item.location} </div>
          </h3>
          <ul>
            {item.bulletPoints.map((value, index) => {
              return (
                <li
                  key={index}
                  className="mt-1 text-sm leading-normal list-disc marker:text-[#FFF]"
                >
                  {value}
                </li>
              );
            })}
          </ul>

          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {item.techStack.map((value, index) => {
              return (
                <li key={index} className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    {value}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </li>
  );
};
