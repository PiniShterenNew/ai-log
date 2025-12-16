import { cn } from '@/design-system/utils';

export interface StackProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  /**
   * Layout variant - defines direction and common spacing patterns
   */
  variant?: 
    | 'list'           // column, gap-4, for lists
    | 'list-tight'     // column, gap-2, for compact lists
    | 'list-loose'     // column, gap-6, for spacious lists
    | 'list-dense'     // column, gap-1, for dropdowns
    | 'toolbar'        // row, gap-2, align-center, for toolbars
    | 'toolbar-loose'  // row, gap-4, align-center, for spacious toolbars
    | 'header'         // row, gap-3, justify-between, align-start, for headers
    | 'header-center'  // row, gap-3, justify-between, align-center, for centered headers
    | 'form'           // column, gap-3, for forms
    | 'card'           // column, gap-4, for card content
    | 'card-tight'     // column, gap-2, for compact card content
    | 'section'        // column, gap-4, for page sections
    | 'centered'       // row, gap-2, justify-center, align-center, for centered content
  /**
   * Additional className (for design-system internal composition only)
   */
  className?: string;
}

const variantMap = {
  'list': 'flex flex-col gap-4',
  'list-tight': 'flex flex-col gap-2',
  'list-loose': 'flex flex-col gap-6',
  'list-dense': 'flex flex-col gap-1',
  'toolbar': 'flex flex-row gap-2 items-center',
  'toolbar-loose': 'flex flex-row gap-4 items-center',
  'header': 'flex flex-row gap-3 justify-between items-start',
  'header-center': 'flex flex-row gap-3 justify-between items-center',
  'form': 'flex flex-col gap-3',
  'card': 'flex flex-col gap-4',
  'card-tight': 'flex flex-col gap-2',
  'section': 'flex flex-col gap-4',
  'centered': 'flex flex-row gap-2 justify-center items-center',
};

export function Stack({
  variant = 'list',
  className,
  ...props
}: StackProps) {
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
