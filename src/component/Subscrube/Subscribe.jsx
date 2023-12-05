import React from 'react'
import "./Subscribe.css"

function Subscribe() {
  return (
    <div className='subscribe'>
            {/* <img src={img} alt="" /> */}
        <div className="container">
            <div className="heading">
                <h2 className='text-capitalize text_white'><span className='text_brown'>subscribe</span> to newsletter</h2>
            </div>
            <form action="" className='mx-auto'>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <button type='submit' className='ls fs-18'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Subscribe