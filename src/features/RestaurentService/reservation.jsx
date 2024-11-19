import React, { useState } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import { useThemeContext } from "../../context/theme-context"; 

const Reservation = () => {
  const { darkMode } = useThemeContext();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [partySize, setPartySize] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation for ${name} on ${date} at ${time} for ${partySize} people.`);
  };

  return (
    <Box sx={{ padding: 2, backgroundColor: darkMode ? "#333" : "#f5f5f5" }}>
      <Typography variant="h4" gutterBottom color={darkMode ? "#fff" : "inherit"}>
        Reserve a Table
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
          type="date"
          label="Reservation Date"
          fullWidth
          value={date}
          onChange={(e) => setDate(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          type="time"
          label="Reservation Time"
          fullWidth
          value={time}
          onChange={(e) => setTime(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          type="number"
          label="Party Size"
          fullWidth
          value={partySize}
          onChange={(e) => setPartySize(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Reserve Now
        </Button>
      </form>
    </Box>
  );
};

export default Reservation;
