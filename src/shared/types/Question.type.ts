import type { AiResponse } from "./AiResponse.type";

export interface Question {
    id: string;
    userId: string;
    askedAtUtc: string; // ISO string
    questionText: string;
    aiResponse: AiResponse;
}
