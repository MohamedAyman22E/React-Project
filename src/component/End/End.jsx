import React from 'react'
import "./End.css"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function End() {
  return (
    <div className='end bg_dark'>
        <div className="container">
            <h2 className="text_white text-capitalize"><span className="text_brown">follow </span> me</h2>
        </div>
        <div className="icon">
            <span>
           <FaFacebookF />
            </span>
            <span>
           <FaInstagram />
            </span>
            <span>
           <FaLinkedin />
            </span>
            <span>
           <FaGithub />
            </span>
        </div>
        <h2 className="endHead text-uppercase text_white">
            {`created by =>`} <span className='text_brown'>mohamed ayman</span>
        </h2>
    </div>
  )
}
export default End