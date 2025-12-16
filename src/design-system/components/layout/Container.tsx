import { cn } from '@/design-system/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

const maxWidthMap = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full',
};

export function Container({
  maxWidth = 'xl',
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn('mx-auto w-full', maxWidthMap[maxWidth], className)}
      {...props}
    />
  );
}

