import { Stack } from '../layout/Stack';
import { Spinner } from './Spinner';
import { Skeleton } from './Skeleton';
import { Text } from '../typography/Text';
import { cn } from '@/design-system/utils';

export interface LoadingStateProps {
  message?: string;
  className?: string;
  variant?: 'spinner' | 'skeleton';
}

export function LoadingState({ message = 'Loading...', className, variant = 'spinner' }: LoadingStateProps) {
  if (variant === 'skeleton') {
    return (
      <Stack
        variant="list"
        className={cn('py-12', className)}
      >
        <Skeleton width="100%" height="200px" />
        <Skeleton width="80%" height="24px" />
        <Skeleton width="60%" height="24px" />
        {message && (
          <Text variant="caption" className="text-center">{message}</Text>
        )}
      </Stack>
    );
  }

  return (
    <Stack
      variant="list"
      className={cn('py-12 items-center', className)}
    >
      <Spinner size="lg" />
      <Text variant="caption">{message}</Text>
    </Stack>
  );
}

