import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">NextQuantum 2.0</h3>
            <p className="text-slate-400 mb-4">
              A premier hackathon organized by Gulzar Group of Institutions, bringing together innovative minds to
              solve real-world problems through technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-slate-400 hover:text-blue-400 transition-colors">About</Link>
              </li>
              <li>
                <Link href="/#tracks" className="text-slate-400 hover:text-blue-400 transition-colors">Tracks</Link>
              </li>
              <li>
                <Link href="/#timeline" className="text-slate-400 hover:text-blue-400 transition-colors">Timeline</Link>
              </li>
              <li>
                <Link href="/#faq" className="text-slate-400 hover:text-blue-400 transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <address className="not-italic text-slate-400">
              <p className="mb-2">Gulzar Group of Institutions</p>
              <p className="mb-2">Khanna, Punjab, India</p>
              <p>
                <a href="mailto:contact@nextquantum.edu" className="hover:text-blue-400 transition-colors">
                  jai.parkash@ggi.ac.in
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} NextQuantum 2.0 | Organized by Gulzar Group of Institutions</p>
          <p className="mt-1 text-xs text-slate-600">Developed by Shiven Pandit and Rishabh Shrivastav</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 