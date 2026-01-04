import { useEffect, useState } from 'react';
import { Button, Modal, Stack, Text } from '@/design-system';
import { Input } from '@/design-system/components/ui/input';

export interface ChangePasswordModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ChangePasswordModal({ open, onOpenChange }: ChangePasswordModalProps) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [nextPassword, setNextPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const hasMismatch = confirmPassword.length > 0 && nextPassword !== confirmPassword;
  const isSaveDisabled = !currentPassword || !nextPassword || !confirmPassword || hasMismatch;

  useEffect(() => {
    if (!open) {
      setCurrentPassword('');
      setNextPassword('');
      setConfirmPassword('');
    }
  }, [open]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onOpenChange(false);
  };

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title="Change password"
      description="Choose a strong password to keep your workspace secure."
      footer={(
        <Stack variant="toolbar" className="justify-end gap-3">
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button type="submit" form="change-password-form" disabled={isSaveDisabled}>
            Save password
          </Button>
        </Stack>
      )}
    >
      <form id="change-password-form" className="space-y-4" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Current password
          <Input
            type="password"
            value={currentPassword}
            onChange={(event) => setCurrentPassword(event.target.value)}
            required
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          New password
          <Input
            type="password"
            value={nextPassword}
            onChange={(event) => setNextPassword(event.target.value)}
            required
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Confirm new password
          <Input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        </label>
        {hasMismatch && (
          <Text variant="body-sm" className="text-rose-600">
            Passwords do not match.
          </Text>
        )}
      </form>
    </Modal>
  );
}
