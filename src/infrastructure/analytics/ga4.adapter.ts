import { AnalyticsPort } from "@/core/ports/analytics.port";
import ReactGA from "react-ga4";

/**
 * Google Analytics 4 infrastructure adapter implementing AnalyticsPort.
 * Isolates third-party react-ga4 dependency from application core and UI components.
 */
export class GA4AnalyticsAdapter implements AnalyticsPort {
  private isInitialized = false;

  /**
   * Initializes GA4 with the tracking ID.
   */
  initialize(trackingId: string): void {
    if (this.isInitialized) {
      return;
    }

    ReactGA.initialize(trackingId);
    this.isInitialized = true;
  }

  /**
   * Tracks a pageview event for the given path.
   */
  trackPageView(path: string): void {
    if (!this.isInitialized) {
      return;
    }

    ReactGA.send({ hitType: "pageview", page: path });
  }
}
