"use client";

import Links from "@/app/(header)/links/page";
import Introduction from "@/components/features/introduction/Introduction";

function IntroductionPage() {
  return (
    <main className="flex flex-col gap-12">
      <Introduction />
      <Links />
    </main>
  );
}

export default IntroductionPage;
