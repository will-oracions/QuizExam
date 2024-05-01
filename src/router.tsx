import { createBrowserRouter, RouteObject } from "react-router-dom";
import Todos from "./modules/todos/pages/Todos";
import Layout from "./components/Layout";
import Error from "./components/Error";
import Assignees from "./modules/assignees/pages/Assignees";

import TestTodos from "./modules/todoss/pages/Todos";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "tasks",
        element: <Todos />,
      },
      {
        path: "assignees",
        element: <Assignees />,
      },
      {
        path: "test",
        element: <TestTodos />,
      },
    ],
  },
];
const router = createBrowserRouter(routes);
export default router;
