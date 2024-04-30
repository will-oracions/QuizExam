import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "../api/mockAxios";
import Header from "./Header";

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

      <ToastContainer />
    </>
  );
}

export default Layout;
