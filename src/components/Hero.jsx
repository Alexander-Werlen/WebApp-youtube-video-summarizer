import React from 'react'
import {Link} from "react-router-dom"

const url = "hola"
function Hero() {
  return (
    <div className='heroContent'>
        <h1 className='animate-character'>YouTube</h1>
        <h1 className='heroHeader'>video summarizer</h1>
        <div class="form">
          <input type="text" name="text" autocomplete="off" required />
          <label for="text" class="label-name">
            <span class="content-name">
              Video URL
            </span>
          </label>
        </div>
        <div>
          <Link to={{pathname: '/summary', search: '?id='+url}} className='summarize-btn' ><span>Make Summary</span></Link>
        </div>
    </div>
  )
}

export default Hero