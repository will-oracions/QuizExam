import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import Todos from "./modules/todos/pages/Todos";
import Layout from "./components/Layout";
import Error from "./components/Error";
import Assignees from "./modules/assignees/pages/Assignees";
import Users from "./modules/users/pages/Users";
import Courses from "./modules/courses/pages/Courses";
import Quizs from "./modules/exams/quiz/pages/Quizs";
import Quizquestions from "./modules/exams/quizQuestions/pages/Quizquestions";
import Quizanswers from "./modules/exams/quizAnswers/pages/Quizanswers";
import QuizSetup from "./modules/exams/quiz/pages/quizSetup/QuizSetup";
import Test from "./modules/Test";
import QuizSetupQuestions from "./modules/exams/quiz/pages/quizSetup/QuizSetupQuestions";
import QuizSetupInformations from "./modules/exams/quiz/pages/quizSetup/QuizSetupInformations";
import QuizSetupPreview from "./modules/exams/quiz/pages/quizSetup/QuizSetupPreview";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Navigate to="/tasks" />,
      },
      {
        path: "tasks",
        element: <Todos />,
      },
      {
        path: "assignees",
        element: <Assignees />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "quiz",
        element: <Quizs />,
      },
      {
        path: "quiz-questions",
        element: <Quizquestions />,
      },
      {
        path: "quiz-answers",
        element: <Quizanswers />,
      },
      {
        path: "quiz-setup/:id",
        element: <QuizSetup />,
        children: [
          {
            path: "questions",
            element: <QuizSetupQuestions />,
          },
          {
            path: "informations",
            element: <QuizSetupInformations />,
          },
          {
            path: "preview",
            element: <QuizSetupPreview />,
          },
        ],
      },
    ],
  },
  {
    path: "test",
    element: <Test />,
  },
];
const router = createBrowserRouter(routes);
export default router;
