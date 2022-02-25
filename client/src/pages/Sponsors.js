import React from 'react'
import sachdev from '../images/sachdev.jpg'
function Sponsors() {
   
  return (
    
    <div className="relative container mt-4 d-flex flex-wrap ">
            <div className="profile-card">
                <div className="profile-content">
                    <div className="profile-image">
                      <img src={sachdev} alt="first user"></img> 
                    </div>
                    <div className="cdetail">
                        Utility Sponsor
                    </div> 
                </div>
            </div>
            <div className="profile-card">
                <div className="profile-content">
                    <div className="profile-image">
                      <img src={sachdev} alt="first user"></img> 
                    </div>
                    <div className="cdetail">
                        Trusted Sponsor
                    </div> 
                </div>
            </div>
            <div className="profile-card">
                <div className="profile-content">
                    <div className="profile-image">
                      <img src={sachdev} alt="first user"></img> 
                    </div>
                    <div className="cdetail">
                        Trusted Sponsor
                    </div> 
                </div>
            </div>
   
    </div>
  )
}

export default Sponsors
