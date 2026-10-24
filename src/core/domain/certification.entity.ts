/**
 * Pure domain entity representing a professional certification credential.
 */
export type CertificationStatus = "certified" | "in_progress";

export interface CertificationItem {
  readonly title: string;
  readonly issuer: string;
  readonly issueDate: string;
  readonly expirationDate?: string;
  readonly credentialId?: string;
  readonly certificationNumber?: string;
  readonly credentialUrl?: string;
  readonly badgeUrl?: string;
  readonly skills?: readonly string[];
  readonly status?: CertificationStatus;
}
