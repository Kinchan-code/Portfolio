import type { Metadata } from "next";

import { Archive } from "@/features/archive";

export const metadata: Metadata = {
  title: "All Projects",
  description:
    "Browse the full archive of projects by Christian Bangay, including freelance and professional work across React, Next.js, and full stack development.",
  alternates: {
    canonical: "/archive",
  },
  openGraph: {
    title: "All Projects | Christian Bangay",
    description:
      "Browse the full archive of projects by Christian Bangay across React, Next.js, and full stack development.",
    url: "/archive",
  },
};

export default function ArchivePage() {
  return <Archive />;
}
