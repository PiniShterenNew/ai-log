import { cn } from '@/design-system/utils';
import { CopyButton } from '../actions/CopyButton';

export interface CodeBlockProps {
  code: string;
  showCopy?: boolean;
  className?: string;
}

export function CodeBlock({ code, showCopy = false, className }: CodeBlockProps) {
  return (
    <div className={cn('relative', className)}>
      <pre className="overflow-x-auto rounded-md bg-slate-900 p-4 text-sm text-slate-50">
        <code>{code}</code>
      </pre>
      {showCopy && (
        <div className="absolute right-2 top-2">
          <CopyButton text={code} />
        </div>
      )}
    </div>
  );
}

