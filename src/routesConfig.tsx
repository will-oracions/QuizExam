import { RoutePermittedRole } from "@crema/constants/AppEnums";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";

import { RouterConfigData } from "@crema/types/models/Apps";

const routesConfig: RouterConfigData[] = [
  {
    id: "home",
    title: "Home",
    messageId: "sidebar.home",
    icon: <HomeIcon />,
    type: "item",
    url: "/",
    exact: true,
  },
  {
    id: "dashboard",
    title: "Dashboard",
    messageId: "sidebar.dashboard",
    icon: <DashboardIcon />,
    type: "item",
    url: "/dashboard",
    exact: true,
  },
  {
    id: "settings",
    title: "Settings",
    messageId: "sidebar.settings",
    icon: <SettingsIcon />,
    type: "item",
    url: "/settings",
    exact: true,
  },
  {
    id: "profile",
    title: "Profile",
    messageId: "sidebar.profile",
    icon: <AccountCircleIcon />,
    type: "group",
    children: [
      {
        id: "view-profile",
        title: "View Profile",
        messageId: "sidebar.viewProfile",
        icon: <AccountCircleIcon />,
        type: "item",
        url: "/profile/view",
        exact: true,
        permittedRole: RoutePermittedRole.User,
      },
      {
        id: "edit-profile",
        title: "Edit Profile",
        messageId: "sidebar.editProfile",
        icon: <AccountCircleIcon />,
        type: "item",
        url: "/profile/edit",
        exact: true,
        permittedRole: [RoutePermittedRole.Admin, RoutePermittedRole.User],
      },
    ],
  },
];

export default routesConfig;
