import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Box,
  Grid,
} from '@mui/material';

const Checkout = () => {
  // State to manage cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Spaghetti Bolognese',
      quantity: 2,
      price: 12.99,
    },
    {
      id: 2,
      name: 'Caesar Salad',
      quantity: 1,
      price: 8.99,
    },
  ]);

  // Calculate total
  const total = cartItems
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2);

  // Update quantity of an item
  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove an item from the cart
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <Container sx={{ padding: 4 }}>
      <Typography variant="h4" color="secondary" align="center" gutterBottom>
        Checkout
      </Typography>

      {/* Table for items */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Dish</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Subtotal</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    variant="outlined"
                    size="small"
                    value={item.quantity}
                    inputProps={{ min: 1 }}
                    sx={{ width: 70 }}
                    onChange={(e) =>
                      handleQuantityChange(item.id, Number(e.target.value))
                    }
                  />
                </TableCell>
                <TableCell>${item.price.toFixed(2)}</TableCell>
                <TableCell>${(item.quantity * item.price).toFixed(2)}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Total and Proceed to Payment */}
      <Grid container spacing={2} sx={{ marginTop: 4 }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" color="text.primary">
            Total: ${total}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} display="flex" justifyContent="flex-end">
          {/* Only show the button if there are items in the cart */}
          {cartItems.length > 0 ? (
            <Button
              component={Link}
              to="/payment"
              variant="contained"
              color="success"
              size="large"
            >
              Proceed to Payment
            </Button>
          ) : (
            <Button
              variant="contained"
              color="disabled"
              size="large"
              disabled
            >
              No items in cart
            </Button>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Checkout;
