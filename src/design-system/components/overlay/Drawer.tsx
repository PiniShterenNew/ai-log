import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/design-system/utils';
import { Heading } from '../typography/Heading';
import { Stack } from '../layout/Stack';

export interface DrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export function Drawer({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  className,
}: DrawerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onOpenChange(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onOpenChange]);

  if (!mounted || !open) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />
      <div
        className={cn(
          'absolute bottom-0 left-0 right-0 rounded-t-3xl bg-white px-5 pb-8 pt-6 shadow-2xl',
          className
        )}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
      >
        <Stack variant="list-tight">
          {(title || description) && (
            <Stack variant="list-tight">
              {title && (
                <Heading level={3} variant="section" className="text-lg font-semibold text-slate-900">
                  {title}
                </Heading>
              )}
              {description && (
                <p className="text-sm text-slate-600">{description}</p>
              )}
            </Stack>
          )}
          <div>{children}</div>
          {footer && <div>{footer}</div>}
        </Stack>
      </div>
    </div>,
    document.body
  );
}
