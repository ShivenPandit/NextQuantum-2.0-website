import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About <span className="text-blue-400">NextQuantum 2.0</span></h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Discover what makes NextQuantum 2.0 the premier hackathon experience at Gulzar Group of Institutions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-white">Innovate. Collaborate. Create.</h3>
            <p className="text-slate-300 mb-6">
              NextQuantum 2.0 is a 24-hour hackathon bringing together the brightest minds to collaborate, 
              create, and innovate. Organized by Gulzar Group of Institutions in collaboration with CodeAsters,
              the leading coding society at Gulzar Group of Institutes, this event provides a platform for students, 
              developers, designers, and innovators to transform their ideas into reality.
            </p>
            <p className="text-slate-300 mb-8">
              Whether you're a coding expert, a design wizard, or just passionate about solving real-world problems, 
              NextQuantum 2.0 offers an inclusive environment where creativity and technical skills meet opportunity.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
                <div className="text-blue-400 font-bold text-3xl mb-2">500+</div>
                <div className="text-slate-300">Participants</div>
              </div>
              <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
                <div className="text-green-400 font-bold text-3xl mb-2">100+</div>
                <div className="text-slate-300">Projects</div>
              </div>
              <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
                <div className="text-purple-400 font-bold text-3xl mb-2">30+</div>
                <div className="text-slate-300">Mentors</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 bg-slate-800 p-8 rounded-xl border border-slate-700 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-4 text-white">Why Participate?</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              NextQuantum 2.0 offers more than just a competition - it's a journey of growth, learning, and opportunity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-700">
              <div className="w-12 h-12 bg-blue-900/40 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Learn & Grow</h4>
              <p className="text-slate-300">
                Expand your technical knowledge, pick up new skills, and learn from industry experts through workshops and mentoring sessions.
              </p>
            </div>
            
            <div className="bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-700">
              <div className="w-12 h-12 bg-green-900/40 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Network</h4>
              <p className="text-slate-300">
                Connect with like-minded innovators, industry professionals, and potential employers to build valuable relationships.
              </p>
            </div>
            
            <div className="bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-700">
              <div className="w-12 h-12 bg-amber-900/40 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Win Prizes</h4>
              <p className="text-slate-300">
                Compete for prizes worth ₹50,000 total, including cash awards, internship opportunities, and exclusive merchandise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 