import React from 'react'

function Hero() {
  return (
    <div className='heroContent'>
        <h1 className='animate-charcter'>YouTube</h1>
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
          <a href="http://localhost:3000/" className='summarize-btn'><span>Make Summary</span></a>
        </div>
    </div>
  )
}

export default Hero