import React, { useState } from 'react';
import "./QuestionSection.css"

function QuestionsSection({ highlightedQuestion, handleGetInTouchClick }) {
  const [activeQuestion, setActiveQuestion] = useState(null);


  const toggleQuestions = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };
 

  const questions = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "How does billing work?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
  ];

  return (
    <div className="Questions-section">
      <div className="question-header">
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know about the product and billing.</p>
      </div>
      {questions.map((item, index) => {
        return (
          <div
          className={`question1 ${highlightedQuestion !== null ? 'highlighted' : ''}`}
          key={index}
        >
            <div className="question-row">
              <p onClick={() => toggleQuestions(index)} className="question-title">
                {item.question}
              </p>
              <div
                className="question-plusIcon"
                onClick={() => toggleQuestions(index)}
              >
                {activeQuestion === index ? (
                  <img src="/minusicon.png" alt="minus-icon" />
                ) : (
                  <img src="/plusIcon.png" alt="plus-icon" />
                )}
              </div>
            </div>
            {activeQuestion === index && <p className="answer">{item.answer}</p>}
          </div>
        );
      })}

      <div className='profile-group'>
        <div>
            <img src='/Avatar group.png'/>
            </div>
            <div>
                <h2>Still have questions?</h2>
                <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                <button onClick={handleGetInTouchClick}>Get In Touch</button>
            </div>

      </div>
    </div>
  );
 
}

export default QuestionsSection;
