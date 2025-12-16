import { Badge as ShadcnBadge } from '../ui/badge';
import { cn } from '@/design-system/utils';

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className' | 'variant'> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'info' | 'warning';
  /**
   * Additional className (for design-system internal composition only)
   */
  className?: string;
}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <ShadcnBadge
      className={cn(
        variant === 'info' &&
          'border-transparent bg-blue-100 text-blue-900 hover:bg-blue-100/80 dark:bg-blue-900 dark:text-blue-50 dark:hover:bg-blue-900/80',
        variant === 'warning' &&
          'gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 border-0',
        className
      )}
      variant={variant === 'info' || variant === 'warning' ? 'secondary' : variant}
      {...props}
    />
  );
}

