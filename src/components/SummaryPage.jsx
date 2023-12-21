import React from 'react'
import { useSearchParams } from "react-router-dom";

function SummaryPage() {
const [searchParams] = useSearchParams();
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nibh at augue bibendum feugiat vel sed tellus. Maecenas non fringilla metus, eleifend eleifend purus. Nunc ac feugiat magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in rhoncus massa. Nulla convallis efficitur elementum. Nunc vitae massa auctor, dignissim sapien non, tempor neque. Quisque fringilla magna nec nisi mollis venenatis. Pellentesque efficitur commodo velit, non blandit eros hendrerit vitae. Vestibulum efficitur ac lorem quis maximus. Nullam efficitur volutpat volutpat. Curabitur laoreet faucibus velit id faucibus. Vivamus est massa, lobortis vitae lectus ut, semper semper sem. Integer condimentum dui quis justo facilisis, vitae vestibulum eros pellentesque. Vivamus gravida magna congue, iaculis ante ac, mollis risus. Pellentesque habitant morbi tristique senectus."
  return (
    <div className='summary-container'>
        <div className='video-preview-container'>
            <iframe className='frame-YT' src={"https://www.youtube.com/embed/"+searchParams.get("id")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h1 className='summary-header'>SUMMARY</h1>
        <div className='summary-text-container'>
            <div>
                {lorem}
            </div>
        </div>
    </div>
  )
}

export default SummaryPage