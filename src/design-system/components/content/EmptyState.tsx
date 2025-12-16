import { Stack } from '../layout/Stack';
import { Heading } from '../typography/Heading';
import { Text } from '../typography/Text';
import { cn } from '@/design-system/utils';

export interface EmptyStateProps {
  title: string;
  description?: string;
  className?: string;
}

export function EmptyState({ title, description, className }: EmptyStateProps) {
  return (
    <Stack
      variant="list-tight"
      className={cn('py-12 text-center items-center', className)}
    >
      <Heading level={4} variant="default">
        {title}
      </Heading>
      {description && (
        <Text variant="caption" className="max-w-md">
          {description}
        </Text>
      )}
    </Stack>
  );
}

