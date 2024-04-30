import { Outlet } from "react-router-dom";
import Header from "./Header";

import "../api/mockAxios";
import { Box } from "@mui/material";

function Layout() {
  return (
    <>
      <div id="app-layout" className="container">
        <div id="app-header">
          <Header />
        </div>

        <Box className="app-main-content">
          <Outlet />
        </Box>
      </div>
    </>
  );
}

export default Layout;
