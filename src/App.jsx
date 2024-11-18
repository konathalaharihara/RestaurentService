import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box, CssBaseline, Switch } from "@mui/material";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { useThemeContext } from "./context/theme-context";
import NavBar from "./features/pages/navbar";
import Footer from "./features/pages/Footer";
import LoginForm from "./features/User/login";
import { Checkout, Contact, HomePage, Payment } from "./features/pages";
import { Reservation, Order } from "./features/RestaurentService";
import FoodMenu from "./features/menu/foodMenu";
import DarkModeIcon from "@mui/icons-material/NightlightRound";
import LightModeIcon from "@mui/icons-material/WbSunny";

function App() {
  const { darkMode, toggleTheme } = useThemeContext();

  // Define light and dark themes
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light", // Switch between dark and light mode
      primary: {
        main: darkMode ? "#90caf9" : "#1976d2", // Adjust primary color for both themes
      },
      background: {
        default: darkMode ? "#121212" : "#f5f5f5", // Background color for both themes
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* Fixed Navbar */}
        <NavBar />


        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flex: 1,
            mt: { xs: 8, sm: 8 }, // Adjusted to account for the AppBar height
            overflowY: "auto",
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/menu" element={<FoodMenu />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/order" element={<Order />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Box>

        {/* Footer */}
        <Footer />
              {/* Toggle Button for Dark/Light Mode */}
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {/* Dark/Light Mode Icons and Switch */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* Dark/Light Mode Icon */}
              {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
            </Box>
          </Box>
      </Box>

    </MuiThemeProvider>
  );
}

export default App;
