import React, { useState, useEffect } from 'react'
import { useSearchParams, Link } from "react-router-dom";

function SummaryPage() {
  const [searchParams] = useSearchParams();
  const [finishedAPICall = false, setFinishedAPICall] = useState();
  const [flags = {id_is_valid: false, found_transcript: false, found_summary: false}, setFlags] = useState();
  const [summary = "", setSummary] = useState();

  /* useEffect(()=>{
    setInterval(()=>{
      console.log(flags)
    }, 1000)
  }, []) */

  useEffect(()=>{
    fetch(`https://youtube-summarizer-vf81.onrender.com/api/summarize?id=${searchParams.get("id")}`).then((r)=>r.json()).then((response)=>{
      setSummary(response.summary);
      setFlags({id_is_valid: response.id_is_valid, found_transcript: response.found_transcript, found_summary: response.found_summary});
      setFinishedAPICall(true);
    })}
  , [])

  return (
    <div className='summary-container'>
        <div className='video-preview-container'>
            <iframe className='frame-YT' src={"https://www.youtube.com/embed/"+searchParams.get("id")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='summary-text-container'>
          <div className='summary-box'>
            <span></span>
            <div className='summary-text-card'>
              <h2>Service is currently down</h2>
              {/* {
                (!finishedAPICall) &&
                <>
                  <h2 className='lds-title'>making summary</h2>
                  <div className='lds-ellipsis-container'><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
                </>
              }
              {
                (finishedAPICall && flags.found_summary) &&
                <>
                  <h2>Summary</h2>
                  <p>
                    {summary}
                  </p>
                </>
              }
              {
                (finishedAPICall && !flags.found_summary && flags.found_transcript) &&
                <>
                  <h2>Failed</h2>
                  <p>
                    Couldn't make the summary. The video might be too large to summarize, the service could be saturated, or there could be problems reaching the AI that makes the summary.
                  </p>
                </>
              }
              {
                (finishedAPICall && !flags.found_transcript && flags.id_is_valid) &&
                <>
                  <h2>Failed</h2>
                  <p>
                    Couldn't get the transcript. Video might not have a transcript, or the service could be saturated. 
                  </p>
                </>
              }
              {
                (finishedAPICall && !flags.id_is_valid) &&
                <>
                  <h2>Invalid URL</h2>
                </>
              } */}
            </div>
          </div>
        </div>
        <div className='try-another-btn'>
          {
            finishedAPICall && <Link to={{pathname: '/'}} className='summarize-btn' ><span>Try Another</span></Link>
          }
        </div>
        
    </div>
  )
}

export default SummaryPage