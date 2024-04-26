"use client";
import React, { useContext } from "react";
import style from "./Hero.module.css";
import Image from "next/image";
import { ThemeContext } from "../Context/Context";

function Hero() {
  const [darkMode, setdark] = useContext(ThemeContext);

  return (
    <div className={style.container}>
      <div className={style.left}>
        <h1 style={{ fontSize: "50px", color: darkMode ? "white" : "black" }}>
          Welcome to our best <br /> experience design
        </h1>
        <p style={{ fontSize: "", color: darkMode ? "white" : "black" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rerum
          neque unde. Autem deleniti repellat nisi, voluptates blanditiis illo
          commodi excepturi, nesciunt dolorem, veritatis tenetur!
        </p>
        <button
          className={style.button}
          style={{
            color: darkMode ? "black" : "white",
            backgroundColor: darkMode ? "white" : "black",
          }}
        >
          Learn More
        </button>
      </div>
      <div className={`${style.imageContainer} ${darkMode ? style.light : ""}`}>
        <Image
          src={"/man-removebg-preview.png"}
          width={800}
          height={500}
          objectFit="cover"
          className={style.image}
        />
      </div>
    </div>
  );
}

export default Hero;
