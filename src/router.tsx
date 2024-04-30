import { createBrowserRouter, RouteObject } from "react-router-dom";
import Todos from "./modules/todos/pages/Todos";
import Layout from "./components/Layout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "tasks",
        element: <Todos />,
      },
    ],
  },
];
const router = createBrowserRouter(routes);
export default router;
