import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md shadow-md border-b border-slate-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-blue-400">NextQuantum <span className="text-white">2.0</span></h1>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#about" className="font-medium text-slate-300 hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link href="/#tracks" className="font-medium text-slate-300 hover:text-blue-400 transition-colors">
            Tracks
          </Link>
          <Link href="/#timeline" className="font-medium text-slate-300 hover:text-blue-400 transition-colors">
            Timeline
          </Link>
          <Link href="/#faq" className="font-medium text-slate-300 hover:text-blue-400 transition-colors">
            FAQ
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link 
            href="/#register" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
          >
            Register
          </Link>
          
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 