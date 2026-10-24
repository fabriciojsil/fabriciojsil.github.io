import { CertificationItemType } from "@/data/profile.data";
import { cn } from "@/lib/lib";
import { ClassNameProps } from "@/types/props.types";
import { PropsWithChildren } from "react";

export const Certification = ({ children }: PropsWithChildren) => {
  return (
    <section
      id="certifications"
      className="mb-16 scroll-mt-16 md:mb-24"
      aria-label="Certifications"
    >
      {children}
    </section>
  );
};

export const CertificationTitle = ({
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

export const CertificationList = ({
  className,
  children,
}: ClassNameProps & PropsWithChildren) => {
  return <ol className={cn(["group/list"], className)}>{children}</ol>;
};

export const CertificationItem = ({
  className,
  item,
}: { item: CertificationItemType } & ClassNameProps) => {
  return (
    <li className={cn(["mb-12"], className)}>
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
          aria-label={item.issueDate}
        >
          {item.issueDate}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="flex flex-wrap items-baseline justify-between font-medium leading-snug text-slate-200">
            <div className="mb-2">
              <span className="text-base font-semibold">{item.title}</span>
              <span className="pl-2 text-slate-400">· {item.issuer}</span>
            </div>
            {item.status === "in_progress" && (
              <span className="inline-flex items-center rounded-full bg-amber-400/10 px-2.5 py-0.5 text-xs font-medium text-amber-300">
                In Progress
              </span>
            )}
          </h3>

          <div className="space-y-1 text-xs text-slate-400">
            {item.credentialId && (
              <p>
                <span className="font-semibold text-slate-300">Credential ID:</span>{" "}
                <span className="font-mono">{item.credentialId}</span>
              </p>
            )}
            {item.certificationNumber && (
              <p>
                <span className="font-semibold text-slate-300">Certification Number:</span>{" "}
                <span className="font-mono">{item.certificationNumber}</span>
              </p>
            )}
          </div>

          {item.credentialUrl && (
            <div className="mt-3">
              <a
                className="inline-flex items-center text-xs font-medium text-teal-300 transition-colors hover:text-teal-200 focus-visible:text-teal-200"
                href={item.credentialUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`View certificate for ${item.title}`}
              >
                <span>Verify Credential</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-3.5 w-3.5 shrink-0 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          )}

          {item.skills && item.skills.length > 0 && (
            <ul className="mt-3 flex flex-wrap" aria-label="Skills certified">
              {item.skills.map((skill, index) => (
                <li key={index} className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    {skill}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
};
