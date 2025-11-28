"use client";

import GuideStep from "@/components/GuideStep";
import GuideNavigation from "@/components/GuideNavigation";
import ProgressBar from "@/components/ProgressBar";
import NavigationOverview from "@/components/NavigationOverview";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <ProgressBar />
      <GuideStep />
      <GuideNavigation />
      <NavigationOverview />
    </div>
  );
}
