import React,{useState} from 'react'
import "./CuttingEdge.css"
import QuestionsSection from './QuestionsSection';


function CuttingEdge() {

 const [highlightedQuestion, setHighlightedQuestion] = useState(null);
 const handleLearnMoreClick = (index) => {
  setHighlightedQuestion(index); // Set the highlighted question index
  setTimeout(() => setHighlightedQuestion(null), 2500);
};
const handleGetInTouchClick = () => {
  setHighlightedQuestion(0); 
  setTimeout(() => setHighlightedQuestion(null), 2500); 
};


  return (
    <div className='cuttingEdge-section'>
  <div className='cuttingEdge-uppersection'>
                <p id='cuttingEdge-text'>Features</p>
                <h2>Analytics that feels like it's from the future</h2>
                <p id="cuttingEdge-para">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            </div>
            <div className='cuttingedge-lowerSection'>
                <img src='/her-section-img.png' alt="image1"/>
            </div>
            <div className='mobile-section'>
            <img src='/iPhone 12 Pro mockup.png'  alt="image1"/>

            </div>

            <div className='cuttingEdge-features'>
            <div className='feature1'>
                        <img src='/Feature/message-chat-circle.png' alt='image1' />
                        <p className='para1'>Share Team Inboxes</p>
                        <p className='para2'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                        <span  onClick={()=>handleLearnMoreClick(0)} className='feature-learnMore'>Learn More <img className='feature-learnMore-arrow' src='/features-arrow-icon.png' alt='arrow1'/></span>
                        </div>
                    <div className='feature1'>
                        <img src='/Feature/zap.png' alt='image2' />
                        <p className='para1'>Deliver instant answers</p>
                        <p className='para2'>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
                        <div>
                        </div>
                        <span onClick={()=>handleLearnMoreClick(1)}   className='feature-learnMore'>Learn More <img className='feature-learnMore-arrow' src='/features-arrow-icon.png' alt='arrow1'/></span>
                        </div>
                    <div className='feature1'>
                        <img src='/Feature/chart-breakout-square.png' alt='image3' />
                        <p className='para1'>Manage your team with reports</p>
                        <p className='para2'>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
                        <span  onClick={()=>handleLearnMoreClick(2)} className='feature-learnMore'>Learn More <img className='feature-learnMore-arrow' src='/features-arrow-icon.png' alt='arrow1'/></span>

                        </div>

            </div>
            <QuestionsSection highlightedQuestion={highlightedQuestion} handleGetInTouchClick={handleGetInTouchClick} />
    
    </div>
  )
}

export default CuttingEdge