import { Button } from '@/components/ui/button';
import React from 'react';

const links = [
  { name: 'About' },
  { name: 'Experiences' },
  { name: 'Projects' },
  { name: 'Education' },
];

function Links() {
  return (
    <main className='flex flex-col gap-0'>
      {links.map((link, index) => (
        <Button
          key={index}
          className='w-32 flex justify-start  p-0 hover:bg-transparent'
          variant='ghost'
        >
          <p className='flex gap-2 flex-col font-body font-bold text-lg uppercase'>
            {link.name}
          </p>
        </Button>
      ))}
    </main>
  );
}

export default Links;
