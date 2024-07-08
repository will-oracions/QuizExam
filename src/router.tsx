import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import AboutUs from "./modules/lab/pages/AboutUs";
import DefaultLayout from "@crema/components/AppLayout/DefaultLayout";
import routesConfig from "./routesConfig";
import Error404 from "./components/errorPages/Error404";
import DocumentUpload from "./modules/documents/pages/DocumentUpload";

const routes: RouteObject[] = [
  {
    path: "",
    element: <Navigate to="/dashboard" />,
  },
  {
    path: "/dashboard",
    element: <DefaultLayout routesConfig={routesConfig} />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <AboutUs />,
      },
      {
        path: "documents",
        children: [
          {
            path: "upload",
            element: <DocumentUpload />,
          },
        ],
      },
    ],
  },
];
const router = createBrowserRouter(routes);
export default router;
