
import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabase';

export const About: React.FC = () => {
  const [aboutImg, setAboutImg] = useState('https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=1200&q=80');

  useEffect(() => {
    // Attempt to fetch specific about image from storage
    const { data } = supabase.storage.from('branding').getPublicUrl('about_hero.png');
    if (data?.publicUrl) {
      // We check if it exists by a small hack or just assume it might
      setAboutImg(data.publicUrl);
    }
  }, []);

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 overflow-hidden bg-white">
      {/* Our Story & Reputation */}
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative order-2 lg:order-1 group">
          <div className="absolute -inset-4 bg-red-50 rounded-[3rem] transform -rotate-2 transition-transform group-hover:rotate-0"></div>
          <img 
            src={aboutImg} 
            alt="African children learning at Sakhisizwe" 
            className="rounded-[2.5rem] shadow-2xl relative z-10 h-[650px] w-full object-cover transition-transform group-hover:scale-[1.01]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=1200&q=80';
            }}
          />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#FFD700] rounded-full -z-0 blur-3xl opacity-20"></div>
          <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-xl z-20 text-center border border-red-50">
            <p className="text-[#E63946] font-bold text-2xl font-display mb-2">⭐ A Nurturing Home</p>
            <p className="text-gray-600 font-medium">
              "We provide the safe foundation every future star needs to shine brightly in our Alexandra community."
            </p>
          </div>
        </div>

        <div className="space-y-10 order-1 lg:order-2">
          <div className="space-y-6">
            <h2 className="text-[#E63946] font-bold uppercase tracking-widest text-sm">Who We Are</h2>
            <h3 className="text-4xl lg:text-6xl font-bold font-display text-gray-900 leading-tight">
              A Legacy of <span className="text-[#E63946]">Nurturing</span> in Alexandra
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              Established in 2014, Sakhisizwe Day Care has been a pillar of the Alexandra community for over 12 years. We are a family-oriented center dedicated to building the nation through quality early childhood development.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-8 bg-red-50 rounded-3xl border-2 border-red-100 hover:bg-white transition-all cursor-default group">
              <h4 className="text-4xl font-display font-bold text-[#E63946] group-hover:scale-110 transition-transform origin-left">2014</h4>
              <p className="text-xs font-bold text-gray-500 mt-2 uppercase tracking-widest">Our Founding Year</p>
            </div>
            <div className="p-8 bg-[#A8E6CF]/10 rounded-3xl border-2 border-[#A8E6CF]/30 hover:bg-white transition-all cursor-default group">
              <h4 className="text-4xl font-display font-bold text-blue-600 group-hover:scale-110 transition-transform origin-left">Safe</h4>
              <p className="text-xs font-bold text-gray-500 mt-2 uppercase tracking-widest">Our Promise</p>
            </div>
          </div>

          <div className="flex items-start space-x-6 pt-6 border-t border-gray-100">
            <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center shrink-0 text-3xl">🏫</div>
            <div>
              <h4 className="font-bold text-gray-900 text-xl font-display">Our Alexandra Campus</h4>
              <p className="text-gray-500 leading-relaxed mt-1">
                Located at 3504 Far East Bank, our facility offers modern, safe exploration areas for every age group in Alexandra.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-[#E63946] rounded-[4rem] p-16 lg:p-24 text-white text-center space-y-12 relative overflow-hidden shadow-2xl shadow-red-200">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-20 -mb-20"></div>
        
        <h2 className="text-[#FFD700] font-bold uppercase tracking-widest text-sm">Our Mission</h2>
        <blockquote className="text-3xl lg:text-5xl font-display font-bold leading-tight max-w-5xl mx-auto italic">
          "To stretch young minds through safe play, interesting materials, and thought-stretching questions that build future stars."
        </blockquote>
        <div className="flex justify-center items-center space-x-4">
          <div className="w-12 h-1.5 bg-[#FFD700] rounded-full"></div>
          <span className="text-2xl">⭐</span>
          <div className="w-12 h-1.5 bg-[#FFD700] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
