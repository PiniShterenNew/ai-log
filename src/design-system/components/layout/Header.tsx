import { Stack } from './Stack';
import { Heading } from '../typography/Heading';
import { Avatar } from '../content/Avatar';
import { Button } from '../controls/Button';
import { Icon } from '../content/Icon';
import { cn } from '@/design-system/utils';

export interface HeaderProps {
  title: string;
  user?: {
    name: string;
  };
  onSettingsClick?: () => void;
  className?: string;
}

export function Header({ title, user, onSettingsClick, className }: HeaderProps) {
  return (
    <Stack
      variant="header-center"
      className={cn('w-full bg-white border-b border-slate-200 px-4 py-4 sm:px-6 lg:px-8', className)}
    >
      <Heading level={1} variant="default">
        {title}
      </Heading>
      
      <Stack variant="toolbar-loose">
        {user && (
          <Avatar name={user.name} size="sm" />
        )}
        {onSettingsClick && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onSettingsClick}
            className="h-8 w-8"
          >
            <Icon name="Cog6ToothIcon" variant="default" />
          </Button>
        )}
      </Stack>
    </Stack>
  );
}

