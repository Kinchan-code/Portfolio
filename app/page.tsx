'use client';

// import { useState, useEffect, useRef } from 'react';
// import Header from '@/components/header/page';
// import AboutMe from '@/app/_about/page';
import Introduction from '@/app/_title/introduction/page';
import Socials from '@/app/_title/socials/page';
import Header from '@/components/header/page';
import Experiences from '@/app/_contents/experiences/page';
import Projects from '@/app/_contents/my-projects/page';
import AboutMe from './_contents/about/page';
import Education from './_contents/education/page';
import { Separator } from '@/components/ui/separator';

// import Links from '@/app/_links/page';
// import { cn } from '@/lib/utils';
// import Experiences from '@/app/_experiences/page';
// import Projects from '@/app/_my-projects/page';

function Home() {
  // const [showHeader, setShowHeader] = useState(true);
  // const [withBorder, setWithBorder] = useState(false);

  // const aboutRef = useRef<HTMLDivElement>(null);
  // const experiencesRef = useRef<HTMLDivElement>(null);
  // const projectsRef = useRef<HTMLDivElement>(null);

  // const Pages = {
  //   About: aboutRef,
  //   Experiences: experiencesRef,
  //   Projects: projectsRef,
  // };

  // const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
  //   console.log('Scrolling to section:', ref.current);

  //   ref.current?.scrollIntoView({ behavior: 'smooth' });
  // };

  // const handleSectionClick = (sectionName: string) => {
  //   const forwardRef = Pages[sectionName as keyof typeof Pages];
  //   if (forwardRef) {
  //     scrollToSection(forwardRef);
  //   }
  // };

  // useEffect(() => {
  //   let lastScrollY = 0;

  //   const handleScroll = () => {
  //     if (window.scrollY > lastScrollY) {
  //       setShowHeader(false);
  //     } else {
  //       setShowHeader(true);
  //       if (window.scrollY > 0) {
  //         setWithBorder(true);
  //       } else {
  //         setWithBorder(false);
  //       }
  //     }
  //     lastScrollY = window.scrollY;
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <main className='min-h-screen max-w-screen px-24 mx-[8rem]'>
      <div className='flex justify-between scroll-smooth'>
        <header className='max-h-screen w-1/2 container justify-between flex flex-col gap-20 py-24 sticky top-0'>
          <Introduction />
          <Socials />
        </header>

        {/* <section className='h-screen  p-6 '>
        {Object.entries(Pages).map(([name, ref], index) => (
          <div
            key={index}
            ref={ref}
            className='flex justify-center flex-col items-center h-full w-full gap-40 p-6'
          >
            {name === 'About' && <AboutMe />}
            {name === 'Experiences' && <Experiences />}
            {name === 'Projects' && <Projects />}
          </div>
        ))}
      </section> */}
        <section className='w-1/2 h-full container flex flex-col py-24'>
          <div className='scroll-mt-16 pb-12'>
            <AboutMe />
          </div>
          <div className='scroll-mt-16 pb-12'>
            <Experiences />
          </div>
          <Separator className='my-12 bg-primary' />
          <div className='scroll-mt-16'>
            <Projects />
          </div>
          <Separator className='my-12 bg-primary' />
          <div className='scroll-mt-16'>
            <Education />
          </div>
        </section>
        {/* Dark Mode Toggle */}
        <section className='fixed top-5 right-5'>
          <Header />
        </section>
      </div>
    </main>
  );
}

export default Home;
