import { Outlet } from "react-router-dom";
import Header from "./Header";

import "../api/mockAxios";

function Layout() {
  return (
    <>
      <div id="app-layout" className="container">
        <div id="app-header">
          <Header />
        </div>

        <Outlet />
      </div>
    </>
  );
}

export default Layout;
