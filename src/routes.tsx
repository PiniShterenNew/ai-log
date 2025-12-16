import { createBrowserRouter } from "react-router-dom";

import { QuestionsListPage, QuestionDetailsPage } from "@/features";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <QuestionsListPage />,
    },
    {
        path: "/questions",
        element: <QuestionsListPage />,
    },
    {
        path: "/questions/:id",
        element: <QuestionDetailsPage />,
    },
]);