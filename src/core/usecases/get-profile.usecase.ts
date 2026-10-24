import { Profile } from "../domain/profile.entity";
import { ProfileRepositoryPort } from "../ports/profile-repository.port";

/**
 * Use case orchestrating retrieval of the developer profile.
 * Implements Dependency Inversion: depends strictly on ProfileRepositoryPort.
 */
export class GetProfileUseCase {
  constructor(private readonly repository: ProfileRepositoryPort) {}

  /**
   * Executes the use case to retrieve the profile.
   */
  async execute(): Promise<Profile> {
    return this.repository.getProfile();
  }
}
