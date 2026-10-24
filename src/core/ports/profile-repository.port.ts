import { Profile } from "../domain/profile.entity";

/**
 * Port defining the contract for retrieving profile data.
 * Independent of whether data source is in-memory, static JSON, REST API, or CMS.
 */
export interface ProfileRepositoryPort {
  getProfile(): Promise<Profile>;
}
