import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { useThemeContext } from "../../context/theme-context"; // Import the theme context

const NavBar = () => {
  const { darkMode, toggleTheme } = useThemeContext(); // Use the current theme state
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    toggleTheme();
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ padding: "16px", backgroundColor: darkMode ? "#333" : "#ff9800", textAlign: "center" }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: darkMode ? "#fff" : "inherit", flexGrow: 1 }}
          onClick={toggleTheme}
        >
          Plate Manager
        </Typography>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List onClick={handleDrawerToggle}>
        <ListItem button component={Link} to="menu">
          <ListItemText primary="Menu" />
        </ListItem>
        <ListItem button component={Link} to="reservation">
          <ListItemText primary="Reserve Table" />
        </ListItem>
        <ListItem button component={Link} to="order">
          <ListItemText primary="Order Online" />
        </ListItem>
        <ListItem button component={Link} to="contact-us">
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        color="warning"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: "none",
          backgroundColor: darkMode ? "333#" : "#ff9800",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            aria-label="menu"
            sx={{ display: { xs: "block", sm: "none" }, '&:focus': { backgroundColor: 'inherit' } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ flexGrow: 1, textDecoration: "none", color: darkMode ? "#fff" : "inherit" }}
            onClick={toggleTheme}
          >
            Plate Manager
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button color="inherit" component={Link} to="/menu">
              Menu
            </Button>
            <Button color="inherit" component={Link} to="/reservation">
              Reserve Table
            </Button>
            <Button color="inherit" component={Link} to="/order">
              Order Online
            </Button>
            <Button color="inherit" component={Link} to="/contact-us">
              Contact Us
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 2, // Ensures drawer shows above content but below AppBar
          marginTop: "64px", // Adjusts the position so the drawer starts below the AppBar
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default NavBar;
