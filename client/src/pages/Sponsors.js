import React from 'react'
import sachdev from '../images/sachdev.jpg'
import sbi from '../images/sbi.jpg'
import gouras from '../images/gouras.png'
import skpl from '../images/skpl.png'
import alumni from '../images/alumni.png'
import alumni1 from '../images/alumni.png'
function Sponsors() {
   
  return (
    
    <div className="relative container mt-4 d-flex flex-wrap ">
            <div className="profile-card">
                <div className="profile-content">
                    <div className="profile-image">
                      <img src={sbi} alt="first user"></img> 
                    </div>
                    <div className="cdetail">
                        Title Sponsor
                    </div> 
                </div>
            </div>
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
                      <img src={alumni} alt="first user"></img> 
                    </div>
                    <div className="cdetail">
                        Alum Sponsor
                    </div> 
                </div>
            </div>
            <div className="profile-card">
                <div className="profile-content">
                    <div className="profile-image">
                      <img src={alumni1} alt="first user"></img> 
                    </div>
                    <div className="cdetail">
                        Technical Sponsor
                    </div> 
                </div>
            </div>
            <div className="profile-card">
                <div className="profile-content">
                    <div className="profile-image">
                      <img src={skpl} alt="first user"></img> 
                    </div>
                    <div className="cdetail">
                        Trusted Sponsor
                    </div> 
                </div>
            </div>
<div className="profile-card">
                <div className="profile-content">
                    <div className="profile-image">
                      <img src={gouras} alt="first user"></img> 
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
