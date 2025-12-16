import { cn } from '@/design-system/utils';

export interface TextProps extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'className'> {
  /**
   * Typography variant - defines size, weight, line-height, and other typographic properties
   */
  variant?: 
    | 'body'              // text-base, normal, default color
    | 'body-sm'           // text-sm, normal, default color
    | 'body-lg'           // text-lg, bold, relaxed line-height, default color
    | 'body-lg-tight'     // text-lg, bold, tight line-height, default color
    | 'label'             // text-sm, medium, default color
    | 'label-sm'          // text-xs, medium, tight line-height, default color
    | 'label-uppercase'   // text-xs, medium, uppercase, wide tracking, muted color
    | 'caption'           // text-xs, muted color
    | 'caption-muted'     // text-xs, muted color (explicit)
    | 'caption-secondary' // text-xs, secondary color, tight line-height
    | 'heading'           // text-md, medium, tight line-height, default color
  /**
   * Additional className (for design-system internal composition only)
   */
  className?: string;
}

const variantMap = {
  'body': 'text-base text-slate-900',
  'body-sm': 'text-sm text-slate-900',
  'body-lg': 'text-lg font-bold text-slate-900 leading-relaxed',
  'body-lg-tight': 'text-lg font-bold text-slate-900 leading-tight',
  'label': 'text-sm font-medium text-slate-900',
  'label-sm': 'text-xs font-medium text-slate-900 leading-tight',
  'label-uppercase': 'text-xs font-medium text-slate-500 uppercase tracking-wide',
  'caption': 'text-xs text-slate-500',
  'caption-muted': 'text-xs text-slate-500',
  'caption-secondary': 'text-sm text-slate-600 leading-tight',
  'heading': 'text-base font-medium text-slate-900 leading-tight',
};

export function Text({
  className,
  variant = 'body',
  ...props
}: TextProps) {
  return (
    <p
      className={cn(
        variantMap[variant],
        className
      )}
      {...props}
    />
  );
}
