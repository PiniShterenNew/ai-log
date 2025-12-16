import type { QuestionsListProps } from '@/features';
import { Card, Heading, Text, Stack, Icon, Avatar, EmptyState, LinkText, ScrollableList } from '@/design-system';
import { formatUtcToLocal } from '@/shared';

export function QuestionsList({ items, onClick, hasActiveFilters = false }: QuestionsListProps) {
  if (items.length === 0) {
    return (
      <EmptyState
        title={hasActiveFilters ? "No results found" : "No history yet"}
        description={hasActiveFilters 
          ? "No questions match your current filters. Try adjusting your search or date range."
          : "No questions have been asked yet."}
      />
    );
  }

  return (
    <ScrollableList
      items={items}
      renderItem={(item) => (
        <Card
          variant="content"
          hover
          onClick={() => onClick(item.id)}
        >
          <Stack variant="card">
            {/* Top section: User info and timestamp */}
            <Stack variant="header">
              <Stack variant="toolbar">
                <Avatar name={item.userDisplayName} size="sm" />
                <Text variant="label">
                  {item.userDisplayName}
                </Text>
              </Stack>
              <Text variant="caption">
                {formatUtcToLocal(item.askedAtUtc)}
              </Text>
            </Stack>

            {/* Middle section: Question text */}
            <Heading level={3} variant="card-title-truncate">
              {item.questionPreview}
            </Heading>

            {/* Bottom section: View AI Response link */}
            <LinkText variant="primary">
              View AI Response
              <Icon name="ArrowTopRightOnSquareIcon" variant="shrink" />
            </LinkText>
          </Stack>
        </Card>
      )}
      variant="full"
      spacing="comfortable"
      columns={2}
      estimatedItemSize={140}
    />
  );
}