import { EmptyState, LoadingState, Breadcrumbs, PageShell, Stack } from '@/design-system';
import { QuestionDetailsView } from '../components/QuestionDetailsView';
import { useQuestionDetails } from '../hooks/useQuestionDetails';

export function QuestionDetailsPage() {
  const { question, user, notFound } = useQuestionDetails();

  if (notFound) {
    return (
      <PageShell>
        <EmptyState
          title="Question not found"
          description="The question you are looking for does not exist."
        />
      </PageShell>
    );
  }

  if (!question || !user) {
    return (
      <PageShell>
        <LoadingState message="Loading question details..." variant="skeleton" />
      </PageShell>
    );
  }

  return (
    <PageShell variant="padded">
      <Stack variant="list">
        <Breadcrumbs
          items={[
            { label: 'Questions', href: '/questions' },
            { label: `Question ${question.id}` },
          ]}
        />
        <QuestionDetailsView question={question} user={user} />
      </Stack>
    </PageShell>
  );
}
