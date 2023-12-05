import React from 'react'
import "./Process.css"
import {work_process} from "../../constants/data"

function Process() {
  return (
    <div className='process '>
        <div className="container">
        <div className="heading">
            <h2 className="text-capitalize fs-30"><span className="text_brown">working </span>process</h2>
            <p className='text-capitalize fs-14'>i offer the right solution for your digital business</p>
      </div>
      <div className="allProcess">
      {  work_process.map((proc,index)=>{
        return (
            <div className="process_item" key={index}>
                <div className="head">
                    <h2 className='text_brown fs-40'>{`0${index +1}`}</h2>
                    <h3 className='text_dark fw-500'>{proc.title}</h3>
                </div>
                <p>{proc.paragraph}</p>
            </div>
        )
      })}

      </div>
        </div>
    </div>
  )
}

export default Process