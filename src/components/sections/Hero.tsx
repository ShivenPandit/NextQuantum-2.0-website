import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 flex flex-col items-start">
            <div className="inline-block mb-4 px-4 py-1 bg-blue-900/50 text-blue-300 rounded-full font-medium">
              April 4-5, 2025 • Gulzar Group of Institutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              <span className="text-blue-400">NextQuantum</span> <span className="relative">2.0</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl">
              Join the biggest and most innovative hackathon organized by Gulzar Group of Institutions 
              in collaboration with CodeAsters, the leading coding society at Gulzar Group of Institutes.
              Unleash your creativity, collaborate with talented individuals, and build solutions that matter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="https://nextquantum2.devfolio.co/"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors text-center"
              >
                Register on Devfolio
              </Link>
              <Link 
                href="/#about" 
                className="border border-blue-500 text-blue-300 hover:bg-blue-900/30 px-8 py-3 rounded-full font-medium transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
            
            <div className="flex flex-col gap-2">
              <p className="text-slate-400 font-medium">Prizes Worth</p>
              <p className="text-3xl font-bold text-white">₹30,000</p>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-500/20 rounded-full"></div>
              
              <div className="relative z-10 bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700">
                <div className="h-56 bg-slate-700 rounded-lg overflow-hidden">
                  <Image 
                    src="/placeholder-hackathon.jpg" 
                    alt="NextQuantum 2.0 Hackathon" 
                    width={400}
                    height={224}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    className="rounded-lg"
                  />
                </div>
                
                <div className="mt-8 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white">24 Hours</h3>
                      <p className="text-sm text-slate-400">Non-stop hacking</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-900/50 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white">500+ Participants</h3>
                      <p className="text-sm text-slate-400">From across the country</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-900/50 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white">10+ Tracks</h3>
                      <p className="text-sm text-slate-400">For diverse innovations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 