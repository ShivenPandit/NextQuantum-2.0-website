import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Tracks from '@/components/sections/Tracks';
import Timeline from '@/components/sections/Timeline';
import Register from '@/components/sections/Register';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Tracks />
        <Timeline />
        <Register />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
