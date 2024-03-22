import React from "react";
import "../../app/globals.css";
import spaceBackground from "../../public/space-bg.jpg";
import earth from "../../public/earth.png";
import Image from "next/image";
import Footer from "../Footer";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="container">
        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          className="background-video object-fill"
        >
          <source src="/homebg.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="flex flex-col justify-center mt-[5rem] items-center h-[30rem]">
          <h1 className="font-sans pt-12  mt-[5rem] bg-gradient-to-r from-blue-500 to-purple-800 text-transparent bg-clip-text font-extrabold md:text-[4rem] sm:text-[3rem] lg:text-[7rem] text-center">
            The Beginnig of a Scientific Revolution
          </h1>
          <h2 className="mx-[2rem] my-[1rem] lg:text-[3rem] font-sans mt-2 text-[2rem] text-center">
            Fueling curiosity, empowering minds, driving progress through
            science
          </h2>
          <button className="mt-[2rem] relative inline-flex items-center justify-center p-0.5 mb-2 me-2 text-[1.5rem] font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Join our Community
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
