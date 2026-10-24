/**
 * Port defining the contract for analytics tracking.
 * Decouples the application from concrete tracking vendors (GA4, Plausible, PostHog, etc.).
 */
export interface AnalyticsPort {
  initialize(trackingId: string): void;
  trackPageView(path: string): void;
}
