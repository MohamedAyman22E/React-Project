import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div className='contact'>
        <div className="container">
            <div className="heading">
                <h2 className="text_dark text-capitalize"><span className="text_brown">contact</span> me</h2>
                <p className="text_dark">i offer the right solution for your digital business</p>
            </div>
            <form action="">
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <textarea name="" id="" cols="30" rows="5" placeholder='Message'></textarea>
                <button type='submit' className='bg_brown'> submit</button>
            </form>
        </div>

    </div>
  )
}

export default Contact