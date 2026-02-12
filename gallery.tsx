
import React, { useState, useEffect, useCallback } from 'react';
import { createRoot } from 'react-dom/client';

const ALL_GRADUATION_IMAGES = [
  'https://aeecauwirwkpvoovbsnx.supabase.co/storage/v1/object/public/Sakhisizwe-media/graduations/WhatsApp%20Image%202026-02-11%20at%2010.09.092.jpeg',
  'https://aeecauwirwkpvoovbsnx.supabase.co/storage/v1/object/public/Sakhisizwe-media/special-occasions/WhatsApp%20Image%202026-02-11%20at%2010.09.07.jpeg',
  'https://aeecauwirwkpvoovbsnx.supabase.co/storage/v1/object/public/Sakhisizwe-media/special-occasions/WhatsApp%20Image%202026-02-11%20at%2010.09.08.jpeg',
  'https://aeecauwirwkpvoovbsnx.supabase.co/storage/v1/object/public/Sakhisizwe-media/special-occasions/WhatsApp%20Image%202026-02-11%20at%2010.09.081.jpeg',
  'https://aeecauwirwkpvoovbsnx.supabase.co/storage/v1/object/public/Sakhisizwe-media/special-occasions/WhatsApp%20Image%202026-02-11%20at%2010.09.082.jpeg',
  'https://aeecauwirwkpvoovbsnx.supabase.co/storage/v1/object/public/Sakhisizwe-media/special-occasions/WhatsApp%20Image%202026-02-11%20at%2010.09.083.jpeg',
  'https://aeecauwirwkpvoovbsnx.supabase.co/storage/v1/object/public/Sakhisizwe-media/special-occasions/WhatsApp%20Image%202026-02-11%20at%2010.09.09.jpeg',
  'https://aeecauwirwkpvoovbsnx.supabase.co/storage/v1/object/public/Sakhisizwe-media/special-occasions/WhatsApp%20Image%202026-02-11%20at%2010.09.091.jpeg',
  'https://aeecauwirwkpvoovbsnx.supabase.co/storage/v1/object/public/Sakhisizwe-media/special-occasions/WhatsApp%20Image%202026-02-11%20at%2010.09.10.jpeg',
  'https://aeecauwirwkpvoovbsnx.supabase.co/storage/v1/object/public/Sakhisizwe-media/special-occasions/WhatsApp%20Image%202026-02-11%20at%2010.13.53.jpeg',
  'https://aeecauwirwkpvoovbsnx.supabase.co/storage/v1/object/public/Sakhisizwe-media/special-occasions/WhatsApp%20Image%202026-02-11%20at%2010.13.531.jpeg',
  'https://aeecauwirwkpvoovbsnx.supabase.co/storage/v1/object/public/Sakhisizwe-media/uniform/WhatsApp%20Image%202026-02-11%20at%2010.13.55.jpeg',
  'https://aeecauwirwkpvoovbsnx.supabase.co/storage/v1/object/public/Sakhisizwe-media/uniform/WhatsApp%20Image%202026-02-11%20at%2010.13.551.jpeg',
  'https://aeecauwirwkpvoovbsnx.supabase.co/storage/v1/object/public/Sakhisizwe-media/uniform/WhatsApp%20Image%202026-02-11%20at%2010.13.552.jpeg',
  'https://aeecauwirwkpvoovbsnx.supabase.co/storage/v1/object/public/Sakhisizwe-media/uniform/WhatsApp%20Image%202026-02-11%20at%2010.13.56.jpeg'
];

const GalleryPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    // Handle deep linking to slides
    if (window.location.hash === '#slides') {
      setSelectedIndex(0);
    }
  }, []);

  const nextSlide = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! + 1) % ALL_GRADUATION_IMAGES.length);
    }
  }, [selectedIndex]);

  const prevSlide = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! - 1 + ALL_GRADUATION_IMAGES.length) % ALL_GRADUATION_IMAGES.length);
    }
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, nextSlide, prevSlide]);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white border-b-4 border-red-50 py-20 text-center relative overflow-hidden">
        <div className="absolute top-4 left-4 lg:top-10 lg:left-10">
          <a href="index.html" className="inline-flex items-center text-[#E63946] font-bold px-6 py-3 bg-red-50 rounded-full hover:bg-red-100 transition-all group">
            <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> Back to Home
          </a>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 mt-12 lg:mt-0">
          <div className="inline-block bg-[#FFD700] text-gray-900 px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest mb-6 shadow-sm">
            Milestone Gallery ⭐
          </div>
          <h1 className="text-5xl lg:text-8xl font-display font-bold text-gray-900 mb-6">
            Our <span className="text-[#E63946]">Graduates</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg lg:text-xl leading-relaxed">
            Every child at Sakhisizwe is a star. This gallery celebrates the growth, joy, and successful journey of our beautiful alumni.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16">
        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {ALL_GRADUATION_IMAGES.map((src, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className="gallery-item group relative cursor-pointer bg-white p-4 rounded-[2.5rem] shadow-xl border-2 border-transparent hover:border-[#E63946] transition-all overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-[1.8rem]">
                <img 
                  src={src} 
                  alt={`Graduation Moment ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="mt-5 px-2 flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-black text-[#E63946] uppercase tracking-[0.2em]">Our Stars</span>
                  <p className="font-bold text-gray-800 line-clamp-1 mt-1 leading-tight">Milestone Moment</p>
                </div>
                <div className="text-2xl opacity-20 group-hover:opacity-100 group-hover:text-[#FFD700] transition-all">⭐</div>
              </div>
              <div className="absolute inset-4 bg-[#E63946]/90 opacity-0 group-hover:opacity-100 transition-opacity rounded-[1.8rem] flex items-center justify-center pointer-events-none">
                 <div className="text-center text-white p-6">
                   <i className="fa-solid fa-expand text-4xl mb-4"></i>
                   <p className="font-bold uppercase tracking-widest text-xs">View Slideshow</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Slideshow Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-md flex flex-col items-center justify-center animate-in fade-in duration-300"
          onClick={() => { setSelectedIndex(null); window.history.pushState(null, '', 'gallery.html'); }}
        >
          {/* Controls */}
          <button 
            className="absolute top-8 right-8 text-white text-5xl hover:text-[#E63946] transition-colors p-4 z-[110]"
            onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); window.history.pushState(null, '', 'gallery.html'); }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          <button 
            className="absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 text-white text-4xl lg:text-6xl hover:text-[#E63946] transition-all p-4 z-[110] bg-black/20 rounded-full"
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <button 
            className="absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 text-white text-4xl lg:text-6xl hover:text-[#E63946] transition-all p-4 z-[110] bg-black/20 rounded-full"
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          
          <div className="max-w-6xl w-full px-4 flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl overflow-hidden text-center transition-all duration-500 transform">
              <img 
                src={ALL_GRADUATION_IMAGES[selectedIndex]} 
                alt="Selected Milestone"
                className="max-h-[70vh] lg:max-h-[80vh] w-auto object-contain rounded-[1.5rem] mx-auto shadow-inner"
              />
              
              <div className="absolute top-8 right-8 bg-[#FFD700] text-gray-900 px-4 py-2 rounded-full font-black text-xs shadow-lg">
                IMAGE {selectedIndex + 1} / {ALL_GRADUATION_IMAGES.length}
              </div>
            </div>

            <div className="mt-8 bg-white p-8 rounded-[2.5rem] shadow-2xl w-full max-w-4xl flex items-center justify-between border-b-8 border-red-50">
              <div className="flex-1">
                <p className="text-xs font-black uppercase tracking-[0.3em] mb-2 text-[#E63946]">Alumni Celebration</p>
                <h2 className="text-3xl font-display font-bold leading-tight text-gray-900">
                  Building Stars for the Future ⭐
                </h2>
              </div>
              <div className="text-5xl ml-6 text-yellow-400 star-pulse">🎓</div>
            </div>
          </div>
          
          {/* Thumbnails Bar */}
          <div className="hidden lg:flex mt-12 space-x-2 overflow-x-auto max-w-5xl px-4 py-2 hide-scrollbar">
            {ALL_GRADUATION_IMAGES.map((src, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-4 transition-all ${idx === selectedIndex ? 'border-[#E63946] scale-110' : 'border-transparent opacity-50'}`}
              >
                <img src={src} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const rootElement = document.getElementById('gallery-root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<GalleryPage />);
}
