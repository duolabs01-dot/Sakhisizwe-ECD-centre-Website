
import React, { useState } from 'react';

interface NavbarProps {
  activeSection: string;
}

const LOGO_URL = 'https://aeecauwirwkpvoovbsnx.supabase.co/storage/v1/object/public/Sakhisizwe-media/logo/logo.png';

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Programs', id: 'programs' },
    { name: 'Enrol', id: 'enrol' },
    { name: 'Graduation', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log(`Navigating to ${id}`);
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b-4 border-red-50/50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 md:h-28 items-center">
          
          {/* Top Left: Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => handleNavClick('home')} 
              className="flex items-center group focus:outline-none focus:ring-4 focus:ring-red-50 rounded-2xl p-1 transition-all" 
              aria-label="Sakhisizwe Home"
            >
              <img 
                src={LOGO_URL} 
                alt="Sakhisizwe Day Care Emblem" 
                style={{ height: '80px', width: 'auto' }}
                className="object-contain transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-xl drop-shadow-[0_4px_6px_rgba(0,0,0,0.04)]"
                onError={(e) => { (e.target as HTMLImageElement).src = 'logo.png'; }}
              />
            </button>
          </div>

          {/* Right Side: Navigation Links */}
          <div className="flex items-center space-x-6 lg:space-x-12">
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm lg:text-base font-bold transition-all hover:text-[#E63946] relative group px-2 py-1 ${
                    activeSection === link.id ? 'text-[#E63946]' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E63946] transition-all group-hover:w-full ${activeSection === link.id ? 'w-full' : ''}`}></span>
                </button>
              ))}
              <button 
                onClick={() => handleNavClick('admissions')}
                className="btn-hover-lift bg-[#E63946] text-white px-8 py-3 rounded-[24px] text-sm font-bold shadow-lg shadow-red-100 hover:bg-[#C8102E] ml-4"
              >
                Enrol Now ⭐
              </button>
            </div>

            {/* Contact Numbers */}
            <div className="hidden lg:flex flex-col text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 border-l-2 border-gray-100 pl-10">
               <a href="tel:0849406377" className="hover:text-[#E63946] transition-colors mb-1">084 940 6377</a>
               <a href="tel:0670961542" className="hover:text-[#E63946] transition-colors">067 096 1542</a>
            </div>
            
            {/* Mobile Burger */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 text-gray-600 hover:text-[#E63946] transition-all rounded-2xl bg-gray-50 active:scale-90"
                aria-label="Toggle navigation"
              >
                <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-2xl`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300 shadow-2xl">
          <div className="px-6 pt-4 pb-12 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-6 py-5 text-xl font-bold rounded-2xl transition-all ${
                  activeSection === link.id ? 'bg-red-50 text-[#E63946]' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
