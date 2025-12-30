
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Commitment from './components/Commitment';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Stats />
        <Expertise />
        <Projects />
        <Clients />
        <Commitment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
