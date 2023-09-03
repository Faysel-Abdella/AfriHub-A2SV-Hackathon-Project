import React from 'react'
import desImg from '../../assets/images/description.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'

const Description = () => {
  return (
    <div className="container-fluid">
      <div
        className="container d-flex align-items-center flex-wrap"
      >
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img src={desImg} className="w-75 w-md-50"/>
        </div>
        <div className="col-12 col-md-6">
            <h1 className="text-primary my-5 large-normal" style={{textAlign: "left"}}>Why Choose to Work with Us?</h1>
            <div className="col d-flex align-items-start">
                <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                    <FontAwesomeIcon icon={faMoneyBillWave} className='text-success fs-3'/>
                </div>
                <div>
                    <h5 className='text-success medium-italic fs-4'>Register and Get Started for Free</h5>
                    <p className='text-dark fs-7 paragraph text-justify'>Sign up today and begin your journey without any cost. Find Job that Best Suits You whith our AI.</p>
                </div>
            </div>
            <div className="col d-flex align-items-start">
                <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                    <FontAwesomeIcon icon={faMoneyBillWave} className='text-success fs-3'/>
                </div>
                <div>
                    <h5 className='text-success medium-italic fs-4'>Post a job and Hire Talented University Students</h5>
                    <p className='text-dark fs-7 paragraph text-justify'>Take advantage site to post job openings and connect with highly skilled university students ready to contribute their talent to your Startup.</p>
                </div>
            </div>
            <div className="col d-flex align-items-start">
                <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                    <FontAwesomeIcon icon={faMoneyBillWave} className='text-success fs-3'/>
                </div>
                <div>
                    <h5 className='text-success medium-italic fs-4'>Work with your Local Currence and Language</h5>
                    <p className='text-dark fs-7 paragraph text-justify'>Our generative AI job searching enables you to find opportunities that align with your local currency and language preferences.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Description