"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import logo from "./logo.png";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const navs = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Events",
      link: "/events",
    },
  ];

  return (
    <nav className="navbar rounded-3xl">
      <div className="navbar-wrapper">
        <Link href="/" className="rounded-full">
          <Image src={logo} alt="logo" width={250} height={50} />
        </Link>
        <div
          className={`nav-links ${
            active ? "active transition-all duration-300" : ""
          }`}
        >
          {navs.map((nav, index) => (
            <Link href={nav.link} key={index} className="nav-link">
              {nav.name}
            </Link>
          ))}
          <Link
            href="/signin"
            className="button overflow-x-hidden transition-all duration-300"
          >
            Sign In
          </Link>
        </div>
        <button
          className="menu-button md:hidden text-3xl transition-all duration-300"
          onClick={() => setActive(!active)}
        >
          {active ? <RxCross1 /> : <TiThMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
