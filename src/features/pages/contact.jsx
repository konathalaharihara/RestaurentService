import React, { useState } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import { useThemeContext } from "../../context/theme-context"; 

const ContactUs = () => {
  const { darkMode } = useThemeContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent from ${name} (${email}): ${message}`);
  };

  return (
    <Box sx={{ padding: 2, backgroundColor: darkMode ? "#333" : "#f5f5f5" }}>
      <Typography variant="h4" gutterBottom color={darkMode ? "#fff" : "inherit"}>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Your Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Your Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Your Message"
          fullWidth
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default ContactUs;
