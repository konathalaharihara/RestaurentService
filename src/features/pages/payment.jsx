import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Alert,
} from '@mui/material';

const Payment = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [error, setError] = useState('');

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Validate the form
  const validateForm = () => {
    const { fullName, email, address, city, zipCode, cardNumber, expiryDate, cvv } = formData;
    if (!fullName || !email || !address || !city || !zipCode || !cardNumber || !expiryDate || !cvv) {
      setError('Please fill in all fields.');
      return false;
    }
    if (cardNumber.length !== 16) {
      setError('Card number must be 16 digits.');
      return false;
    }
    if (cvv.length !== 3) {
      setError('CVV must be 3 digits.');
      return false;
    }
    setError('');
    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Process the payment (for now, it's just a placeholder)
      alert('Payment successful!');
      // Reset form data
      setFormData({
        fullName: '',
        email: '',
        address: '',
        city: '',
        zipCode: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
      });
    }
  };

  return (
    <Container sx={{ padding: 4 }}>
      {/* Page Header */}
      <Typography variant="h4" color="secondary" align="center" gutterBottom>
        Secure Payment
      </Typography>

      {/* Error Message */}
      {error && <Alert severity="error">{error}</Alert>}

      <Box component="form" noValidate onSubmit={handleSubmit}>
        {/* Billing Information Section */}
        <Typography variant="h5" gutterBottom>
          Billing Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              required
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Billing Address"
              variant="outlined"
              fullWidth
              required
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="City"
              variant="outlined"
              fullWidth
              required
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Zip Code"
              variant="outlined"
              fullWidth
              required
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        {/* Card Information Section */}
        <Typography variant="h5" gutterBottom sx={{ marginTop: 4 }}>
          Card Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Card Number"
              variant="outlined"
              fullWidth
              required
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              inputProps={{ maxLength: 16 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Expiry Date"
              placeholder="MM/YY"
              variant="outlined"
              fullWidth
              required
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="CVV"
              variant="outlined"
              fullWidth
              required
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              inputProps={{ maxLength: 3 }}
            />
          </Grid>
        </Grid>

        {/* Confirm Payment Button */}
        <Box textAlign="center" sx={{ marginTop: 4 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Confirm Payment
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Payment;
