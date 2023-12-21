import React from 'react'
import videoBg from "../assets/bg_video.mp4"
import Hero from "./Hero"
import SummaryPage from './SummaryPage'
import {Route, Routes } from "react-router-dom"

function Main() {
  return (
    <div className='main'>
        <div className='overlay'></div>
        <video src={videoBg} autoPlay loop muted/>
        <div className='pageContent'>
            <Routes>
              <Route path='/' element={<Hero />}/>
              <Route path='/summary' element={<SummaryPage />}/>
            </Routes>
        </div>
    </div>
  )
}

export default Main