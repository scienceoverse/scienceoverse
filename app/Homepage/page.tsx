import React from 'react'
import '../globals.css'
const page = () => {
  return (
    <div className='container'>
      <video  width="320" height="240">
        <source src='../../public/homebg.mp4' type='video/mp4'/>
      </video>
    </div>
  )
}

export default page