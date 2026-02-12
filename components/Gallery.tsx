
import React, { useState, useEffect } from 'react';

const GRADUATION_IMAGES = [
  'https://aeecauwirwkpvoovbsnx.supabase.co/storage/v1/object/public/Sakhisizwe-media/graduations/WhatsApp%20Image%202026-02-11%20at%2010.09.092.jpeg',
  'https://aeecauwirwkpvoovbsnx.supabase.co/storage/v1/object/public/Sakhisizwe-media/special-occasions/WhatsApp%20Image%202026-02-11%20at%2010.09.07.jpeg',
  'https://aeecauwirwkpvoovbsnx.supabase.co/storage/v1/object/public/Sakhisizwe-media/special-occasions/WhatsApp%20Image%202026-02-11%20at%2010.09.08.jpeg',
  'https://aeecauwirwkpvoovbsnx.supabase.co/storage/v1/object/public/Sakhisizwe-media/special-occasions/WhatsApp%20Image%202026-02-11%20at%2010.13.53.jpeg',
  'https://aeecauwirwkpvoovbsnx.supabase.co/storage/v1/object/public/Sakhisizwe-media/uniform/WhatsApp%20Image%202026-02-11%20at%2010.13.55.jpeg'
];

export const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % GRADUATION_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="gallery" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-[#E63946] font-bold uppercase tracking-widest text-sm">A Milestone to Remember</h2>
        <h3 className="text-4xl lg:text-6xl font-bold font-display text-gray-900">Our Graduates</h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg lg:text-xl font-medium leading-relaxed">
          Celebrating the achievement of our stars as they transition to primary school. Every photo represents a journey of love and learning. ⭐
        </p>
      </div>

      <div className="relative group">
        <div className="absolute -inset-4 bg-[#E63946]/5 rounded-[4rem] -rotate-1"></div>
        <div className="relative aspect-video md:aspect-[21/9] overflow-hidden rounded-[3.5rem] shadow-2xl border-4 border-white">
          {GRADUATION_IMAGES.map((src, idx) => (
            <div 
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <img 
                src={src} 
                className="w-full h-full object-cover" 
                alt={`Graduation Milestone ${idx + 1}`} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-12">
                <p className="text-white text-3xl font-display font-bold">Our Shining Alumni ⭐</p>
              </div>
            </div>
          ))}
          
          {/* Slideshow Progress Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
            {GRADUATION_IMAGES.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 transition-all rounded-full ${idx === currentIndex ? 'w-12 bg-white' : 'w-2 bg-white/40'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="text-center pt-8 space-y-8">
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="gallery.html#slides" 
            className="btn-hover-lift inline-flex items-center justify-center px-12 py-6 bg-white text-[#E63946] border-4 border-[#E63946] font-bold rounded-2xl shadow-xl hover:bg-red-50 transition-all text-xl"
          >
            View Milestone Pictures ⭐
          </a>
          <a 
            href="gallery.html" 
            className="btn-hover-lift inline-flex items-center justify-center px-12 py-6 bg-[#E63946] text-white font-bold rounded-2xl shadow-2xl hover:bg-[#C8102E] transition-all text-xl"
          >
            Full Graduation Gallery 🎓
          </a>
        </div>
        <p className="text-gray-400 font-bold uppercase tracking-[0.4em] text-[10px] italic">
          Nurturing Alexandra's Stars since 2014
        </p>
      </div>
    </div>
  );
};
