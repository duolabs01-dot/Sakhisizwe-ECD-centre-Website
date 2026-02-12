
import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabase';

export const Hero: React.FC = () => {
  const [bgUrl, setBgUrl] = useState('');

  useEffect(() => {
    // Dynamically fetch the hero background from Supabase
    const { data } = supabase.storage.from('branding').getPublicUrl('hero_bg.jpg');
    if (data?.publicUrl) {
      setBgUrl(data.publicUrl);
    }
  }, []);

  return (
    <div className="relative">
      <div className="relative w-full h-[750px] lg:h-[900px] overflow-hidden pt-20">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          {bgUrl ? (
            <div className="absolute inset-0">
              <img 
                src={bgUrl} 
                className="w-full h-full object-cover opacity-20" 
                alt="Sakhisizwe children playing" 
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#FFF5F5] via-transparent to-white"></div>
            </div>
          ) : (
            <div className="absolute inset-0 bg-[#FFF5F5] opacity-50">
              <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-100 blur-3xl opacity-30"></div>
              <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-yellow-100 blur-3xl opacity-30"></div>
            </div>
          )}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center relative z-10 pt-10">
          <div className="space-y-8 lg:space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            
            <div className="relative group">
              <div className="absolute -inset-6 bg-white rounded-3xl shadow-xl -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative bg-white border-2 border-dashed border-gray-200 px-6 py-6 lg:px-10 lg:py-8 rounded-2xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black font-display tracking-tight flex justify-center space-x-1 sm:space-x-2 md:space-x-3 mb-2" aria-label="Sakhisizwe">
                   <span className="text-[#E63946]">S</span>
                   <span className="text-[#2D6A4F]">A</span>
                   <span className="text-[#1D3557]">K</span>
                   <span className="text-[#F1C40F]">H</span>
                   <span className="text-[#E63946]">I</span>
                   <span className="text-[#2D6A4F]">S</span>
                   <span className="text-[#1D3557]">I</span>
                   <span className="text-[#F1C40F]">Z</span>
                   <span className="text-[#E63946]">W</span>
                   <span className="text-[#2D6A4F]">E</span>
                </h1>
                <p className="text-xl sm:text-2xl lg:text-4xl font-black font-display text-gray-800 tracking-widest uppercase">
                   Day Care <span className="text-[#E63946]">Centre</span>
                </p>
              </div>
              <div className="flex justify-center -space-x-4 mt-6 md:mt-8 opacity-90">
                {['👦🏾', '👧🏾', '🧒🏾', '👧🏾', '👦🏾'].map((kid, i) => (
                  <div key={i} className="text-5xl lg:text-6xl filter drop-shadow-lg hover:-translate-y-3 transition-transform cursor-default select-none">
                    {kid}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <p className="text-lg lg:text-3xl font-black font-display text-gray-700 uppercase tracking-[0.2em] md:tracking-[0.3em] italic">
                Building Stars For The Future
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 pt-4">
                {['Grade R Readiness', 'Daycare Facilities', 'Enrolling for 2026'].map((item, idx) => (
                  <span key={idx} className="bg-[#E63946] text-white px-4 py-1.5 lg:px-6 lg:py-2 rounded-full font-bold text-xs lg:text-lg shadow-md border-b-4 border-black/20 flex items-center">
                    <span className="star-pulse mr-2">⭐</span> {item}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center pt-6 md:pt-8 w-full max-w-md sm:max-w-none">
              <a 
                href="enrol.html"
                aria-label="Enrol your child today"
                className="btn-hover-lift px-10 py-5 bg-[#E63946] text-white rounded-[24px] flex items-center justify-center font-bold text-lg lg:text-xl shadow-2xl shadow-red-200"
              >
                <span className="star-pulse mr-2">🌟</span> Enrol Your Star Today
              </a>
              <a 
                href="contact.html"
                aria-label="Schedule a school tour"
                className="btn-hover-lift px-10 py-5 bg-white text-[#E63946] border-4 border-[#E63946] rounded-[24px] flex items-center justify-center font-bold text-lg lg:text-xl shadow-sm"
              >
                Schedule a Tour
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#E63946] relative z-20 overflow-hidden py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center text-center">
             <div className="space-y-1">
               <p className="text-yellow-300 font-black font-display text-xl lg:text-2xl uppercase tracking-widest">Business Hours</p>
               <p className="text-white font-bold text-lg lg:text-xl">Mon - Fri: 6AM - 6PM</p>
             </div>
             <div className="flex justify-center space-x-2">
               {[1, 2, 3].map(i => (
                 <div key={i} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-4 border-white shadow-xl hover:scale-110 transition-transform cursor-pointer"></div>
               ))}
             </div>
             <div className="space-y-1">
               <p className="text-yellow-300 font-black font-display text-xl lg:text-2xl uppercase tracking-widest italic">12 Years Legacy</p>
               <p className="text-white font-bold text-lg lg:text-xl flex flex-col">
                  <span>In Alexandra Since 2014</span>
                  <div className="flex flex-col mt-2 space-y-1">
                    <a href="tel:0849406377" className="text-white hover:text-yellow-300 text-sm underline decoration-dotted">Call: 084 940 6377</a>
                    <a href="tel:0670961542" className="text-white hover:text-yellow-300 text-sm underline decoration-dotted">Call: 067 096 1542</a>
                  </div>
               </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
