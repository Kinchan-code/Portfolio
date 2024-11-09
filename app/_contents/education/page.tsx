import Card from '@/components/card/page';
import { education } from '@/lib/data/card-contents';
import React from 'react';

function Education() {
  return (
    <main className='flex flex-col gap-4'>
      <label
        htmlFor='projects'
        className='text-lg font-bold font-body uppercase pl-[1.5rem]'
      >
        Education
      </label>
      <div id='projects'>
        {education.map((info, index) => (
          <Card info={info} key={index} />
        ))}
      </div>
    </main>
  );
}

export default Education;
