"use client";

import About from "@/components/features/about/About";
import Education from "@/components/features/education/Education";
import Experiences from "@/components/features/experiences/Experiences";
import Introduction from "@/components/features/introduction/Introduction";
import Projects from "@/components/features/projects/Projects";
import ScrollToTop from "@/components/shared/scroll-to-top/Scroll";

type SectionProps = {
  component: React.ReactNode;
};

function Section({ component }: SectionProps) {
  return <div className="scroll-mt-16 pb-12">{component}</div>;
}

const sections: SectionProps[] = [
  { component: <About /> },
  { component: <Experiences /> },
  { component: <Projects /> },
  { component: <Education /> },
];

function Home() {
  return (
    <main className="min-h-screen max-w-screen px-6 lg:mx-[8rem] lg:px-12">
      <header className="w-full">
        <Introduction />
      </header>
      <div className="flex justify-between scroll-smooth">
        <section className="h-full flex flex-col">
          {sections.map((section, index) => (
            <Section key={index} component={section.component} />
          ))}
        </section>
      </div>
      <ScrollToTop />
      <footer className="py-8 text-center text-xs sm:text-sm text-muted-foreground">
        <p>© 2024 Christian Bangay. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default Home;
