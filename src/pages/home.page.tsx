import { ProfileType } from "@/data/profile.data";
import {
  Presentation,
  PresentationDigitalFootPrint,
  PresentationQuote,
  PresentationSubTitle,
  PresentationTitle,
} from "@/components/header.components";
import { Navbar } from "@/components/navbar.component";
import { About, AboutDescription } from "@/components/about.components";
import {
  Experience,
  ExperienceItem,
  ExperienceList,
  ExperienceTitle,
} from "@/components/experience.components";
import {
  Certification,
  CertificationItem,
  CertificationList,
  CertificationTitle,
} from "@/components/certification.components";

export const HomePage = ({ profile }: { profile: ProfileType }) => (
  <div className="flex flex-col bg-slate-700 text-slate-300 items-center ">
    <Navbar />
    <Presentation>
      <PresentationTitle title={profile.personal.name} path="/" />
      <PresentationSubTitle subTitle={profile.personal.position} />
      <PresentationQuote quote={profile.personal.quote} />
      <PresentationDigitalFootPrint />
    </Presentation>
    <main id="content" className="pt-12 max-w-[800px]">
      <About title={profile.about.title}>
        <AboutDescription description={profile.about.description} />
      </About>
      <Experience>
        <ExperienceTitle title={profile.experience.title} />
        <ExperienceList>
          {profile.experience.items.map((i) => (
            <ExperienceItem key={i.period} item={i} />
          ))}
        </ExperienceList>
      </Experience>
      {profile.certifications && (
        <Certification>
          <CertificationTitle title={profile.certifications.title} />
          <CertificationList>
            {profile.certifications.items.map((c) => (
              <CertificationItem key={c.title} item={c} />
            ))}
          </CertificationList>
        </Certification>
      )}
    </main>
  </div>
);
