import React from 'react';
import Navbar from './components/Navbar';
import { LanguageProvider } from './context/LanguageContext';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import BrandStory from './components/BrandStory';
import Experiences from './components/Experiences';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="antialiased selection:bg-[#DAB66E] selection:text-[#3E2723] overflow-x-hidden w-full relative">
        <div className="bg-noise"></div>

        <Navbar />

        <main>
          <Hero />
          <MarqueeBanner />
          <BrandStory />
          <Experiences />
          <WhyChooseUs />
          <Gallery />
          <Testimonials />
          <Booking />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
