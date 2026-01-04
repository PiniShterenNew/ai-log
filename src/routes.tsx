import { createBrowserRouter } from "react-router-dom";

import { QuestionsListPage, QuestionDetailsPage, ProfilePage, SettingsPage } from "@/features";

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
    {
        path: "/profile",
        element: <ProfilePage />,
    },
    {
        path: "/settings",
        element: <SettingsPage />,
    },
]);
