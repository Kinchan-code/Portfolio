import { Loader2 } from 'lucide-react';

function Loader() {
  return (
    <main className='h-screen w-screen flex items-center gap-2 justify-center'>
      <Loader2 className='animate-spin size-15' />
      <p className='text-muted-foreground'>Loading...</p>
    </main>
  );
}

export default Loader;
