/**
 * Pure domain entity representing a professional work experience milestone.
 */
export interface ExperienceItem {
  readonly period: string;
  readonly position: string;
  readonly company: string;
  readonly location: string;
  readonly companyUrl?: string;
  readonly bulletPoints: readonly string[];
  readonly techStack: readonly string[];
}
