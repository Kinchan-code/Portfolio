import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ImageIconProps {
  src: string;
  alt: string;
  size?: string;
  className?: string;
}

function ImageIcon({ src, alt, size = "size-72", className }: ImageIconProps) {
  const initials = alt
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2);

  return (
    <Avatar className={cn(className, size)}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
}

export default ImageIcon;
