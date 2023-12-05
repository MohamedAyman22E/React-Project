import React from 'react'
import "./Hero.css"

function Hero() {

  return (
    <div className='container hero'>
        <div className="content">
            <h3 className="fs-22 text-uppercase text_grey ls">web design ,branding,graphic</h3>
            <h2 className=" text_white text-capitalize ls fw-400">hello,i'm <span className="text_brown">web&graphic designer</span> living in melbourne,australia</h2>
            <div className="btn">
                <button className="text_white btn-button text-capitalize ls">see works</button>
                <button className="text_white btn-button text-capitalize ls bg_dark">contact me</button>
            </div>
        </div>
    </div>
  )
}

export default Hero