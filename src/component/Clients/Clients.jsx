import {React,useRef,useState} from 'react'
import {about_stats} from "../../constants/data"
import imgs from "../../assets/images/About_Alex.jpg"
import video from "../../assets/videos/video.mp4"
import "./Clients.css"
function Clients() {
    const vidRef = useRef(null)
    const [toggleVideo,setToggleVideo] = useState(false)
    const playVideo = ()=>{
        setToggleVideo(!toggleVideo)
        if(toggleVideo){
            vidRef.current.play()
        }else{
            vidRef.current.pause()

        }
    }
  return (
    <div className='clients'>
        <div className="container">
            <div className="first">
                <div className="first_img">
                    <img src={imgs} alt="" />
                </div>
                <div className="first_info">
                    <h2 className=" text-capitalize text_dark fs-30"> <span className="text_brown">i'm</span> alex</h2>
                    <p className='text_dark'>
                         Aliquam et odio arcu. Vestibulum pharetra tincidunt odio, sed pulvinar magna tempus quis. Mauris risus odio, semper sit amet tortor a, tristique consectetur urna.,
                    </p>
                </div>
            </div>
            <div className="second">
                {about_stats.map((about,index)=>{
                    return(
                        <div className="about_item" key={index}>
                            <div className="about_img">
                                <img src={about.image} alt="" />
                            </div>
                            <div className="content">
                                <h2 className='fw-500 text_dark'>{about.value}</h2>
                                <h3 className='text_dark'>{about.title}</h3>
                            </div>
                        </div>
                    )

                })}

            </div>
            <div className="third">
                <div className="third_info">
                    <h2 className=" text_dark text-capitalize"><span className="text_brown">video</span> presentation</h2>
                    <p className='text_dark text-capitalize'>
                         Aliquam et odio arcu. Vestibulum pharetra tincidunt odio, sed pulvinar magna tempus quis. Mauris risus odio, semper sit amet tortor a, tristique consectetur urna.,
                    </p>
                </div>
                <div className="third_img">
                    <video src={video} autoPlay loop  ref={vidRef}></video>
                   <div className="button" onClick={playVideo}>
                   <i class='bx bx-play text_brown '></i>
                   </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Clients