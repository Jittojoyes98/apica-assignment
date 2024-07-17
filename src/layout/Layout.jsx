import { Link, Outlet, useLocation } from "react-router-dom";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { commonAssets, menuItems } from "../constants/assetfiles";
import Header from "./Header";
import "./layout.scss";
import Countchip from "../components/Countchip/Countchip";

const drawerWidth = 296;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `88px`,
  [theme.breakpoints.up("sm")]: {
    width: `88px`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  // zIndex:0,
  alignItems: "center",
  justifyContent: "flex-end",
  padding: 0,
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "white",
  boxShadow: "none",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Layout() {
  const theme = useTheme();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const [path, setPath] = React.useState(location.pathname);

  React.useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = React.useCallback(() => {}, [path]);

  return (
    <div className="main">
      <Box sx={{ display: "flex", height: "100%" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} className="sidebar-drawer">
          <Toolbar className={`${open ? "sidebar-header-wrapper" : ""}`}>
            {open ? (
              <></>
            ) : (
              <Link to="/">
                <div className="logo-image-wrapper">
                  <img src={commonAssets["logo"]} alt="logo" />
                </div>
              </Link>
            )}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <ChevronRightIcon />
            </IconButton>
            <Header open={open} />
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open={open}
          className={`drawer-wrapper-${open ? "shown" : "hidden"}`}
        >
          <DrawerHeader sx={{ padding: "0" }}>
            <div className="logo-wrapper">
              <Link to="/">
                <div className="logo-image-wrapper">
                  <img src={commonAssets["logo"]} alt="logo" />
                </div>
              </Link>
              <p className="sub3medium">Metrix</p>
            </div>

            <IconButton
              onClick={handleDrawerClose}
              className="drawer-opener-button"
            >
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <List className="menu-list-wrapper">
            {menuItems.map((item, index) => {
              const IconInactive = item.iconInactive;
              const IconActive = item.iconActive;
              return (
                <ListItem
                  key={item.name}
                  disablePadding
                  className="menu-list-item-wrapper"
                  sx={{ display: "block" }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                    component={Link}
                    to={item.to}
                    className={`menu-list-item ${
                      item.to === path ? "active-button " : ""
                    }`}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {item.to === path ? <IconActive /> : <IconInactive />}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      sx={{ display: open ? "block" : "none" }}
                    />
                    <Countchip count={2} open={open} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 0, display: "flex", flexDirection: "column" }}
        >
          <DrawerHeader />
          <Box className="dashboard-wrapper">
            <Outlet />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
