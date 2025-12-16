import { cn } from '@/design-system/utils';

export interface LinkTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Visual variant - defines color and size
   */
  variant?: 
    | 'default'      // text-slate-900, text-sm
    | 'primary'      // text-blue-600, text-sm
    | 'primary-md'   // text-blue-600, text-base
    | 'primary-lg'   // text-blue-600, text-lg
    | 'secondary'    // text-slate-600, text-sm
  /**
   * Additional className (for design-system internal composition only)
   */
  className?: string;
}

const variantMap = {
  'default': 'inline-flex items-center gap-1 self-start cursor-pointer transition-colors text-sm text-slate-900 hover:text-slate-700',
  'primary': 'inline-flex items-center gap-1 self-start cursor-pointer transition-colors text-sm text-blue-600 hover:text-blue-700',
  'primary-md': 'inline-flex items-center gap-1 self-start cursor-pointer transition-colors text-base text-blue-600 hover:text-blue-700',
  'primary-lg': 'inline-flex items-center gap-1 self-start cursor-pointer transition-colors text-lg text-blue-600 hover:text-blue-700',
  'secondary': 'inline-flex items-center gap-1 self-start cursor-pointer transition-colors text-sm text-slate-600 hover:text-slate-800',
};

export function LinkText({
  variant = 'primary',
  className,
  ...props
}: LinkTextProps) {
  return (
    <span
      className={cn(
        variantMap[variant],
        className
      )}
      {...props}
    />
  );
}
