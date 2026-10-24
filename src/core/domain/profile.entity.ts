import { ExperienceItem } from "./experience.entity";
import { CertificationItem } from "./certification.entity";
import { SocialLink } from "./social.entity";

/**
 * Personal presentation bio value object.
 */
export interface PersonalBio {
  readonly name: string;
  readonly position: string;
  readonly quote: string;
}

/**
 * About section narrative value object.
 */
export interface AboutInfo {
  readonly title: string;
  readonly description: string;
}

/**
 * Experience section aggregate.
 */
export interface ExperienceSection {
  readonly title: string;
  readonly items: readonly ExperienceItem[];
}

/**
 * Certifications section aggregate.
 */
export interface CertificationSection {
  readonly title: string;
  readonly items: readonly CertificationItem[];
}

/**
 * Root domain entity representing the complete developer profile.
 */
export interface Profile {
  readonly personal: PersonalBio;
  readonly about: AboutInfo;
  readonly experience: ExperienceSection;
  readonly certifications?: CertificationSection;
  readonly social: readonly SocialLink[];
}
