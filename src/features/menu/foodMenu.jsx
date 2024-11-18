import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Switch, FormControlLabel, Container } from '@mui/material';
import { useThemeContext } from "../../context/theme-context";
// Sample menu data
const menuItems = [
  {
    id: 1,
    name: "Dish 1",
    description: "Spicy, delicious, and fresh.",
    price: "$15.99",
    image: "dish1.jpg",
  },
  {
    id: 2,
    name: "Dish 2",
    description: "Sweet, savory, and delightful.",
    price: "$12.99",
    image: "dish2.jpg",
  },
  {
    id: 3,
    name: "Dish 3",
    description: "Tangy, rich, and satisfying.",
    price: "$18.99",
    image: "dish3.jpg",
  },
];

const FoodMenu = () => {
    const { darkMode } = useThemeContext(); // Use the current theme state
  return (
      <Container sx={{ paddingTop: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Menu
        </Typography>

        <Grid container spacing={4}>
          {menuItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.name}
                />
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2">{item.description}</Typography>
                  <Typography variant="body1" color="text.primary">
                    <strong>Price:</strong> {item.price}
                  </Typography>
                </CardContent>
                <Button variant="contained" color="primary" sx={{ margin: 2 }}>
                  Add to Cart
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
  );
};

export default FoodMenu;
