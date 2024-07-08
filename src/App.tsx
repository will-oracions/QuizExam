import { RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import AppThemeProvider from "@crema/context/AppThemeProvider";

import router from "./router";

import "./styles/index.css";

function App() {
  return (
    // <BrowserRouter>
    <AppThemeProvider>
      <>
        <CssBaseline />
        <RouterProvider router={router} />
      </>
    </AppThemeProvider>
    // </BrowserRouter>
  );
}

export default App;
