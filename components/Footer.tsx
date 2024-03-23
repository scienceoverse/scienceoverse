'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Footer = () => {

  const curryear = new Date().getFullYear();

  return (
    <footer className={`flex bottom-0 gap-2 w-full justify-between items-center z-10 bg-gray-900 text-white py-4`}>
      <div className="mx-auto flex gap-3 justify-between items-center">
        <p>&copy; {curryear} ScienceOVerse</p>
        <ul className="flex space-x-4">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
