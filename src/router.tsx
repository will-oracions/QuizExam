import { createBrowserRouter, RouteObject } from "react-router-dom";
import AboutUs from "./modules/lab/pages/AboutUs";
import DefaultLayout from "@crema/components/AppLayout/DefaultLayout";
import routesConfig from "./routesConfig";
import Error404 from "./components/errorPages/Error404";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <DefaultLayout routesConfig={routesConfig} />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <AboutUs />,
      },
    ],
  },
];
const router = createBrowserRouter(routes);
export default router;
