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
      className={cn(
        'sticky top-0 z-30 w-full border-b border-slate-200/70 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-xl sm:px-6 sm:py-4 lg:px-8',
        'flex-col items-start gap-3 sm:flex-row sm:items-center',
        className
      )}
    >
      <Heading level={1} variant="default" className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
        {title}
      </Heading>
      
      <Stack variant="toolbar-loose" className="w-full justify-between sm:w-auto sm:justify-start">
        {user && (
          <Avatar name={user.name} size="sm" />
        )}
        {onSettingsClick && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onSettingsClick}
            className="h-8 w-8"
            aria-label="Open settings"
          >
            <Icon name="Cog6ToothIcon" variant="default" />
          </Button>
        )}
      </Stack>
    </Stack>
  );
}
