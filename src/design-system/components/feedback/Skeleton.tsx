import { cn } from '@/design-system/utils';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
}

export function Skeleton({
  className,
  width,
  height,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-slate-200',
        width || 'w-full',
        height || 'h-4',
        className
      )}
      {...props}
    />
  );
}

