import { Input } from '../ui/input';
import { Icon } from '../content/Icon';
import { Button } from './Button';
import { cn } from '@/design-system/utils';

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
}

export function SearchInput({
  className,
  onClear,
  value,
  ...props
}: SearchInputProps) {
  return (
    <div className="relative rounded-lg">
      <Icon
        name="MagnifyingGlassIcon"
        variant="sm"
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
      />
      <Input
        className={cn('pl-9 pr-9 rounded-lg', className)}
        value={value}
        {...props}
      />
      {value && onClear && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400 hover:text-slate-600"
        >
          <Icon name="Cross2Icon" variant="sm" />
        </Button>
      )}
    </div>
  );
}

