import { cn } from '@/design-system/utils';

export interface SwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export function Switch({ checked, onCheckedChange, disabled, className }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onCheckedChange(!checked)}
      className={cn(
        'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2',
        checked ? 'bg-slate-900' : 'bg-slate-200',
        disabled && 'cursor-not-allowed opacity-60',
        className
      )}
    >
      <span
        className={cn(
          'inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform',
          checked ? 'translate-x-5' : 'translate-x-1'
        )}
      />
    </button>
  );
}
