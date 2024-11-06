import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ImageIconProps {
  src: string;
  alt: string;
}

function ImageIcon({ src, alt }: ImageIconProps) {
  const initials = alt
    .split(' ')
    .map((name) => name[0])
    .join('')
    .slice(0, 2);

  return (
    <Avatar className='size-72'>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
}

export default ImageIcon;
