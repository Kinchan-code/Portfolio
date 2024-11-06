import Card from '@/components/card/page';
import { workExperience } from '@/lib/data/card-contents';
import React from 'react';

function Experiences() {
  return (
    <main className='flex flex-col gap-4'>
      <label
        htmlFor='work-experience'
        className='text-lg font-bold font-body uppercase pl-[1.5rem]'
      >
        Work Experience
      </label>
      <div id='work-experience'>
        {workExperience.map((info, index) => (
          <Card info={info} key={index} />
        ))}
      </div>
    </main>
  );
}

export default Experiences;
