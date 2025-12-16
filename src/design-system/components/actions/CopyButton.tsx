import { useState } from 'react';
import { Button } from '../controls/Button';
import { Icon } from '../content/Icon';
import { Tooltip } from '../overlay/Tooltip';
import { cn } from '@/design-system/utils';

export interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <Tooltip content={copied ? 'Copied!' : 'Copy to clipboard'}>
      <Button
        variant="outline"
        size="icon"
        onClick={handleCopy}
        className={cn('h-8 w-8', className)}
      >
        {copied ? (
          <Icon name="CheckIcon" variant="sm" className="text-green-600" />
        ) : (
          <Icon name="CopyOutlineIcon" variant="sm" />
        )}
      </Button>
    </Tooltip>
  );
}

