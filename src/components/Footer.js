import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer-wrapper'>
        <div className='footer-lists'>
            <div className='list1'>
                <p>products</p>
                <button>Overview</button>
                <button>Features</button><span>new</span>
                <button>Solutions</button>
                <button>Tutorials</button>
                <button>Pricing</button>
                <button>Releases</button>
            </div>
            <div className='list1'>
                <p>Company</p>
                <button>About us</button>
                <button>Careers</button>
                <button>press</button>
                <button>News</button>
                <button>Media kit</button>
                <button>Contact</button>
            </div>
            <div className='list1'>
                <p>Resources</p>
                <button>Blog</button>
                <button>Newsletters</button>
                <button>Events</button>
                <button>Help Center</button>
                <button>Tutorials</button>
                <button>Support</button>
            </div>
            <div className='list1'>
                <p>Use Cases</p>
                <button>Start Ups</button>
                <button>Enterprise</button>
                <button>Government</button>
                <button>SaaS Center</button>
                <button>Market Places</button>
                <button>Ecommerce</button>
            </div>
            <div className='list1'>
                <p>Social</p>
                <button>Twitter</button>
                <button>LinkedIn</button>
                <button>FaceBook</button>
                <button>GitHub</button>
                <button>AngeList</button>
                <button>Dribble</button>
            </div>
            <div className='list1'>
                <p>Legal</p>
                <button>Terms</button>
                <button>Privacy</button>
                <button>Cookies</button>
                <button>Licenses</button>
                <button>Settings</button>
                <button>Contact</button>
            </div>

        </div>
        <div className='footer'>
            <div className='footer-icon'>
            <img src='/icon img.jpeg' alt="icon" />
            <span>Untitled UI</span>
            </div>
            <div>
                <p>© 2077 Untitled UI. All rights reserved.</p>
            </div>

        </div>


    </div>
  )
}

export default Footer