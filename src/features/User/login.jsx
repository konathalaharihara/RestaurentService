import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess, loginFailure } from "../../redux/user/user.action";
import axios from "axios";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.username) errors.username = "Username is required";
    if (!formData.password) errors.password = "Password is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:3000/users/login",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status !== 200) {
          throw new Error("Login failed");
        }

        dispatch(loginSuccess(response.data));
        navigate("/auth");
      } catch (error) {
        setErrors({ api: error.message });
        dispatch(loginFailure(error.message));
        console.error("Login error:", error);
      }
    } else {
      setErrors(errors);
    }
  };

  useEffect(() => {
    if (window.M && window.M.updateTextFields) {
      window.M.updateTextFields();
    }
  }, []);

  return (
    <Box
      sx={{
        height: "calc(100vh - 15vh)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // background: "linear-gradient(135deg, #6e8efb, #a777e3)",
        background: (theme) => theme.background,
        padding: 2,
      }}
    >
      <Card
        sx={{
          width: 400,
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ marginBottom: 3 }}
          >
            Login
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Username"
              name="username"
              id="outlined-basic"
              value={formData.username}
              onChange={handleChange}
              error={Boolean(errors.username)}
              helperText={errors.username}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              id="outlined-basic"
              value={formData.password}
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
              margin="normal"
              variant="outlined"
            />
            {errors.api && (
              <Typography
                variant="body2"
                color="error"
                sx={{ marginTop: 1 }}
              >
                {errors.api}
              </Typography>
            )}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 2,
              }}
            >
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Box>
            <Button
              fullWidth
              variant="contained"
              sx={{
                background: (theme) => theme.primary,
                marginTop: 3,
              }}
              type="submit"
            >
              LOGIN
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default LoginForm;
