"use client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage/page";
import About from "./about/page";
import Contact from "./contact/page";
import Events from "./events/page";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
