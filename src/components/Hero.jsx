import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

function youtube_parser(url){
  var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);
  if (match && match[2].length === 11) {
    return match[2];
  } else {
    return "";
  }
}

function Hero() {
  useEffect(()=>{
    //ping to start cold server
    fetch("https://youtube-summarizer-vf81.onrender.com/ping").catch(()=>{})
  }, [])
  const [video_url,setVideo_url] = useState("")

  return (
    <div className='heroContent'>
        <h1 className='animate-character'>YouTube</h1>
        <h1 className='heroHeader'>video summarizer</h1>
        <div class="form">
          <input type="text" name="text" autocomplete="off" required value={video_url} onChange={(e)=>setVideo_url(e.target.value)}/>
          <label for="text" class="label-name">
            <span class="content-name">
              Video URL
            </span>
          </label>
        </div>
        <div>
          <Link to={{pathname: '/summary', search: '?id='+youtube_parser(video_url)}} className='summarize-btn' ><span>Make Summary</span></Link>
        </div>
    </div>
  )
}

export default Hero