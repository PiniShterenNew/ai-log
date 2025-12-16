import { cn } from '@/design-system/utils';

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {}

export function List({ className, ...props }: ListProps) {
  return (
    <ul
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  );
}

