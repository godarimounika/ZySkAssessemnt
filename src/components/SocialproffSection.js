import React from 'react'
import "../components/SocialProffSection.css"

function SocialproffSection() {
  return (
    <div className='social-proof-section'>
        <div className='social-proof-text'>
            <p>Join 4,000+ companies already growing</p>
        </div>
        <div className='social-proof-icons'>
            <div className='icons'>
              <div><img src='/social-profile/icon1.jpg' alt='profile-icon-1'/></div>
              <div  className='icon-text'><h2>BoltShift</h2></div>
            </div>
            <div  className='icons'>
              <div><img src='/social-profile/icon2.jpg'/></div>
              <div  className='icon-text'><h2>LightBox</h2></div>
            </div>
            <div  className='icons'>
              <div><img src='/social-profile/icon3.png'/></div>
              <div className='icon-text'><h2>FeatherDev</h2></div>
            </div>
            <div  className='icons'>
              <div><img src='/social-profile/icon4.png'/></div>
              <div  className='icon-text'><h2>Spherule</h2></div>
            </div>
            <div  className='icons'>
              <div><img src='/social-profile/icon5.png'/></div>
              <div  className='icon-text'><h2>GlobalBank</h2></div>
            </div>
            <div  className='icons'>
              <div><img src='/social-profile/icon6.png'/></div>
              <div  className='icon-text'><h2>Nietzsche</h2></div>
            </div>

        </div>
    </div>
  )
}

export default SocialproffSection