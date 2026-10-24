import { Section } from "@/presentation/components/common/Section";
import { SectionTitle } from "@/presentation/components/common/SectionTitle";
import { cn } from "@/lib/lib";
import { ClassNameProps } from "@/types/props.types";
import { PropsWithChildren } from "react";

/**
 * About section container with standardized sticky header.
 */
export const About = ({
  title,
  className,
  children,
}: { readonly title: string } & ClassNameProps & PropsWithChildren) => {
  return (
    <Section id="about" ariaLabel="About me" className={className}>
      <SectionTitle title={title} />
      <div>{children}</div>
    </Section>
  );
};

/**
 * About section narrative description paragraph.
 */
export const AboutDescription = ({
  description,
  className,
}: { readonly description: string } & ClassNameProps) => {
  return <p className={cn(["mb-4"], className)}>{description}</p>;
};
