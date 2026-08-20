"use client";

import { AppShowcase } from "@myndui/components";

const SCREENS = [
  "https://picsum.photos/seed/myndui-a/600/1300",
  "https://picsum.photos/seed/myndui-b/600/1300",
  "https://picsum.photos/seed/myndui-c/600/1300",
];

export function AppShowcaseCarouselDemo() {
  return (
    <div className="flex items-center justify-center py-8">
      <AppShowcase mode="carousel" width={240} screens={SCREENS} />
    </div>
  );
}
