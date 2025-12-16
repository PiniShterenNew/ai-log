import { cn } from '@/design-system/utils';

export interface PageShellProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Layout variant - defines max-width and padding
   */
  variant?: 
    | 'default'      // max-w-xl, no padding
    | 'padded'       // max-w-xl, padding-md
    | 'padded-lg'    // max-w-xl, padding-lg
    | 'wide'          // max-w-2xl, no padding
    | 'wide-padded'   // max-w-2xl, padding-md
    | 'full'          // max-w-full, no padding
  /**
   * Additional className (for design-system internal composition only)
   */
  className?: string;
}

const variantMap = {
  'default': 'mx-auto w-full max-w-screen-xl',
  'padded': 'mx-auto w-full max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8',
  'padded-lg': 'mx-auto w-full max-w-screen-xl px-6 py-6 sm:px-8 lg:px-12',
  'wide': 'mx-auto w-full max-w-screen-2xl',
  'wide-padded': 'mx-auto w-full max-w-screen-2xl px-4 py-4 sm:px-6 lg:px-8',
  'full': 'mx-auto w-full max-w-full',
};

export function PageShell({
  variant = 'default',
  className,
  ...props
}: PageShellProps) {
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
