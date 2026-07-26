import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AbbrProps {
  children: React.ReactElement;
  title: string;
  delayDuration?: number;
}

export function Abbr({ children, title, delayDuration = 100 }: Readonly<AbbrProps>) {
  return (
    <TooltipProvider delay={delayDuration}>
      <Tooltip>
        <TooltipTrigger render={children} />
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
