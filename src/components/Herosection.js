import React, { useState } from 'react'
import "../components/Herosection.css"
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import Navbar from './Navbar';

function Herosection() {

const[highlightNavBar,setHighLightNavbar] = useState(false);


const handleButtonClick =(buttonType)=>{
    if(buttonType === 'demo' || buttonType === 'signup'){
        setHighLightNavbar(true)
    }
}

  return (
    <div className='hero-container'>
          <Navbar highlightNavbar={highlightNavBar} />
        <div className='feature'>
            <span id='feature'> New Features</span>
            <span id="feature-text">Check out team Dashboard</span>
            <span id='arrow'><EastOutlinedIcon/></span>

        </div>
        <div className='feature-header'>
                <h2>Beautiful analytics to grow smarter</h2>
            </div>
            <div className='feature-subtext'>
                <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
              </div>
   
            <div className='feature-buttons'>
                <div className='featureDemo-button'>
                    <span id='play-icon'><PlayCircleFilledWhiteOutlinedIcon/></span><button onClick={() => handleButtonClick('demo')}>Demo</button>
                </div>
                <div className='FeatureSignup-button'>
                    <button onClick={() => handleButtonClick('demo')}>SignUp</button>
                </div>

            </div>


            <div className='hero-section-img'>
                <img src='/her-section-img.png' alt='hero-section-image' />

            </div>

    </div>
  )
}

export default Herosection