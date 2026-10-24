import { Section } from "@/presentation/components/common/Section";
import { SectionTitle } from "@/presentation/components/common/SectionTitle";
import { Badge } from "@/presentation/components/common/Badge";
import { ExperienceItem as DomainExperienceItem } from "@/core/domain/experience.entity";
import { cn } from "@/lib/lib";
import { ClassNameProps } from "@/types/props.types";
import { PropsWithChildren } from "react";

/**
 * Work experience section container.
 */
export const Experience = ({ children }: PropsWithChildren) => {
  return (
    <Section id="experience" ariaLabel="Work experience">
      {children}
    </Section>
  );
};

/**
 * Work experience section title.
 */
export const ExperienceTitle = SectionTitle;

/**
 * Ordered list container for experience items.
 */
export const ExperienceList = ({
  className,
  children,
}: ClassNameProps & PropsWithChildren) => {
  return <ol className={cn(["group/list"], className)}>{children}</ol>;
};

/**
 * Individual work experience item card.
 */
export const ExperienceItem = ({
  className,
  item,
}: { readonly item: DomainExperienceItem } & ClassNameProps) => {
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
          <h3 className="flex justify-between font-medium leading-snug text-slate-200">
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
            <div className="text-xs">{item.location}</div>
          </h3>
          <ul>
            {item.bulletPoints.map((point, index) => (
              <li
                key={index}
                className="mt-1 text-sm leading-normal list-disc marker:text-[#FFF]"
              >
                {point}
              </li>
            ))}
          </ul>

          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {item.techStack.map((tech, index) => (
              <li key={index} className="mr-1.5 mt-2">
                <Badge>{tech}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};
