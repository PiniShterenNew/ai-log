import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { questionsRepository } from "@/data/repositories/questionsRepository";
import { usersRepository } from "@/data/repositories/usersRepository";

import type { UseQuestionDetailsReturn } from "../types/useQuestionDetails.type";


export function useQuestionDetails(): UseQuestionDetailsReturn {
    const { id } = useParams<{ id: string }>();

    const result = useMemo<UseQuestionDetailsReturn>(() => {
        if (!id) {
            return {
                question: null,
                user: null,
                notFound: false,
            }
        }

        const question = questionsRepository.getById(id);

        if (!question) {
            return {
                question: null,
                user: null,
                notFound: true,
            }
        }

        const user = usersRepository.getById(question.userId);

        return {
            question,
            user,
            notFound: false,
        }
    }, [id]);

    return result;
}