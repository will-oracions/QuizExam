import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "../api/mockAxios";
import Header from "./Header";
import { Close, Menu } from "@mui/icons-material";
import React from "react";

function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);

  const toggleMobileSidebarMenu = () => {
    const OPEN_CLASS = "open";
    const mobileSidebare = document.querySelector("#app-sidebar");
    if (mobileSidebare) {
      setMobileMenuOpen(
        !Array.from(mobileSidebare.classList).includes(OPEN_CLASS)
      );
      mobileSidebare.classList.toggle(OPEN_CLASS);
    }
  };

  const displayMobileMenuIcon = () => {
    if (!mobileMenuOpen) {
      return (
        <span className="app-btn-open-menu" onClick={toggleMobileSidebarMenu}>
          <Menu />
        </span>
      );
    }
    return (
      <span className="app-btn-close-menu" onClick={toggleMobileSidebarMenu}>
        <Close />
      </span>
    );
  };

  return (
    <>
      <div id="app-layout" className="container">
        <div id="app-header">
          <Header />
        </div>

        <div id="app-sidebar-menu">{displayMobileMenuIcon()}</div>

        <Box className="app-main-content">
          <Outlet />
        </Box>
      </div>

      <ToastContainer />
    </>
  );
}

export default Layout;
