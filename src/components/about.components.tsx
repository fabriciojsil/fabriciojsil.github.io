import { cn } from "@/lib/lib";
import { ClassNameProps } from "@/types/props.types";
import { PropsWithChildren } from "react";

export const About = ({
  title,
  className,
  children,
}: { title: string } & ClassNameProps & PropsWithChildren) => {
  return (
    <section
      id="about"
      className={cn(["mb-16 scroll-mt-16 md:mb-24"], className)}
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-700/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 ">
          {title}
        </h2>
      </div>
      <div>{children}</div>
    </section>
  );
};

export const AboutDescription = ({
  description,
  className,
}: { description: string } & ClassNameProps) => {
  return <p className={cn(["mb-4"], className)}> {description}</p>;
};
