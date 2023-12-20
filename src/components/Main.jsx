import React from 'react'
import videoBg from "../assets/bg_video.mp4"
import Hero from "./Hero"

function Main() {
  return (
    <div className='main'>
        <div className='overlay'></div>
        <video src={videoBg} autoPlay loop muted/>
        <div className='pageContent'>
            <Hero />
        </div>
    </div>
  )
}

export default Main