import { BrowserRouter } from "react-router-dom";
import DefaultLayout from "./@crema/components/AppLayout/DefaultLayout";
import { CssBaseline } from "@mui/material";
import AppThemeProvider from "@crema/context/AppThemeProvider";

// import "./styles/index.css";

function App() {
  return (
    <BrowserRouter>
      <AppThemeProvider>
        <>
          <CssBaseline />
          <DefaultLayout />;
        </>
      </AppThemeProvider>
    </BrowserRouter>
  );
}

export default App;
