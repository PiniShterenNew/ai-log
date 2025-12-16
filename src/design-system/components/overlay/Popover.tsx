import { PopoverContent as PrimitivePopoverContent } from '../ui/popover';
import { cn } from '@/design-system/utils';
import type { ComponentPropsWithoutRef } from 'react';

export interface PopoverContentProps
  extends Omit<ComponentPropsWithoutRef<typeof PrimitivePopoverContent>, 'className'> {
  /**
   * Layout variant - defines width and padding
   */
  variant?: 
    | 'default'      // w-72, p-4
    | 'sm'           // w-[200px], p-1
    | 'responsive'   // w-full md:min-w-[400px] md:w-auto, p-4
  /**
   * Additional className (for design-system internal composition only)
   */
  className?: string;
}

const variantMap = {
  'default': 'w-72 p-4',
  'sm': 'w-[200px] p-1',
  'responsive': 'w-full md:min-w-[400px] md:w-auto p-4',
};

export function PopoverContent({
  variant = 'default',
  className,
  ...props
}: PopoverContentProps) {
  return (
    <PrimitivePopoverContent
      className={cn(variantMap[variant], className)}
      {...props}
    />
  );
}
