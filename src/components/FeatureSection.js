import React from 'react'
import "../components/FeatureSection.css"

function FeatureSection() {
    return (
        <div className='features-section'>
            <div className='feature-uppersection'>
                <p id='feature-text'>Features</p>
                <h2>Analytics that feels like it's from the future</h2>
                <p id="features-para">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            </div>
            <div className='feature-lowersection'>
             
                    <div className='feature1'>
                        <img src='/Feature/message-chat-circle.png' alt='image1' />
                        <p className='para1'>Share Team Inboxes</p>
                        <p className='para2'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                        </div>
                    <div className='feature1'>
                        <img src='/Feature/zap.png' alt='image2' />
                        <p className='para1'>Deliver instant answers</p>
                        <p className='para2'>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
                        </div>
                    <div className='feature1'>
                        <img src='/Feature/chart-breakout-square.png' alt='image3' />
                        <p className='para1'>Manage your team with reports</p>
                        <p className='para2'>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
                        </div>
                    <div className='feature1'>
                        <img src='/Feature/message-smile-circle.png'  alt='image4'/>
                        <p className='para1'>Connect with customers</p>
                        <p className='para2'>Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
                        </div>
                    <div className='feature1'>
                        <img src='/Feature/command.png' alt='image5' />
                        <p className='para1'>Connect the tools you already use</p>
                        <p className='para2'>Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>
                        </div>
                    <div className='feature1'>
                        <img src='/Feature/message-heart-circle.png' alt='image6' />
                        <p className='para1'>Our people make the difference</p>
                        <p className='para2'>We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
                        </div>
                </div>

            </div>

       
    )
}

export default FeatureSection