"use client";

import { AppShowcase } from "@myndui/components";

const SCREENS = [
  "https://picsum.photos/seed/myndui-a/600/1300",
  "https://picsum.photos/seed/myndui-b/600/1300",
  "https://picsum.photos/seed/myndui-c/600/1300",
];

export function AppShowcaseClusterDemo() {
  return (
    <div className="flex items-center justify-center py-6">
      <AppShowcase mode="cluster" width={160} screens={SCREENS} />
    </div>
  );
}
