'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Register = () => {
  return (
    <section id="register" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Register for <span className="text-blue-400">NextQuantum 2.0</span></h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Complete these two steps to secure your spot in the most exciting hackathon of the year
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative mb-12">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>
            <div className="flex flex-col gap-12">
              {/* Step 1 */}
              <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 relative">
                <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold z-10">1</div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-slate-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Step 1: Register on Devfolio</h3>
                  <p className="text-slate-300 max-w-2xl mx-auto mb-8">
                    We've partnered with Devfolio to start the registration process. Click the button below to register your team for NextQuantum 2.0.
                  </p>
                  
                  <a 
                    href="https://nextquantum2.devfolio.co/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Register on Devfolio
                  </a>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 relative">
                <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold z-10">2</div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-slate-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Step 2: Complete Google Form</h3>
                  <p className="text-slate-300 max-w-2xl mx-auto mb-8">
                    After registering on Devfolio, please fill out our Google Form to complete your registration process and provide additional information.
                  </p>
                  
                  <a 
                    href="https://forms.gle/Evt6RVpEazmyrJBN9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Fill Google Form
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <div className="w-12 h-12 bg-blue-900/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2 text-white">Limited Spots</h4>
              <p className="text-slate-400">Registration is limited to 500 participants. Secure your spot early to avoid disappointment.</p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <div className="w-12 h-12 bg-green-900/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2 text-white">Team Registration</h4>
              <p className="text-slate-400">Register your team (2-4 members) through Devfolio. Individual participants can also apply and will be matched with teams.</p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <div className="w-12 h-12 bg-purple-900/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2 text-white">Important Dates</h4>
              <p className="text-slate-400">Registration closes on March 25, 2025. The hackathon runs from April 4-5, 2025.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm">
              <span className="font-semibold text-white">Important:</span> Both steps must be completed to confirm your registration.
            </p>
            <p className="text-slate-400 text-sm mt-2">
              For any registration issues or queries, please contact us at <a href="mailto:jai.parkash@ggi.ac.in" className="text-blue-400 hover:underline">jai.parkash@ggi.ac.in</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register; 