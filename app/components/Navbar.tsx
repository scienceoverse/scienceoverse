'use client'
import Link from "next/link";
import React from "react";
import './navbar.css'
import { usePathname } from "next/navigation";
import logo from '../components/logo.png'
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
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
        <Link href='/'>
          <Image src={logo} alt="logo" width={250} height={50} className="rounded-full" />
        </Link>
        <div className="nav-links">
          {navs.map((nav, index) => (
            <Link
              href={nav.link}
              key={index}
              className={`${pathname === nav.link ? 'active' : ''}`}
            >
              {nav.name}
            </Link>
          ))}
        </div>
        <Link href="/signin" className="button">
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;