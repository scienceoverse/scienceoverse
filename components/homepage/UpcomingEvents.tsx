import Image from 'next/image'
import React from 'react'
import spacebg from "../../public/space-bg.jpg";
import earth from "../../public/earth.png";


const UpcomingEvents = () => {
  return (
    <div className="h-screen relative flex justify-center items-center">
      <div className="absolute inset-0 -z-2">
        <Image
          src={spacebg}
          layout="fill"
          objectFit="cover"
          alt="space background"
        />
      </div>
      <div className="relative flex flex-col md:flex-row mx-12 z-1  items-center justify-between h-full">
        <h1 className='text-[4rem] font-ocr bg-gradient-to-r from-blue-700 to-purple-900 text-transparent bg-clip-text font-extrabold'>
            Upcoming Events
        </h1>
      </div>
    </div>
  )
}

export default UpcomingEvents