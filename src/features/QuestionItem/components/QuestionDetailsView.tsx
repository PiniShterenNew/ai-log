import { Card, CodeBlock, Badge, Heading, Text, Separator, Stack, BackButton, Avatar, Icon, IconContainer, CopyButton, Box } from '@/design-system';
import { formatDuration, formatUtcToLocal } from '@/shared';
import type { QuestionDetailsViewProps } from '../types/QuestionDetailsView.type';

export function QuestionDetailsView({
  question,
  user,
}: QuestionDetailsViewProps) {
  return (
    <Stack variant="section">
      <BackButton to="/questions" preserveState={true} />

      <Card variant="panel-lg">
        <Stack variant="list-loose">
          {/* Question Section */}
          <Stack variant="card">
            <Stack variant="toolbar">
              <IconContainer icon="QuestionMarkCircledIcon" size="md" variant="default" />
              <Heading level={2} variant="section">Question</Heading>
            </Stack>
            <Text variant="body-lg">
              {question.questionText}
            </Text>

            {/* Asked By Section */}
            <Stack variant="form">
              <Text variant="label-uppercase">
                ASKED BY
              </Text>
              <Stack variant="header-center">
              <Stack variant="card-tight">
                <Stack variant="toolbar-loose">
                  <Avatar name={user.displayName} size="md" />
                  <Stack variant="list-dense">
                    <Text variant="heading">{user.displayName}</Text>
                    <Text variant="caption-secondary">
                      {formatUtcToLocal(question.askedAtUtc)}
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
              <Badge variant="warning">
                <Icon name="TimerIcon" variant="warning" />
                <Text variant="label-sm">{formatDuration(question.aiResponse.durationMs)}</Text>
              </Badge>
              </Stack>
            </Stack>
          </Stack>

          <Separator />

          {/* AI Response Section */}
          <Stack variant="card">
            <Stack variant="toolbar">
              <Icon name="CodeIcon" variant="default" />
              <Heading level={3} variant="section">AI Response</Heading>
            </Stack>
            <Box variant="relative">
              <CodeBlock code={question.aiResponse.text} showCopy={false} />
              <Box variant="absolute-top-right">
                <CopyButton text={question.aiResponse.text} />
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
}
