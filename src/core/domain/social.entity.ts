/**
 * Pure domain entity representing an external social media link.
 */
export type SocialPlatform = "github" | "linkedin" | "twitter";

export interface SocialLink {
  readonly name: string;
  readonly url: string;
  readonly icon: SocialPlatform;
  readonly ariaLabel: string;
}
