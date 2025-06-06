
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Ministries from '@/components/Ministries';
import Meetings from '@/components/Meetings';
import Cells from '@/components/Cells';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Ministries />
      <Meetings />
      <Cells />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
