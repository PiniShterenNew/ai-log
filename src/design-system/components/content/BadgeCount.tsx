import { cn } from '@/design-system/utils';

export interface BadgeCountProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The count number to display
   */
  count: number;
  /**
   * Visual variant
   */
  variant?: 'default' | 'primary' | 'secondary';
}

const variantStyles = {
  default: 'bg-slate-900 text-white',
  primary: 'bg-blue-600 text-white',
  secondary: 'bg-slate-200 text-slate-900',
};

export function BadgeCount({
  count,
  variant = 'default',
  className,
  ...props
}: BadgeCountProps) {
  return (
    <span
      className={cn(
        'flex h-5 w-5 items-center justify-center rounded-full text-xs font-medium',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {count}
    </span>
  );
}
