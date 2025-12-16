import { cn } from '@/design-system/utils';

export interface SectionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  /**
   * Layout variant - defines flex behavior and min-width
   */
  variant?: 
    | 'default'      // flex-col, default behavior
    | 'grow'         // flex-col, flex-1
    | 'grow-tight'   // flex-col, flex-1, min-w-0
  /**
   * Additional className (for design-system internal composition only)
   */
  className?: string;
}

const variantMap = {
  'default': 'flex flex-col',
  'grow': 'flex flex-col flex-1',
  'grow-tight': 'flex flex-col flex-1 min-w-0',
};

export function Section({ className, variant = 'default', ...props }: SectionProps) {
  return (
    <div
      className={cn(
        variantMap[variant],
        className
      )}
      {...props}
    />
  );
}
