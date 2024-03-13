import React from 'react'
import '../globals.css'

const page = () => {
  return (
    <div className='container'>
      <div className='background-video'>
        <video width="100%" height="100%" autoPlay loop muted>
          <source src='/homebg.mp4' type='video/mp4'/>
        </video>
      </div>
    </div>
  )
}

export default page