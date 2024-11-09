"use client";

import IntroductionPage from "@/app/(header)/_introduction/page";
import Experiences from "@/app/(contents)/_experiences/page";
import Projects from "@/app/(contents)/_projects/page";
import AboutMe from "@/app/(contents)/_about/page";
import Education from "@/app/(contents)/_education/page";
import ScrollToTop from "@/components/shared/scroll-to-top/Scroll";

type SectionProps = {
  component: React.ReactNode;
};

function Section({ component }: SectionProps) {
  return <div className="scroll-mt-16 pb-12">{component}</div>;
}

const sections: SectionProps[] = [
  { component: <AboutMe /> },
  { component: <Experiences /> },
  { component: <Projects /> },
  { component: <Education /> },
];

function Home() {
  return (
    <main className="min-h-screen max-w-screen px-6 lg:mx-[8rem] lg:px-12">
      <header className="flex justify-between">
        <IntroductionPage />
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
