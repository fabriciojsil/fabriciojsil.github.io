import { cn } from "@/lib/lib";
import { ClassNameProps } from "@/types/props.types";
import { SocialLink, SocialPlatform } from "@/core/domain/social.entity";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/presentation/components/common/Icons";
import React from "react";

/**
 * Top presentation header wrapper.
 */
export const Presentation = ({ children }: React.PropsWithChildren) => {
  return <header className="w-full max-w-[800px] pt-4 pb-2">{children}</header>;
};

/**
 * Main hero title component.
 */
export const PresentationTitle = ({
  title,
  path,
  className,
}: {
  readonly title: string;
  readonly path: string;
} & ClassNameProps) => {
  return (
    <h1
      className={cn(
        ["text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl mt-10"],
        className
      )}
    >
      <a href={path}>{title}</a>
    </h1>
  );
};

/**
 * Subtitle hero component.
 */
export const PresentationSubTitle = ({
  subTitle,
  className,
}: {
  readonly subTitle: string;
} & ClassNameProps) => {
  return (
    <h2
      className={cn(
        ["mt-8 text-lg font-medium tracking-tight text-slate-200 sm:text-xl"],
        className
      )}
    >
      {subTitle}
    </h2>
  );
};

/**
 * Presentation quote statement.
 */
export const PresentationQuote = ({
  quote,
  className,
}: {
  readonly quote: string;
} & ClassNameProps) => {
  return <p className={cn(["mt-12 leading-normal"], className)}>{quote}</p>;
};

const SOCIAL_ICON_MAP: Record<SocialPlatform, React.ComponentType<{ readonly size?: number | string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
};

/**
 * Social media links list rendered dynamically from pure domain models.
 */
export const PresentationDigitalFootPrint = ({
  social,
}: {
  readonly social: readonly SocialLink[];
}) => {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      {social.map((item) => {
        const IconComponent = SOCIAL_ICON_MAP[item.icon] ?? TwitterIcon;

        return (
          <li key={item.name} className="mr-5 text-sm shrink-0">
            <a
              className="block hover:text-slate-200 transition-colors"
              href={item.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={item.ariaLabel}
              title={`${item.name} profile`}
            >
              <span className="sr-only">{item.name}</span>
              <IconComponent size={28} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
