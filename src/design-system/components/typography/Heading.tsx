import { useRef, useState, useEffect } from 'react';
import { cn } from '@/design-system/utils';
import { Tooltip } from '../overlay/Tooltip';

export interface HeadingProps extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'className'> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * Typography variant - defines size and weight overrides
   */
  variant?: 
    | 'default'     // uses level-based sizing
    | 'section'     // text-lg, semibold (for h2, h3)
    | 'card'        // text-base, semibold (for h3)
    | 'card-truncate' // text-base, semibold, line-clamp-2 (for h3)
    | 'card-title-truncate' // text-base, semibold, single-line truncate with tooltip
  /**
   * Additional className (for design-system internal composition only)
   */
  className?: string;
}

const levelMap = {
  1: 'text-4xl font-bold',
  2: 'text-3xl font-bold',
  3: 'text-2xl font-semibold',
  4: 'text-xl font-semibold',
  5: 'text-lg font-semibold',
  6: 'text-base font-semibold',
};

const variantMap = {
  'default': '',
  'section': 'text-lg font-semibold',
  'card': 'text-base font-semibold',
  'card-truncate': 'text-base font-semibold line-clamp-2',
  'card-title-truncate': 'text-base font-semibold whitespace-nowrap overflow-hidden text-ellipsis',
};

export function Heading({
  level,
  variant = 'default',
  className,
  children,
  ...props
}: HeadingProps) {
  const Component = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  const baseStyles = variant === 'default' ? levelMap[level] : variantMap[variant];
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);
  
  // Check if text is truncated for card-title-truncate variant
  useEffect(() => {
    if (variant === 'card-title-truncate' && headingRef.current) {
      const checkTruncation = () => {
        const element = headingRef.current;
        if (element) {
          setIsTruncated(element.scrollWidth > element.clientWidth);
        }
      };
      
      checkTruncation();
      window.addEventListener('resize', checkTruncation);
      return () => window.removeEventListener('resize', checkTruncation);
    }
  }, [variant, children]);
  
  const headingElement = (
    <Component
      ref={headingRef}
      className={cn(
        baseStyles,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );

  // Automatically wrap with Tooltip only if text is truncated
  if (variant === 'card-title-truncate' && isTruncated) {
    return (
      <Tooltip content={children}>
        {headingElement}
      </Tooltip>
    );
  }
  
  return headingElement;
}
