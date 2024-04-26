"use client";
import Image from "next/image";
import style from "./page.module.css";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import { ThemeContext } from "@/components/Context/Context";

const getData = async () => {
  const res = await fetch(
    `https://pixabay.com/api/?key=43226508-324f6e5b3bf72ba17e8f9d97e`
  );
  if (!res.ok) {
    console.log("fetching error");
  } else {
    return res.json();
  }
};

export default function Home() {
  const [darkMode, setdark] = useContext(ThemeContext);

  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const data = await getData();
      setImages(data.hits);
    };
    getImages();
  }, []);
  return (
    <main
      style={{
        height: "100%",
        transition:".3s",
        backgroundColor: darkMode ? "black" : "white",
      }}
    >
      <Navbar />
      <Hero />
      <div className={style.products}>
        {images.map((image) => (
          <div className={style.card}>
            <Image
              src={image.webformatURL}
              className={style.image}
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
