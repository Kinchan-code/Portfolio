"use client";

import { AppFooter } from "@/components/layout";
import { ScrollToTop } from "@/components/shared";
import { About } from "@/features/about";
import { Education } from "@/features/education";
import { Experiences } from "@/features/experiences";
import { Introduction } from "@/features/introduction";
import { Projects } from "@/features/projects";

interface SectionProps {
  id: string;
  component: React.ReactNode;
}

function Section({ component }: Readonly<Pick<SectionProps, "component">>) {
  return <div className="scroll-mt-16 pb-12">{component}</div>;
}

const sections: SectionProps[] = [
  { id: "about", component: <About /> },
  { id: "experiences", component: <Experiences /> },
  { id: "projects", component: <Projects /> },
  { id: "education", component: <Education /> },
];

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen px-6 lg:mx-32 lg:px-12">
      <header className="w-full">
        <Introduction />
      </header>
      <div className="flex justify-between scroll-smooth">
        <section className="h-full flex flex-col">
          {sections.map((section) => (
            <Section key={section.id} component={section.component} />
          ))}
        </section>
      </div>
      <ScrollToTop />
      <AppFooter />
    </main>
  );
}
