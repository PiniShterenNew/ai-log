import { cn } from '@/design-system/utils';

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  clickable?: boolean;
}

export function ListItem({
  className,
  clickable,
  ...props
}: ListItemProps) {
  return (
    <li
      className={cn(
        'rounded-lg border border-slate-200 bg-white p-4 transition-colors',
        clickable && 'cursor-pointer hover:bg-slate-50',
        className
      )}
      {...props}
    />
  );
}

