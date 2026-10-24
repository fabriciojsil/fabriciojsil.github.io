import { useEffect, useState } from "react";
import { Profile } from "@/core/domain/profile.entity";
import { GetProfileUseCase } from "@/core/usecases/get-profile.usecase";

interface UseProfileState {
  readonly profile: Profile | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
}

/**
 * Custom React hook bridging the UI layer to the GetProfileUseCase.
 * Handles async lifecycle and reactive state for the developer profile.
 */
export function useProfile(useCase: GetProfileUseCase): UseProfileState {
  const [state, setState] = useState<UseProfileState>({
    profile: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    useCase
      .execute()
      .then((profile) => {
        if (!isMounted) {
          return;
        }

        setState({ profile, isLoading: false, error: null });
      })
      .catch((err) => {
        if (!isMounted) {
          return;
        }

        const error = err instanceof Error ? err : new Error(String(err));
        setState({ profile: null, isLoading: false, error });
      });

    return () => {
      isMounted = false;
    };
  }, [useCase]);

  return state;
}
