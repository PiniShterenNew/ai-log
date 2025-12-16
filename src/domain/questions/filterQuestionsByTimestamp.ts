import type { Question } from "@/shared";

interface TimestampRange {
    fromUtc?: string;
    toUtc?: string;
}

export function filterQuestionsByTimestamp(
    questions: Question[],
    range: TimestampRange): Question[] {
    const { fromUtc, toUtc } = range;
        
    return questions.filter(question => {
        const time = Date.parse(question.askedAtUtc);

        // If fromUtc is set and the question is before fromUtc, return false
        if (fromUtc && time < Date.parse(fromUtc)) return false;

        // If toUtc is set and the question is after toUtc, return false
        if (toUtc && time > Date.parse(toUtc)) return false;

        // If both fromUtc and toUtc are set and the question is between fromUtc and toUtc, return true
        return true;
    });
}