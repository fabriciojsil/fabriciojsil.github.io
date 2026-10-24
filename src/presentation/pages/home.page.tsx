import { Profile } from "@/core/domain/profile.entity";
import {
  Presentation,
  PresentationDigitalFootPrint,
  PresentationQuote,
  PresentationSubTitle,
  PresentationTitle,
} from "@/presentation/components/header/Header";
import { Navbar } from "@/presentation/components/navigation/Navbar";
import { About, AboutDescription } from "@/presentation/components/about/About";
import {
  Experience,
  ExperienceItem,
  ExperienceList,
  ExperienceTitle,
} from "@/presentation/components/experience/Experience";
import {
  Certification,
  CertificationItem,
  CertificationList,
  CertificationTitle,
} from "@/presentation/components/certification/Certification";

/**
 * Pure presentation home page view composing header, navigation, and content sections.
 * Operates strictly on domain models.
 */
export const HomePage = ({ profile }: { readonly profile: Profile }) => {
  return (
    <div className="flex flex-col bg-slate-700 text-slate-300 items-center">
      <Navbar />
      <Presentation>
        <PresentationTitle title={profile.personal.name} path="/" />
        <PresentationSubTitle subTitle={profile.personal.position} />
        <PresentationQuote quote={profile.personal.quote} />
        <PresentationDigitalFootPrint social={profile.social} />
      </Presentation>
      <main id="content" className="pt-12 max-w-[800px]">
        <About title={profile.about.title}>
          <AboutDescription description={profile.about.description} />
        </About>
        <Experience>
          <ExperienceTitle title={profile.experience.title} />
          <ExperienceList>
            {profile.experience.items.map((item) => (
              <ExperienceItem key={item.period} item={item} />
            ))}
          </ExperienceList>
        </Experience>
        {profile.certifications && (
          <Certification>
            <CertificationTitle title={profile.certifications.title} />
            <CertificationList>
              {profile.certifications.items.map((item) => (
                <CertificationItem key={item.title} item={item} />
              ))}
            </CertificationList>
          </Certification>
        )}
      </main>
    </div>
  );
};
