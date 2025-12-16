import {
  Card as ShadcnCard,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/card';
import { cn } from '@/design-system/utils';

export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  /**
   * Visual variant - defines padding and background
   */
  variant?: 
    | 'default'      // no padding, default background
    | 'content'      // padding-md, default background
    | 'content-lg'   // padding-lg, default background
    | 'panel'        // padding-md, subtle background
    | 'panel-lg'     // padding-lg, subtle background
  /**
   * Whether card has hover effect
   */
  hover?: boolean;
  /**
   * Additional className (for design-system internal composition only)
   */
  className?: string;
}

const variantMap = {
  'default': '',
  'content': 'p-5',
  'content-lg': 'p-6 md:p-8',
  'panel': 'p-5 bg-slate-50',
  'panel-lg': 'p-6 md:p-8 bg-slate-50',
};

export function Card({
  className,
  variant = 'default',
  hover,
  onClick,
  ...props
}: CardProps) {
  const isClickable = !!onClick;
  
  return (
    <ShadcnCard
      className={cn(
        variantMap[variant],
        hover && 'transition-shadow hover:shadow-md',
        isClickable && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      {...props}
    />
  );
}

export { CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
