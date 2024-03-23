import Image from "next/image";
import React from "react";
import spacebg from "../../public/space-bg.jpg";
import earth from "../../public/earth.png";

const Intro = () => {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 -z-2">
        <Image
          src={spacebg}
          layout="fill"
          objectFit="cover"
          alt="space background"
        />
      </div>
      <div className="relative flex flex-col md:flex-row mx-12 z-1  items-center justify-between h-full">
        <div>
          <Image
            src={earth}
            width={320}
            height={320}
            alt="planet"
            className="w-[80%]"
          />
        </div>
        <div className="font-ocr w-[60%] h-[50%] rounded-3xl object-contain bg-gradient-to-br from-blue-900 to-purple-900 shadow-lg overflow-hidden">
          <h1 className="flex mt-2 text-[4rem] justify-center">About us</h1>
          <div className="px-6 py-4 overflow-y-auto">
            <p className="font-ocr text-3xl">
              At ScienceOverse, we foster a vibrant scientific community,
              empowering individuals to explore the wonders of the universe and
              unlock their full potential in science. Welcome to the future of
              discovery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
