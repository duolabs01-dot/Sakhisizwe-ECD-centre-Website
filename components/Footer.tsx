
import React from 'react';

const LOGO_URL = 'https://aeecauwirwkpvoovbsnx.supabase.co/storage/v1/object/public/Sakhisizwe-media/logo/logo.png';

export const Footer: React.FC = () => {
  const scrollTo = (id: string, href?: string) => {
    if (href && href.includes('.html')) {
      window.location.href = href;
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#E63946] text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-10 right-10 text-[180px] opacity-5 pointer-events-none rotate-12 star-pulse">⭐</div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex flex-col items-start">
              <a href="index.html" className="focus:outline-none focus:ring-4 focus:ring-white/20 rounded-[32px] mb-8 group">
                <div className="bg-white/95 backdrop-blur-sm rounded-[32px] p-4 shadow-2xl transition-all duration-500 group-hover:scale-105 border-b-8 border-black/10">
                  <img 
                    src={LOGO_URL} 
                    alt="Sakhisizwe Day Care Emblem" 
                    style={{ height: '80px', width: 'auto' }}
                    className="object-contain"
                  />
                </div>
              </a>
              <p className="text-red-50 leading-relaxed font-medium text-lg">
                Established in 2014, we are a safe, family-oriented home dedicated to building the future of our stars in Alexandra through love and early learning.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8 text-[#FFD700] uppercase tracking-[0.2em] font-display">Navigation</h3>
            <ul className="space-y-4 text-red-50 font-bold text-lg">
              <li><a href="index.html" className="hover:text-[#FFD700] transition-colors block">Home</a></li>
              <li><button onClick={() => scrollTo('programs')} className="hover:text-[#FFD700] transition-colors text-left block w-full">Programs</button></li>
              <li><a href="enrol.html" className="hover:text-[#FFD700] transition-colors block">Enrolment</a></li>
              <li><a href="gallery.html" className="hover:text-[#FFD700] transition-colors block">Graduation</a></li>
              <li><a href="contact.html" className="hover:text-[#FFD700] transition-colors block">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8 text-[#FFD700] uppercase tracking-[0.2em] font-display">Our Home</h3>
            <div className="space-y-6 text-red-50 font-medium text-lg">
              <p className="flex items-start">
                <i className="fa-solid fa-location-dot mt-1.5 mr-4 text-red-200"></i>
                <span>3504 Far East Bank,<br />Alexandra, Johannesburg,<br />South Africa</span>
              </p>
              <div className="space-y-4 pt-4">
                <a href="tel:0849406377" className="block font-bold text-white text-2xl hover:text-[#FFD700] transition-colors flex items-center">
                  <i className="fa-solid fa-phone mr-4 text-sm"></i>084 940 6377
                </a>
                <a href="tel:0670961542" className="block font-bold text-white text-2xl hover:text-[#FFD700] transition-colors flex items-center">
                  <i className="fa-solid fa-phone-flip mr-4 text-sm"></i>067 096 1542
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8 text-[#FFD700] uppercase tracking-[0.2em] font-display">Nurture Hours</h3>
            <ul className="space-y-4 text-red-50 font-bold text-lg">
              <li className="flex justify-between border-b border-white/10 pb-3">
                <span>Mon - Fri</span>
                <span>6AM - 6PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-3">
                <span>Weekends</span>
                <span>Closed</span>
              </li>
              <li className="pt-8">
                <div className="bg-[#C8102E] p-8 rounded-[32px] border border-white/10 shadow-inner group hover:bg-red-800 transition-all cursor-default relative overflow-hidden text-center">
                  <p className="text-[#FFD700] font-display font-bold text-base mb-2 uppercase tracking-[0.1em]">
                    Building Stars ⭐
                  </p>
                  <p className="text-sm font-medium leading-relaxed opacity-90 italic">Nurturing Alexandra's future leaders since 2014.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 text-center text-red-200 text-[10px] font-bold uppercase tracking-[0.3em]">
          <p>© 2026 Sakhisizwe Day Care Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
