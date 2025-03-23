'use client';

import React, { useState } from 'react';

interface Track {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  darkColor: string;
}

const Tracks = () => {
  const tracks: Track[] = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      description: 'Create innovative solutions using AI/ML technologies to solve real-world problems. Build models, algorithms, and applications that leverage the power of artificial intelligence.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'bg-blue-100 text-blue-600',
      darkColor: 'bg-blue-900/20 text-blue-400',
    },
    {
      id: 'web3',
      title: 'Web3 & Blockchain',
      description: 'Explore the decentralized web with blockchain, smart contracts, and Web3 technologies. Create applications that leverage the security and transparency of blockchain.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: 'bg-purple-100 text-purple-600',
      darkColor: 'bg-purple-900/20 text-purple-400',
    },
    {
      id: 'health',
      title: 'HealthTech',
      description: 'Develop solutions that address healthcare challenges. From telemedicine platforms to health monitoring apps, create technology that improves healthcare delivery and patient outcomes.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: 'bg-red-100 text-red-600',
      darkColor: 'bg-red-900/20 text-red-400',
    },
    {
      id: 'edtech',
      title: 'EdTech',
      description: 'Revolutionize education with technology. Build platforms, tools, and applications that enhance learning experiences, improve accessibility, and transform educational outcomes.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'bg-green-100 text-green-600',
      darkColor: 'bg-green-900/20 text-green-400',
    },
    {
      id: 'iot',
      title: 'IoT & Hardware',
      description: 'Connect the physical world with digital solutions. Design and build smart devices, sensors, and connected systems that solve problems and enhance everyday experiences.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: 'bg-yellow-100 text-yellow-600',
      darkColor: 'bg-amber-900/20 text-amber-400',
    },
    {
      id: 'fintech',
      title: 'FinTech',
      description: 'Innovate in financial services and technologies. Develop solutions for payments, investments, banking, insurance, or any other aspect of personal and business finance.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'bg-emerald-100 text-emerald-600',
      darkColor: 'bg-emerald-900/20 text-emerald-400',
    },
    {
      id: 'sustainable',
      title: 'Sustainability & Green Tech',
      description: 'Address environmental challenges with technological solutions. Create sustainable innovations that promote conservation, renewable energy, waste reduction, and eco-friendly practices.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'bg-lime-100 text-lime-600',
      darkColor: 'bg-lime-900/20 text-lime-400',
    },
    {
      id: 'ar-vr',
      title: 'AR/VR & Metaverse',
      description: 'Explore the frontiers of extended reality. Create immersive experiences, applications, and games using augmented reality, virtual reality, and metaverse technologies.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'bg-indigo-100 text-indigo-600',
      darkColor: 'bg-indigo-900/20 text-indigo-400',
    },
  ];

  const [activeTab, setActiveTab] = useState(tracks[0].id);

  const getActiveTrack = () => {
    return tracks.find(track => track.id === activeTab) || tracks[0];
  };

  return (
    <section id="tracks" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Hackathon <span className="text-blue-400">Tracks</span></h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Choose from a variety of tracks to showcase your creativity and technical skills
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-xl shadow-sm overflow-hidden border border-slate-700">
            <div className="flex flex-wrap border-b border-slate-700 overflow-x-auto">
              {tracks.map((track) => (
                <button
                  key={track.id}
                  onClick={() => setActiveTab(track.id)}
                  className={`py-4 px-6 text-sm md:text-base font-medium transition-colors ${
                    activeTab === track.id
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-slate-300 hover:text-blue-400'
                  }`}
                >
                  {track.title}
                </button>
              ))}
            </div>
            
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 ${getActiveTrack().darkColor}`}>
                  {getActiveTrack().icon}
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{getActiveTrack().title}</h3>
                  <p className="text-slate-300 mb-6">{getActiveTrack().description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-300">Cash prizes for winners</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-300">Expert mentorship</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-300">Internship opportunities</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-300">Industry recognition</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-slate-300 mb-6">
              Not sure which track to choose? You can decide during the event after brainstorming with your team.
            </p>
            <div className="mt-12 text-center">
              <a 
                href="https://nextquantum2.devfolio.co/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-200"
              >
                Register on Devfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracks; 