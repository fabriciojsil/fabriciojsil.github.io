import { Section } from "@/presentation/components/common/Section";
import { SectionTitle } from "@/presentation/components/common/SectionTitle";
import { Badge } from "@/presentation/components/common/Badge";
import { ExternalLinkIcon } from "@/presentation/components/common/Icons";
import { CertificationItem as DomainCertificationItem } from "@/core/domain/certification.entity";
import { cn } from "@/lib/lib";
import { ClassNameProps } from "@/types/props.types";
import { PropsWithChildren } from "react";

/**
 * Certifications section container.
 */
export const Certification = ({ children }: PropsWithChildren) => {
  return (
    <Section id="certifications" ariaLabel="Certifications">
      {children}
    </Section>
  );
};

/**
 * Certifications section title.
 */
export const CertificationTitle = SectionTitle;

/**
 * Ordered list container for certifications.
 */
export const CertificationList = ({
  className,
  children,
}: ClassNameProps & PropsWithChildren) => {
  return <ol className={cn(["group/list"], className)}>{children}</ol>;
};

/**
 * Individual certification item card.
 */
export const CertificationItem = ({
  className,
  item,
}: { readonly item: DomainCertificationItem } & ClassNameProps) => {
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
                <ExternalLinkIcon className="ml-1 inline-block h-3.5 w-3.5 shrink-0 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            </div>
          )}

          {item.skills && item.skills.length > 0 && (
            <ul className="mt-3 flex flex-wrap" aria-label="Skills certified">
              {item.skills.map((skill, index) => (
                <li key={index} className="mr-1.5 mt-2">
                  <Badge>{skill}</Badge>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
};
