import React, { createContext, useState, useContext } from "react";

// Create a context for the theme
const ThemeContext = createContext();

// Custom hook to use theme context
export const useThemeContext = () => {
  return useContext(ThemeContext);
};

// Provider component to manage theme state
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  // Toggle the dark/light theme
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
