import React from 'react';
import Navbar from './components/Navbar';
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
    <div className="antialiased selection:bg-[#E8987E] selection:text-[#2C3329]">
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
  );
}

export default App;
