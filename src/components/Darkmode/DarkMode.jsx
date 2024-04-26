"use client";
import React, { useContext } from "react";
import { ThemeContext } from "../Context/Context";

function DarkMode() {
  const [darkMode, setdark] = useContext(ThemeContext);

  return (
    <div
      style={{
        display: "flex",
        gap: "1.5em",
        alignItems: "center",
        border: `1px solid ${darkMode ? "black" : "white"} `,
        padding: ".4em",
        borderRadius: "50px",
        position: "relative",
        cursor: "pointer",
      }}
      onClick={() => {
        !darkMode ? setdark(true) : setdark(false);
        localStorage.setItem("mode", darkMode);
      }}
    >
      <div
        className="circle"
        style={{
          position: "absolute",
          height: "100%",
          width: "45%",
          backgroundColor: darkMode ? "black" : "white",
          border: `1px solid ${darkMode ? "white" : "black"} `,
          borderRadius: "50%",
          left: "0",
          transition: ".3s linear",
          transform: darkMode ? "translateX(120%)" : "translateX(0)",
        }}
      ></div>
      <i
        class="fas fa-sun    "
        style={{ color: darkMode ? "black" : "white" }}
      ></i>
      <i
        class="fas fa-moon    "
        style={{ color: darkMode ? "black" : "white" }}
      ></i>
    </div>
  );
}

export default DarkMode;
