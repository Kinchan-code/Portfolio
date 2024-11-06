import { ComponentProps, ReactNode } from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Loader } from 'lucide-react';
import { VariantProps } from 'class-variance-authority';

type LoadingButtonProps = ComponentProps<typeof Button> & {
  isLoading?: boolean;
  rest?: ComponentProps<typeof Button>;
  className?: string;
  children?: ReactNode;
  variant?: VariantProps<typeof buttonVariants>;
};

function LoadingButton({
  isLoading,
  className,
  children,
  variant,
  ...rest
}: LoadingButtonProps) {
  return (
    <Button variant={variant} className={cn('relative', className)} {...rest}>
      {isLoading ? (
        <div className='absolute inset-0 flex items-center justify-center animate-spin'>
          <Loader />
        </div>
      ) : (
        children || 'Button'
      )}
    </Button>
  );
}

export default LoadingButton;
