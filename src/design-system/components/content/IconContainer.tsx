import { cn } from '@/design-system/utils';
import { Icon, type IconProps } from './Icon';

export interface IconContainerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * Icon name
   */
  icon: IconProps['name'];
  /**
   * Icon variant
   */
  iconVariant?: IconProps['variant'];
  /**
   * Container size
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Background color variant
   */
  variant?: 'default' | 'subtle' | 'primary';
}

const sizeMap = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
};

const variantMap = {
  default: 'bg-slate-200',
  subtle: 'bg-slate-100',
  primary: 'bg-blue-100',
};

export function IconContainer({
  icon,
  iconVariant = 'sm',
  size = 'md',
  variant = 'default',
  className,
  ...props
}: IconContainerProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-full',
        sizeMap[size],
        variantMap[variant],
        className
      )}
      {...props}
    >
      <Icon name={icon} variant={iconVariant} className="text-slate-600" />
    </div>
  );
}
