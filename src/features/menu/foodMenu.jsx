import React from "react";
import { Typography, Box, Grid, Card, CardContent } from "@mui/material";
import { useThemeContext } from "../../context/theme-context"; 
import { Link } from "react-router-dom";

import { menu } from "../../assets/menu";

const Menu = () => {
  const { darkMode } = useThemeContext();

const menuItems = menu;

  return (
    <Box sx={{ padding: 2, backgroundColor: darkMode ? "#333" : "#f5f5f5" }}>
      {menuItems.map((menu, ind) => (
        <>
          <Typography variant="h4" gutterBottom color={darkMode ? "#fff" : "inherit"} padding={2}>
            {menu.name}
          </Typography>
          <Grid container spacing={2} key={ind}>
            {menu.items.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  component={Link}
                  to="/checkout"
                  sx={{
                    borderRadius: 2, // Rounded corners
                    boxShadow: 3, // Soft shadow
                    padding: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: darkMode ? "#444" : "#fff",
                    "&:hover": {
                      boxShadow: 6, // Increased shadow on hover
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                    <Typography variant="h6" color="primary" sx={{ marginTop: 1 }}>
                      ${item.prices[0] ?? 0}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      ))}
    </Box>
  );
};

export default Menu;
