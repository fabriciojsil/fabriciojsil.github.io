import { StaticProfileRepository } from "@/infrastructure/repositories/static-profile.repository";
import { GetProfileUseCase } from "@/core/usecases/get-profile.usecase";
import { GA4AnalyticsAdapter } from "@/infrastructure/analytics/ga4.adapter";
import { useProfile } from "@/presentation/hooks/use-profile.hook";
import { HomePage } from "@/presentation/pages/home.page";

const profileRepository = new StaticProfileRepository();
const getProfileUseCase = new GetProfileUseCase(profileRepository);
const analyticsAdapter = new GA4AnalyticsAdapter();

analyticsAdapter.initialize("G-F4V0GVG1GK");

/**
 * Root composition component wiring core use cases, infrastructure adapters, and presentation.
 */
function App() {
  const { profile, isLoading, error } = useProfile(getProfileUseCase);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-700 text-slate-300">
        <span className="sr-only">Loading profile...</span>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-700 text-red-400">
        <p>Failed to load profile.</p>
      </div>
    );
  }

  return <HomePage profile={profile} />;
}

export default App;
