import { Button as ShadcnButton, buttonVariants } from '../ui/button';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/design-system/utils';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  /**
   * Layout variant - defines width and content alignment
   */
  layout?: 
    | 'default'      // default width, centered content
    | 'full-start'   // full width, start-aligned content
    | 'full-center'  // full width, centered content
    | 'full-end'     // full width, end-aligned content
  /**
   * State variant - defines visual state
   */
  state?: 
    | 'default'      // default state
    | 'active'       // active/selected state (dark background)
    | 'filtered'     // filtered state (for outline variant, adds border and background)
  /**
   * Additional className (for design-system internal composition only)
   */
  className?: string;
}

const layoutMap = {
  'default': '',
  'full-start': 'w-full justify-start',
  'full-center': 'w-full justify-center',
  'full-end': 'w-full justify-end',
};

const stateMap = {
  'default': '',
  'active': 'bg-slate-900 text-white hover:bg-slate-800',
  'filtered': 'border-slate-900 bg-slate-50',
};

export function Button({
  className,
  variant,
  size,
  layout = 'default',
  state = 'default',
  ...props
}: ButtonProps) {
  const stateStyles = state === 'filtered' && variant === 'outline' 
    ? stateMap['filtered'] 
    : stateMap[state];
  
  return (
    <ShadcnButton
      className={cn(
        'rounded-lg h-8 gap-2',
        layoutMap[layout],
        stateStyles,
        className
      )}
      variant={variant}
      size={size}
      {...props}
    />
  );
}
