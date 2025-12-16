import { Link } from 'react-router-dom';
import { Stack } from '../layout/Stack';
import { Text } from '../typography/Text';
import { Icon } from '../content/Icon';
import { cn } from '@/design-system/utils';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <Stack variant="toolbar" className={cn(className)}>
      {items.map((item, index) => (
        <Stack key={index} variant="toolbar">
          {index > 0 && (
            <Icon name="ChevronDownIcon" variant="xs" className="-rotate-90 text-slate-400" />
          )}
          {item.href ? (
            <Link
              to={item.href}
              className={cn(
                'text-sm text-slate-500 hover:text-slate-900 transition-colors',
                index === items.length - 1 && 'font-medium text-slate-900'
              )}
            >
              {item.label}
            </Link>
          ) : (
            <Text
              className={cn(
                'text-sm',
                index === items.length - 1
                  ? 'font-medium text-slate-900'
                  : 'text-slate-500'
              )}
            >
              {item.label}
            </Text>
          )}
        </Stack>
      ))}
    </Stack>
  );
}

