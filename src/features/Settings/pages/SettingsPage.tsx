import { useState } from 'react';
import { Button, Card, Heading, PageShell, Separator, Stack, Switch, Text } from '@/design-system';
import { ChangePasswordModal } from '@/shared';

export function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);

  return (
    <PageShell variant="wide-padded">
      <Stack variant="section">
        <Stack variant="list-tight">
          <Text variant="label-uppercase">Settings</Text>
          <Heading level={2} variant="section" className="text-2xl font-semibold tracking-tight text-slate-900">
            Workspace preferences
          </Heading>
          <Text variant="body-sm" className="text-slate-600">
            Configure the experience, notifications, and security for your account.
          </Text>
        </Stack>

        <Card variant="content-lg" className="border border-white/60 bg-white/80 shadow-sm">
          <Stack variant="list" className="gap-6">
            <Stack variant="list-tight" className="gap-4">
              <Heading level={3} variant="section" className="text-lg font-semibold text-slate-900">
                Interface
              </Heading>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <Text variant="label" className="text-sm text-slate-700">Dark mode</Text>
                  <Text variant="body-sm" className="text-slate-500">
                    Toggle the interface theme to match your environment.
                  </Text>
                </div>
                <Switch checked={darkMode} onCheckedChange={setDarkMode} />
              </div>
            </Stack>

            <Separator />

            <Stack variant="list-tight" className="gap-4">
              <Heading level={3} variant="section" className="text-lg font-semibold text-slate-900">
                Notifications
              </Heading>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <Text variant="label" className="text-sm text-slate-700">Email notifications</Text>
                  <Text variant="body-sm" className="text-slate-500">
                    Get a daily digest of new question activity.
                  </Text>
                </div>
                <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
              </div>
            </Stack>

            <Separator />

            <Stack variant="list-tight" className="gap-4">
              <Heading level={3} variant="section" className="text-lg font-semibold text-slate-900">
                Security
              </Heading>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <Text variant="label" className="text-sm text-slate-700">Change password</Text>
                  <Text variant="body-sm" className="text-slate-500">
                    Update your password to keep your account secure.
                  </Text>
                </div>
                <Button variant="outline" onClick={() => setIsPasswordOpen(true)} className="w-fit">
                  Change password
                </Button>
              </div>
            </Stack>

            <Separator />

            <Stack variant="list-tight" className="gap-4">
              <Heading level={3} variant="section" className="text-lg font-semibold text-slate-900">
                System
              </Heading>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <Text variant="label" className="text-sm text-slate-700">App version</Text>
                  <Text variant="body-sm" className="text-slate-500">
                    Stable release channel
                  </Text>
                </div>
                <Text variant="body-sm" className="font-medium text-slate-900">
                  v1.2.0
                </Text>
              </div>
            </Stack>
          </Stack>
        </Card>
      </Stack>

      <ChangePasswordModal open={isPasswordOpen} onOpenChange={setIsPasswordOpen} />
    </PageShell>
  );
}
