import { cn } from "@/lib/lib";
import { ClassNameProps } from "@/types/props.types";
import { GithubIcon, Linkedin, Twitter } from "./icons";

export const Presentation = ({ children }: React.PropsWithChildren) => {
  return <header className="w-full max-w-[800px] pt-4 pb-2">{children}</header>;
};

export const PresentationTitle = ({
  title,
  path,
  className,
}: {
  title: string;
  path: string;
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

export const PresentationSubTitle = ({
  subTitle,
  className,
}: {
  subTitle: string;
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

export const PresentationQuote = ({
  quote,
  className,
}: { quote: string } & ClassNameProps) => {
  return <p className={cn(["mt-12 leading-normal"], className)}>{quote}</p>;
};

export const PresentationDigitalFootPrint = () => {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      <li className="mr-5 text-sm shrink-0">
        <a
          className="block hover:text-slate-200"
          href="https://github.com/fabriciojsil"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Fabricio's GitHub profile (opens in a new tab)"
          title="Fabricio's GitHub profile"
        >
          <span className="sr-only">GitHub</span>
          <GithubIcon size={28} />
        </a>
      </li>
      <li className="mr-5 text-sm shrink-0">
        <a
          className="block hover:text-slate-200"
          href="https://www.linkedin.com/in/fabriciojean/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Fabricio's LinkedIn profile (opens in a new tab)"
          title="Fabricio's LinkedIn profile"
        >
          <span className="sr-only">LinkedIn</span>
          <Linkedin size={28} />
        </a>
      </li>
      <li className="mr-5 text-sm shrink-0">
        <a
          className="block hover:text-slate-200"
          href="https://twitter.com/fabriciojsil"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Fabricio's X (Twitter) profile (opens in a new tab)"
          title="Fabricio's X (Twitter) profile"
        >
          <span className="sr-only">X</span>
          <Twitter size={28} />
        </a>
      </li>
    </ul>
  );
};
