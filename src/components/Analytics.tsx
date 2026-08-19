import { useEffect, useState, type ComponentType } from "react";
import { site } from "../site";

type TrackerProps = {
  clientId: string;
  trackAttributes?: boolean;
  trackErrors?: boolean;
  trackHashChanges?: boolean;
  trackInteractions?: boolean;
  trackOutgoingLinks?: boolean;
  trackWebVitals?: boolean;
};

export default function Analytics() {
  const [Tracker, setTracker] = useState<ComponentType<TrackerProps> | null>(null);

  useEffect(() => {
    if (!site.databuddyClientId) {
      return;
    }

    let cancelled = false;
    const load = () => {
      void import("@databuddy/sdk/react").then(({ Databuddy }) => {
        if (!cancelled) {
          setTracker(() => Databuddy);
        }
      });
    };

    if (typeof requestIdleCallback === "function") {
      const idle = requestIdleCallback(load);
      return () => {
        cancelled = true;
        cancelIdleCallback(idle);
      };
    }

    const timeout = window.setTimeout(load, 1);
    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
    };
  }, []);

  if (!Tracker || !site.databuddyClientId) {
    return null;
  }

  return (
    <Tracker
      clientId={site.databuddyClientId}
      trackHashChanges={true}
      trackAttributes={true}
      trackOutgoingLinks={true}
      trackInteractions={true}
      trackWebVitals={true}
      trackErrors={true}
    />
  );
}
