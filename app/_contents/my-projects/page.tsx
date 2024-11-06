import Card from '@/components/card/page';
import { projects } from '@/lib/data/card-contents';
import React from 'react';

function Projects() {
  return (
    <main className='flex flex-col gap-4'>
      <label
        htmlFor='projects'
        className='text-lg font-bold font-body uppercase pl-[1.5rem]'
      >
        Projects
      </label>
      <div id='projects'>
        {projects.map((info, index) => (
          <Card info={{ ...info, image: info.image.src }} key={index} />
        ))}
      </div>
    </main>
  );
}

export default Projects;
