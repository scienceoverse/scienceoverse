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
    <div className="border border-gray-800 bg-[#18191a] rounded-3xl m-4 p-3 flex justify-between items-center">
      <div className="flex gap-2">
      <Image src={logo} alt="logo" width={250} height={50} />
      </div>
      <div className="flex m-2">
        {navs.map((nav, index) => (
          <Link
            href={nav.link}
            key={index}
            className={`${pathname === nav.link ? 'text-purple-600' : 'text-gray-400'} relative inline-flex  text-md mx-5 items-center justify-start overflow-hidden font-bold rounded-full group`}
          >
            {nav.name}
            </Link>
        ))}
        <Link href="/signin" className="relative inline-block text-md group">
          <span className="relative z-10 block px-3 py-2 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-white rounded-lg group-hover:text-gray-900">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-900"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
            <span className="relative">Button Text</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
{
  /* <a href="#_" className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
<span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
<span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
<span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Button Text</span>
<span className="absolute inset-0 border-2 border-white rounded-full"></span>
</a> */
}