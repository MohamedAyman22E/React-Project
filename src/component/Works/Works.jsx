import React ,{useState} from 'react'
import "./Works.css"
import {works} from "../../constants/data"
import { FaPlus } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";


function Works() {
  const [imageModule,setImageModule]=useState(false)
  const [imageSource,setImageSource]=useState("")
  const setImageOnSource=(src)=>{
    setImageModule(true)
    setImageSource(src)
  }
  return (
    <div className='works container'>
      <div className="heading">
            <h2 className="text-capitalize fs-30"><span className="text_brown">latest </span>works</h2>
            <p className='text-capitalize fs-14'>i offer the right solution for your digital business</p>
      </div>
      <div className="allWorks container">
        {
          works.map((work,index)=>{
            return(
              <div className="workItem" key={index} onClick={()=>setImageOnSource(work.image)}>
                <img src={work.image} alt="" />
                <div className="span"><FaPlus/></div>
              </div>
            )
          })
        }
      </div>
      <div className= {imageModule?"imgBox imgBoxBlock":"imgBox"}>
       <div className="img">
       <img src={imageSource } alt="" />
      <div className="icon" onClick={()=>setImageModule(false)} >
      <IoMdCloseCircleOutline />
      </div>
       </div>
      </div>

    </div>
  )
}

export default Works