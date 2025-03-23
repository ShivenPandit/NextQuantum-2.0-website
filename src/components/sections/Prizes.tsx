import Image from 'next/image';

const Prizes = () => {
  return (
    <section id="prizes" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Amazing <span className="text-blue-400">Prizes</span> to Win
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Compete for cash prizes, exciting gadgets, internship opportunities, and more
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {/* First Prize */}
          <div className="relative z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/30 to-amber-700/30 rounded-xl transform rotate-1 scale-105 -z-10"></div>
            <div className="bg-slate-800 p-8 rounded-xl border border-amber-500/30 text-center h-full flex flex-col shadow-xl">
              <div className="w-20 h-20 mx-auto mb-6 bg-amber-900/30 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">First Prize</h3>
              <div className="text-amber-400 text-4xl font-bold mb-4">₹1,00,000</div>
              <div className="text-slate-300 mb-6 flex-grow">
                <ul className="space-y-2">
                  <li>₹1,00,000 Cash Prize</li>
                  <li>Internship Opportunities</li>
                  <li>Premium Device Bundle</li>
                  <li>Exclusive Mentorship</li>
                  <li>Featured on Partner Platforms</li>
                </ul>
              </div>
              <div className="bg-amber-500/10 p-3 rounded-lg mt-2">
                <p className="text-amber-300 font-medium">+ Trophy & Certificates</p>
              </div>
            </div>
          </div>

          {/* Second Prize */}
          <div className="relative z-10 md:mt-8">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-400/30 to-gray-600/30 rounded-xl transform -rotate-1 scale-105 -z-10"></div>
            <div className="bg-slate-800 p-8 rounded-xl border border-gray-500/30 text-center h-full flex flex-col shadow-xl">
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-700/30 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Second Prize</h3>
              <div className="text-gray-300 text-4xl font-bold mb-4">₹50,000</div>
              <div className="text-slate-300 mb-6 flex-grow">
                <ul className="space-y-2">
                  <li>₹50,000 Cash Prize</li>
                  <li>Internship Opportunities</li>
                  <li>Tech Gadget Bundle</li>
                  <li>Mentorship Sessions</li>
                  <li>Resume Spotlight</li>
                </ul>
              </div>
              <div className="bg-gray-600/10 p-3 rounded-lg mt-2">
                <p className="text-gray-300 font-medium">+ Trophy & Certificates</p>
              </div>
            </div>
          </div>

          {/* Third Prize */}
          <div className="relative z-10 md:mt-16">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-800/30 to-amber-900/30 rounded-xl transform rotate-1 scale-105 -z-10"></div>
            <div className="bg-slate-800 p-8 rounded-xl border border-amber-800/30 text-center h-full flex flex-col shadow-xl">
              <div className="w-20 h-20 mx-auto mb-6 bg-amber-900/20 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Third Prize</h3>
              <div className="text-amber-700 text-4xl font-bold mb-4">₹25,000</div>
              <div className="text-slate-300 mb-6 flex-grow">
                <ul className="space-y-2">
                  <li>₹25,000 Cash Prize</li>
                  <li>Internship Consideration</li>
                  <li>Tech Accessories</li>
                  <li>Workshop Access</li>
                  <li>Featured Projects</li>
                </ul>
              </div>
              <div className="bg-amber-900/10 p-3 rounded-lg mt-2">
                <p className="text-amber-700 font-medium">+ Trophy & Certificates</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-slate-800 p-8 rounded-xl max-w-5xl mx-auto border border-slate-700">
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Special Recognition Awards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 p-5 rounded-lg border border-slate-700">
              <div className="w-12 h-12 bg-purple-900/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2 text-white">Most Innovative</h4>
              <p className="text-slate-400 text-sm">For the most creative and groundbreaking solution</p>
              <p className="text-purple-400 font-bold mt-2">₹15,000</p>
            </div>

            <div className="bg-slate-900 p-5 rounded-lg border border-slate-700">
              <div className="w-12 h-12 bg-blue-900/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2 text-white">Best Technical</h4>
              <p className="text-slate-400 text-sm">For the most technically challenging implementation</p>
              <p className="text-blue-400 font-bold mt-2">₹15,000</p>
            </div>

            <div className="bg-slate-900 p-5 rounded-lg border border-slate-700">
              <div className="w-12 h-12 bg-green-900/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h4 className="font-bold mb-2 text-white">Best UI/UX</h4>
              <p className="text-slate-400 text-sm">For the most user-friendly and visually appealing design</p>
              <p className="text-green-400 font-bold mt-2">₹15,000</p>
            </div>

            <div className="bg-slate-900 p-5 rounded-lg border border-slate-700">
              <div className="w-12 h-12 bg-red-900/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0-2.08.402-2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2 text-white">Social Impact</h4>
              <p className="text-slate-400 text-sm">For solutions that address important social challenges</p>
              <p className="text-red-400 font-bold mt-2">₹15,000</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-300 mb-6 max-w-3xl mx-auto">
            Are you ready to showcase your skills and compete for these exciting prizes? 
            Join us at NextQuantum 2.0 and be part of this amazing hackathon experience.
          </p>
          <a 
            href="https://nextquantum2.devfolio.co/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-200"
          >
            Register on Devfolio to Compete
          </a>
        </div>
      </div>
    </section>
  );
};

export default Prizes; 