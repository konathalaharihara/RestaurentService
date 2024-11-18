import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "orange.50",
          py: 6,
          textAlign: "center",
        }}
      >
        <Container>
          <Typography
            variant="h2"
            component="h1"
            color="orange.700"
            fontWeight="bold"
            gutterBottom
          >
            Welcome to Our Restaurant
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="textSecondary"
            gutterBottom
          >
            Delicious food, exceptional service, and unforgettable experiences.
          </Typography>
          <Button
            variant="contained"
            color="success"
            size="large"
            href="#reservation"
            sx={{ mt: 2 }}
            component={Link} to="reservation"
          >
            Reserve a Table
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 6 }}>
        <Container>
          <Grid container spacing={4}>
            {/* Online Menu */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  textAlign: "center",
                  height: "100%",
                  boxShadow: 2,
                  "&:hover": { boxShadow: 4 },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    color="primary"
                    fontWeight="bold"
                  >
                    Online Menu
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mt={1}>
                    Explore our menu and order online with ease.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Reservations */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  textAlign: "center",
                  height: "100%",
                  boxShadow: 2,
                  "&:hover": { boxShadow: 4 },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    color="primary"
                    fontWeight="bold"
                  >
                    Reservations
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mt={1}>
                    Book your table online anytime, anywhere.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Track Orders */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  textAlign: "center",
                  height: "100%",
                  boxShadow: 2,
                  "&:hover": { boxShadow: 4 },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    color="primary"
                    fontWeight="bold"
                  >
                    Track Orders
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mt={1}>
                    Get real-time updates on your food delivery.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
