import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

import "./index.scss";

import "./i18n/i18n.ts";
import router from "./router.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 0,
      staleTime: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <ThemeProvider theme={theme}> */}
      {/* <App /> */}
      {/* <DndProvider backend={HTML5Backend}> */}
      <RouterProvider router={router} />
      {/* </DndProvider> */}
    </QueryClientProvider>
  </React.StrictMode>
);
