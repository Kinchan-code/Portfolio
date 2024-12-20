import React, { PropsWithChildren } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

type Links = { name: string; path: string }[];

type Technologies = { name: string }[];

type Info = {
  date?: string;
  image?: string;
  title?: string;
  path?: string;
  company?: string;
  description?: string;
  links?: Links;
  technologies?: Technologies;
};

type CardProps = PropsWithChildren<{
  info: Info;
}>;

function Card({ info }: CardProps) {
  return (
    <main className='flex gap-6 p-4 px-6 w-full rounded-lg hover:bg-primary/5 cursor-pointer'>
      <section className='w-1/4'>
        {info.date && (
          <p className='font-list font-bold text-xs text-muted-foreground uppercase pt-1'>
            {info.date}
          </p>
        )}
        {info.image && (
          <Image
            src={info.image}
            alt={info.title || ''}
            height={150}
            width={150}
            className='rounded-md ring-1 ring-primary/20'
          />
        )}
      </section>
      <section className='w-3/4 flex flex-col gap-2'>
        <div
          className='font-bold text-md flex items-center gap-2 cursor-pointer hover:underline hover:text-blue-600 dark:hover:text-blue-400'
          onClick={() => {
            if (info.path) {
              window.open(info.path, '_blank');
            }
          }}
        >
          <span className='flex items-center gap-2'>
            {info.title || ''} {info.company && '•'} {info.company || ''}
          </span>
        </div>
        <p className='text-muted-foreground font-semibold text-sm text-justify'>
          {info.description || ''}
        </p>
        {info.links && (
          <div className='flex gap-2 flex-wrap'>
            {info.links?.map((link) => (
              <Button
                variant='link'
                className='font-bold text-sm flex justify-start'
                onClick={() => {
                  info.links?.forEach((link) =>
                    window.open(link.path, '_blank')
                  );
                }}
                key={link.name}
              >
                <div className='flex gap-4 items-center'>
                  <Link className='size-4' />
                  <p className='text-xs font-bold'>{link.name}</p>
                </div>
              </Button>
            ))}
          </div>
        )}
        {info.technologies && (
          <div className='flex gap-2 flex-wrap'>
            {info.technologies?.map((tech) => (
              <Badge
                variant='outline'
                className=' w-fit bg-blue-200/40 p-2 rounded-full cursor-pointer dark:bg-blue-600/20'
                key={tech.name}
              >
                <p className='text-md font-semibold text-blue-600 font-body dark:text-blue-400'>
                  {tech.name}
                </p>
              </Badge>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Card;
