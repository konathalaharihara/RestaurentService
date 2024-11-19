import React, { useState } from "react";
import { Typography, Box, Button, Checkbox, FormControlLabel } from "@mui/material";
import { useThemeContext } from "../../context/theme-context"; 

const Order = () => {
  const { darkMode } = useThemeContext();
  const [order, setOrder] = useState({
    pizza: false,
    spaghetti: false,
    salad: false,
    burger: false,
  });

  const handleChange = (event) => {
    setOrder({
      ...order,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = () => {
    const orderedItems = Object.keys(order).filter((item) => order[item]);
    alert(`Order placed for: ${orderedItems.join(", ")}`);
  };

  return (
    <Box sx={{ padding: 2, backgroundColor: darkMode ? "#333" : "#f5f5f5" }}>
      <Typography variant="h4" gutterBottom color={darkMode ? "#fff" : "inherit"}>
        Order Online
      </Typography>
      <FormControlLabel
        control={<Checkbox checked={order.pizza} onChange={handleChange} name="pizza" />}
        label="Pizza Margherita"
      />
      <FormControlLabel
        control={<Checkbox checked={order.spaghetti} onChange={handleChange} name="spaghetti" />}
        label="Spaghetti Bolognese"
      />
      <FormControlLabel
        control={<Checkbox checked={order.salad} onChange={handleChange} name="salad" />}
        label="Caesar Salad"
      />
      <FormControlLabel
        control={<Checkbox checked={order.burger} onChange={handleChange} name="burger" />}
        label="Burger and Fries"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ marginTop: 2 }}>
        Place Order
      </Button>
    </Box>
  );
};

export default Order;
