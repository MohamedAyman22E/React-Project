import React from 'react';
import "./Service.css";
import {services} from "../../constants/data";

function Service() {
  return (
    <div className='services container'>
        <div className="heading">
            <h2 className="text-capitalize fs-30"><span className="text_brown">my </span>services</h2>
            <p className='text-capitalize fs-14'>i offer the right solution for your digital business</p>
        </div>
        <div className="serviceList">
            {
                services.map((service,index)=>{
                    return(
                        <div className="service_item" key={index}>
                            <div className="service_img mx-auto " >
                                <img src={service.image} alt="" />
                            </div>
                            <h2 className="h2_service_item fw-400 fs-22 section-p">
                                {service.title}
                            </h2>
                            <p>{service.paragraph}</p>

                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

export default Service