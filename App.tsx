
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Programs } from './components/Programs';
import { Admissions } from './components/Admissions';
import { About } from './components/About';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';
import { UniformSection } from './components/UniformSection';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ExitIntentPopup } from './components/ExitIntentPopup';

const App: React.FC = () => {
  const [view, setView] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => observer.disconnect();
  }, [view]);

  const renderView = () => {
    switch (view) {
      case 'enrol':
        return (
          <section className="animate-in fade-in duration-500 min-h-screen pt-24 bg-[#FFF5F5]">
             <div className="max-w-4xl mx-auto px-4 py-20 text-center">
                <h2 className="text-5xl font-display font-bold mb-6">Enrolment Form</h2>
                <p className="text-xl text-gray-600 mb-12">Please call us at 084 940 6377 for immediate registration! ⭐</p>
                <Admissions />
             </div>
          </section>
        );
      case 'graduation': // Renamed from gallery
        return <section className="animate-in fade-in duration-500 pt-24"><Gallery /></section>;
      case 'home':
      default:
        return (
          <div className="animate-in fade-in duration-700">
            <Hero />
            <section id="features" className="bg-gray-50/50 reveal">
              <Features />
            </section>
            <section id="about" className="reveal">
              <About />
            </section>
            <section id="uniform" className="bg-[#FFF5F5] reveal">
              <UniformSection />
            </section>
            <section id="programs" className="bg-gray-50/50 reveal">
              <Programs />
            </section>
            <section id="admissions" className="reveal">
              <Admissions />
            </section>
            <section id="gallery" className="bg-gray-50/50 reveal">
              <Gallery />
            </section>
            <section id="contact" className="reveal">
              <Contact />
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-red-100 selection:text-[#E63946]">
      <Navbar activeSection={view} />
      <main>
        {renderView()}
      </main>
      <Footer />
      <ChatBot />
      <WhatsAppButton />
      <ExitIntentPopup />
    </div>
  );
};

export default App;
