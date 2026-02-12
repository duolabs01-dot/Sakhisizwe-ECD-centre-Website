
import React from 'react';

const highlights = [
  {
    icon: '👶',
    title: '3 Months - 6 Years',
    description: 'Nurturing growth from tiny steps to big school readiness.',
    color: 'bg-red-50 text-[#E63946] border-red-100',
    iconBg: 'bg-[#E63946]'
  },
  {
    icon: '🛡️',
    title: 'Safe Haven',
    description: 'A secure, modern facility at 3504 Far East Bank, Alexandra.',
    color: 'bg-blue-50 text-blue-700 border-blue-100',
    iconBg: 'bg-[#A8E6CF]'
  },
  {
    icon: '⭐',
    title: 'Star Potential',
    description: 'We believe every child has a unique star inside them.',
    color: 'bg-yellow-50 text-yellow-700 border-yellow-100',
    iconBg: 'bg-[#FFD700]'
  },
  {
    icon: '🤝',
    title: 'Family Focus',
    description: 'We treat our learners and parents like part of our family.',
    color: 'bg-gray-50 text-gray-700 border-gray-100',
    iconBg: 'bg-gray-800'
  }
];

export const Features: React.FC = () => {
  return (
    <div className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 md:mb-20 space-y-4">
        <h2 className="text-[#E63946] font-bold uppercase tracking-widest text-xs md:text-sm">Our Foundations</h2>
        <p className="text-3xl md:text-5xl font-bold font-display text-gray-900">Nurturing Excellence</p>
        <div className="w-20 h-1.5 bg-[#FFD700] mx-auto rounded-full mt-4"></div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {highlights.map((highlight, index) => (
          <div 
            key={index} 
            className={`card-hover-scale p-8 md:p-10 rounded-[2.5rem] border ${highlight.color} flex flex-col items-center text-center group bg-white shadow-sm`}
            aria-labelledby={`feature-title-${index}`}
          >
            <div 
              className={`w-14 h-14 md:w-16 md:h-16 ${highlight.iconBg} text-white rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-6 md:mb-8 shadow-md transition-transform duration-500 group-hover:rotate-6`}
              aria-hidden="true"
            >
              {highlight.icon}
            </div>
            <h3 id={`feature-title-${index}`} className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3 md:mb-4">{highlight.title}</h3>
            <p className="text-gray-500 leading-relaxed font-medium text-sm">
              {highlight.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
