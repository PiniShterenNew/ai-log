import { useMemo, useState } from 'react';
import { Avatar, Button, Card, Heading, PageShell, Stack, Text } from '@/design-system';
import { Input } from '@/design-system/components/ui/input';
import { ChangePasswordModal } from '@/shared';

export function ProfilePage() {
  const [user, setUser] = useState({
    name: 'Ariel Cohen',
    email: 'ariel.cohen@ailog.app',
    joinedAt: new Date('2024-02-12'),
  });
  const [draft, setDraft] = useState({ name: user.name, email: user.email });
  const [isEditing, setIsEditing] = useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);

  const joinedAtLabel = useMemo(() => {
    return user.joinedAt.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }, [user.joinedAt]);

  const handleEdit = () => {
    setDraft({ name: user.name, email: user.email });
    setIsEditing(true);
  };

  const handleSave = () => {
    setUser((prev) => ({
      ...prev,
      name: draft.name,
      email: draft.email,
    }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraft({ name: user.name, email: user.email });
    setIsEditing(false);
  };

  return (
    <PageShell variant="wide-padded">
      <Stack variant="section">
        <Stack variant="list-tight">
          <Text variant="label-uppercase">Profile</Text>
          <Heading level={2} variant="section" className="text-2xl font-semibold tracking-tight text-slate-900">
            Personal profile
          </Heading>
          <Text variant="body-sm" className="text-slate-600">
            Manage your personal details, login email, and security preferences in one place.
          </Text>
        </Stack>

        <Card variant="content-lg" className="border border-white/60 bg-white/80 shadow-sm">
          <Stack variant="list-tight" className="gap-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <Avatar name={user.name} size="lg" />
                <div>
                  <Heading level={3} variant="section" className="text-lg font-semibold text-slate-900">
                    {user.name}
                  </Heading>
                  <Text variant="body-sm" className="text-slate-600">
                    {user.email}
                  </Text>
                </div>
              </div>
              {!isEditing && (
                <Button variant="outline" onClick={handleEdit}>
                  Edit profile
                </Button>
              )}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Text variant="label" className="text-sm text-slate-500">Full name</Text>
                {isEditing ? (
                  <Input
                    value={draft.name}
                    onChange={(event) => setDraft((prev) => ({ ...prev, name: event.target.value }))}
                  />
                ) : (
                  <Text variant="body" className="text-slate-900">{user.name}</Text>
                )}
              </div>
              <div className="space-y-2">
                <Text variant="label" className="text-sm text-slate-500">Email address</Text>
                {isEditing ? (
                  <Input
                    type="email"
                    value={draft.email}
                    onChange={(event) => setDraft((prev) => ({ ...prev, email: event.target.value }))}
                  />
                ) : (
                  <Text variant="body" className="text-slate-900">{user.email}</Text>
                )}
              </div>
              <div className="space-y-2">
                <Text variant="label" className="text-sm text-slate-500">Joined</Text>
                <Text variant="body" className="text-slate-900">{joinedAtLabel}</Text>
              </div>
            </div>

            {isEditing && (
              <Stack variant="toolbar" className="justify-end gap-3">
                <Button variant="ghost" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button onClick={handleSave}>
                  Save changes
                </Button>
              </Stack>
            )}
          </Stack>
        </Card>

        <Card variant="content-lg" className="border border-white/60 bg-white/80 shadow-sm">
          <Stack variant="list-tight" className="gap-4">
            <Heading level={3} variant="section" className="text-lg font-semibold text-slate-900">
              Security
            </Heading>
            <Text variant="body-sm" className="text-slate-600">
              Update your password regularly to keep your account protected.
            </Text>
            <Button variant="outline" onClick={() => setIsPasswordOpen(true)} className="w-fit">
              Change password
            </Button>
          </Stack>
        </Card>
      </Stack>

      <ChangePasswordModal open={isPasswordOpen} onOpenChange={setIsPasswordOpen} />
    </PageShell>
  );
}
