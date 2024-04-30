import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import React from "react";

const menu = [
  {
    label: "Tasks",
    url: "/tasks",
  },
  {
    label: "Assignees",
    url: "assignees",
  },
];

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  menuButton: {
    // [theme.breakpoints.up("md")]: {
    //   display: "none",
    // },
  },
}));

const Header = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const displayMobileMenu = () => {
    return menu.map((menuItem, index) => (
      <ListItem key={index} onClick={toggleDrawer}>
        <ListItemText primary={menuItem.label} />
      </ListItem>
    ));
  };

  const displayMenu = () => {
    return menu.map((menuItem, index) => (
      <Button key={index} color="inherit">
        {menuItem.label}
      </Button>
    ));
  };

  return (
    <>
      <AppBar position="static" style={{ height: "100%" }}>
        <Toolbar>
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center">
              <Box marginRight={5}>
                <Typography variant="h6" className={classes.title}>
                  WizeTodoList
                </Typography>
                <Typography fontSize={10}>{t("appDescription")}</Typography>
              </Box>

              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
                className={classes.menuButton}>
                <MenuIcon />
              </IconButton>
              <div className={classes.menuButton}>
                <Drawer
                  anchor="right"
                  open={isDrawerOpen}
                  onClose={toggleDrawer}>
                  <List>
                    {displayMobileMenu()}
                    {/* <ListItem onClick={toggleDrawer}>
                      <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem onClick={toggleDrawer}>
                      <ListItemText primary="About" />
                    </ListItem>
                    <ListItem onClick={toggleDrawer}>
                      <ListItemText primary="Contact" />
                    </ListItem> */}
                  </List>
                </Drawer>
              </div>

              {displayMenu()}
              {/* <Button color="inherit">Home</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Contact</Button> */}
            </Box>
            <Box>
              <LanguageSwitcher />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
