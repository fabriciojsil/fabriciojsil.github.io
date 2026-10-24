import { Profile } from "@/core/domain/profile.entity";
import { ProfileRepositoryPort } from "@/core/ports/profile-repository.port";
import { STATIC_PROFILE_DATA } from "./static-profile.data";

/**
 * Static in-memory repository adapter implementing ProfileRepositoryPort.
 * Encapsulates data fetching behind the repository abstraction.
 */
export class StaticProfileRepository implements ProfileRepositoryPort {
  /**
   * Retrieves the developer profile.
   */
  async getProfile(): Promise<Profile> {
    return Promise.resolve(STATIC_PROFILE_DATA);
  }
}
