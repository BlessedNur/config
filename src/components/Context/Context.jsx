"use client";
import React, { createContext, useState } from "react";
export const ThemeContext = createContext();
function Context({ children }) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("mode") || false
  );
  return (
    <ThemeContext.Provider value={[darkMode, setDarkMode]}>
      {children}
    </ThemeContext.Provider>
  );
}

export default Context;
