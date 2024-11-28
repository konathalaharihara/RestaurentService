import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Collapse,
  Grid,
  Typography,
  IconButton,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as  menu from "../../assets/menu";
import { useThemeContext } from "../../context/theme-context";

const Menu = () => {
  const { darkMode } = useThemeContext();

  const menuItems = menu;
  const [expanded, setExpanded] = useState(null);

  const handleExpandClick = (index) => {
    setExpanded(expanded === index ? null : index);
  };



  return (
    <Box sx={{ padding: 2, backgroundColor: darkMode ? "#121212" : "#f5f5f5" }}>
      {menuItems?.menu.map((menu, ind) => (
        <>
          <Typography variant="h4" gutterBottom>{menu?.name}
          </Typography>
          <Grid container spacing={2} padding={2} >
            {menu?.items.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} >
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: 3,
                    "&:hover": { boxShadow: 6 },
                    transition: "0.3s",
                    position: "relative",
                    backgroundColor: darkMode ? "#121212" : "#fff",
                  }}
                // sx={{
                //   borderRadius: 2, // Rounded corners
                //   boxShadow: 3, // Soft shadow
                //   padding: 2,
                //   display: 'flex',
                //   flexDirection: 'column',
                //   transition: "0.3s",
                //   backgroundColor: darkMode ? "#121212" : "#fff",
                //   "&:hover": {
                //     boxShadow: 6, // Increased shadow on hover
                //   },
                // }}
                >
                  <CardContent >
                    <Typography variant="h6">{item.name}</Typography>
                    {expanded == index && <Typography variant="body2" >
                      {item.description}
                    </Typography>}
                    <Typography
                      variant="h6"
                      color="primary"
                      sx={{ marginTop: 2 }}
                    >
                      ${item?.prices[0]?.toFixed(2)}
                    </Typography>
                    <IconButton
                      onClick={() => handleExpandClick(index)}
                      sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        transform: expanded === index ? "rotate(180deg)" : "none",
                        transition: "transform 0.3s",
                        '&:focus': { backgroundColor: 'inherit' }
                      }}
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardContent>
                  <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                    <CardContent>
                      {/* <Typography variant="body2">
                    <strong>Spice Level:</strong> {item.spiceLevel}
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: 1 }}>
                    <strong>Allergens:</strong> {item.allergens.join(", ")}
                  </Typography> */}
                      <Typography variant="body2" sx={{ marginTop: 2 }}>
                        <strong>Description:</strong> {item.description}
                      </Typography>
                      {menuItems.spice && (
                        <Box sx={{ marginTop: 2 }}>
                          <Typography variant="body2" fontWeight="bold">
                            Choose Spice Level:
                          </Typography>
                          {/* <>
                      {menuItems.spice.map((option) => (
                        <FormControlLabel
                          key={option}
                          control={<Checkbox />}
                          label={option}
                        />
                      ))}
                      </> */}
                          <Box
                            sx={{
                              display: "flex",
                              flexWrap: "wrap",
                              justifyContent: "space-between", // Distributes space evenly
                              gap: 2, // Optional spacing between items
                            }}
                          >
                            {menuItems.spice.map((option) => (
                              <FormControlLabel
                                key={option}
                                control={<Checkbox />}
                                label={option}
                                sx={{ flex: "1 1 45%" }} // Adjust width as needed (e.g., 20% for 5 items per row)
                              />
                            ))}
                          </Box>

                        </Box>
                      )}
                      {menuItems.allergies && (
                        <Box sx={{ marginTop: 2 }}>
                          <Typography variant="body2" fontWeight="bold">
                            Allergy Information:
                          </Typography>
                          {/* {menuItems.allergies.map((option) => (
                            <FormControlLabel
                              key={option}
                              control={<Checkbox />}
                              label={option}
                            />
                          ))} */}
                          <Box
                            sx={{
                              display: "flex",
                              flexWrap: "wrap",
                              justifyContent: "space-between", // Distributes space evenly
                              gap: 2, // Optional spacing between items
                            }}
                          >
                            {menuItems.allergies.map((option) => (
                              <FormControlLabel
                                key={option}
                                control={<Checkbox />}
                                label={option}
                                sx={{ flex: "1 1 45%" }} // Adjust width as needed (e.g., 20% for 5 items per row)
                              />
                            ))}
                          </Box>
                        </Box>
                      )}
                    </CardContent>
                    <CardActions sx={{ justifyContent: "right", padding: 2 }}>
                      <Button variant="contained" color="primary">
                        Add to Cart
                      </Button>
                    </CardActions>
                  </Collapse>
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
