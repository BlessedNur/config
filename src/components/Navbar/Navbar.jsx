"use client"
import Link from "next/link";
import React, { useContext } from "react";
import style from "./Navbar.module.css";
import Hero from "../Hero/Hero";
import DarkMode from "../Darkmode/DarkMode";
import { ThemeContext } from "../Context/Context";

function Navbar() {
  const [darkMode, setdark] = useContext(ThemeContext);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
    { name: "Blog", href: "/blog" },
  ];
  return (
    <>
      <div className={style.navbar} style={{backgroundColor:darkMode?"white":"black" , color:darkMode?"black":"white", transition:".3s"}}>
        <h1>Logo</h1>
        <ul className={style.links}>
          <DarkMode/>
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href} style={{color:darkMode?"black":"white"}} className={style.li}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
