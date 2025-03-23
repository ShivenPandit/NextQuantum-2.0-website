'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "What is NextQuantum 2.0?",
      answer: "NextQuantum 2.0 is a 24-hour hackathon organized by Gulzar Group of Institutions in collaboration with CodeAsters, the leading coding society at Gulzar Group of Institutes. It's an opportunity for students, developers, and innovators to collaborate, create solutions, and compete for exciting prizes."
    },
    {
      question: "Who can participate?",
      answer: "NextQuantum 2.0 is open to all college students and coding enthusiasts. Participants can form teams of 2-6 members from the same institutions."
    },
    {
      question: "How much does it cost to participate?",
      answer: "The registration fee is ₹500 per team. This covers accommodation, meals during the event, swag, and access to all workshops and sessions."
    },
    {
      question: "Do I need to bring my own computer?",
      answer: "Yes, all participants are required to bring their own laptops. Make sure to bring chargers and any other equipment you might need for your project."
    },
    {
      question: "What kind of projects can I build?",
      answer: "You can build any project that aligns with the hackathon tracks and themes. This includes web/mobile applications, IoT solutions, AI/ML models, blockchain applications, and more. The key is innovation and addressing real-world problems."
    },
    {
      question: "Will there be food and accommodation?",
      answer: "Yes, meals will be provided during the event. For participants coming from outside the city, we offer accommodation facilities on a first-come, first-served basis (additional charges may apply)."
    },
    {
      question: "How are the projects judged?",
      answer: "Projects will be evaluated based on innovation, technical complexity, practicality, impact, and presentation. Our panel of judges includes industry experts, academics, and sponsors who will review each project."
    },
    {
      question: "What prizes can I win?",
      answer: "NextQuantum 2.0 offers prizes worth ₹30,000 total including cash awards, internship opportunities, gadgets, and exclusive merchandise. Specific track winners and special categories will also receive awards."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Frequently Asked <span className="text-blue-400">Questions</span></h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Find answers to common questions about NextQuantum 2.0
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full text-left p-5 rounded-lg flex justify-between items-center ${
                  activeIndex === index ? 'bg-slate-700 shadow-md' : 'bg-slate-900 hover:bg-slate-700'
                } transition duration-200 border border-slate-700`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-white">{item.question}</span>
                <svg
                  className={`w-5 h-5 text-blue-400 transform transition-transform duration-200 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {activeIndex === index && (
                <div className="bg-slate-800 p-5 rounded-b-lg mt-1 text-slate-300 border border-slate-700 border-t-0">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-6">
            Still have questions? Contact us directly
          </p>
          <a
            href="mailto:jai.parkash@ggi.ac.in"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 