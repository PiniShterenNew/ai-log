import { cn } from '@/design-system/utils';

export interface BoxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  /**
   * Position variant - defines positioning behavior
   */
  variant?: 
    | 'default'      // static positioning
    | 'relative'     // relative positioning
    | 'absolute-top-right'  // absolute, top-2, right-2
    | 'absolute-top-left'   // absolute, top-2, left-2
    | 'absolute-bottom-right' // absolute, bottom-2, right-2
    | 'absolute-bottom-left'  // absolute, bottom-2, left-2
  /**
   * Additional className (for design-system internal composition only)
   */
  className?: string;
}

const variantMap = {
  'default': '',
  'relative': 'relative',
  'absolute-top-right': 'absolute top-2 right-2',
  'absolute-top-left': 'absolute top-2 left-2',
  'absolute-bottom-right': 'absolute bottom-2 right-2',
  'absolute-bottom-left': 'absolute bottom-2 left-2',
};

export function Box({
  variant = 'default',
  className,
  ...props
}: BoxProps) {
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
