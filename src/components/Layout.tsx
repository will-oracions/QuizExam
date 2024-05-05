import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "../api/mockAxios";
import Header from "./Header";
import { Close, Menu } from "@mui/icons-material";
import React from "react";

const sidebarId = "#app-sidebar";
const OPEN_CLASS = "open";

export interface IOutletContext {
  closeSidebar: () => void;
}

function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);
  const location = useLocation();

  React.useEffect(() => {
    const mobileSidebare = document.querySelector(sidebarId);
    if (mobileSidebare) {
      setMobileMenuOpen(false);
    }
  }, [location]);

  const toggleMobileSidebarMenu = () => {
    const mobileSidebare = document.querySelector(sidebarId);
    if (mobileSidebare) {
      setMobileMenuOpen(
        !Array.from(mobileSidebare.classList).includes(OPEN_CLASS)
      );
      mobileSidebare.classList.toggle(OPEN_CLASS);
    }
  };

  const closeSidebar = () => {
    const mobileSidebare = document.querySelector(sidebarId);
    if (mobileSidebare) {
      mobileSidebare.classList.remove(OPEN_CLASS);
      setMobileMenuOpen(false);
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
          <Outlet context={{ closeSidebar }} />
        </Box>
      </div>

      <ToastContainer />
    </>
  );
}

export default Layout;
