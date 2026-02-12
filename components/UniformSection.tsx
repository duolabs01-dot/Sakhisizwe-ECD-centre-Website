
import React from 'react';

const benefits = [
  {
    title: 'Instant Recognition',
    description: 'Our bold red ensures safety through high visibility, making our stars easy to spot during outings and play.',
    icon: 'fa-solid fa-eye',
    star: '⭐'
  },
  {
    title: 'Pride & Identity',
    description: 'Wearing our colours builds a sense of belonging and confidence, helping your child stand tall as a future leader.',
    icon: 'fa-solid fa-shield-heart',
    star: '⭐'
  },
  {
    title: 'Unity & Equality',
    description: 'The uniform removes fashion competition, ensuring every child feels like an equal part of the Sakhisizwe family.',
    icon: 'fa-solid fa-users',
    star: '⭐'
  },
  {
    title: 'Professional Standard',
    description: 'Our neat appearance reflects the high quality of education and care we promise to deliver every single day.',
    icon: 'fa-solid fa-medal',
    star: '⭐'
  }
];

export const UniformSection: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-center">
        <div className="space-y-12">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-[#E63946] font-bold uppercase tracking-widest text-sm font-display">The Red-Shirt Difference</h2>
            <h3 className="text-4xl lg:text-6xl font-bold font-display text-gray-900 leading-tight">
              Why Red? Because Your Child is a <span className="text-[#E63946]">Star</span> ⭐
            </h3>
            <p className="text-gray-600 text-lg lg:text-xl font-medium leading-relaxed max-w-2xl">
              At Sakhisizwe, our uniform isn't just clothing—it's a symbol of safety, belonging, and the bright future we are building together.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-[32px] border-b-8 border-red-50 shadow-xl relative group hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
              >
                <div className="absolute top-4 right-4 text-[#FFD700] text-xl opacity-40 group-hover:opacity-100 transition-opacity">
                  {benefit.star}
                </div>
                <div className="w-14 h-14 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-inner">
                  <i className={benefit.icon}></i>
                </div>
                <h4 className="text-xl font-bold font-display text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Informational Graphic Block */}
        <div className="relative group hidden lg:block">
          <div className="absolute -inset-4 bg-[#E63946]/5 rounded-[4rem] rotate-3"></div>
          <div className="relative bg-white p-12 rounded-[3.5rem] shadow-2xl border border-gray-100 text-center space-y-8">
             <div className="w-24 h-24 bg-[#E63946] rounded-full flex items-center justify-center text-white text-5xl mx-auto shadow-xl star-pulse">
               ⭐
             </div>
             <h4 className="text-2xl font-display font-bold text-gray-900">Safety & Unity</h4>
             <p className="text-gray-500 font-medium leading-relaxed">
               All pictures of our stars wearing their uniforms are celebrated in our Graduation gallery.
             </p>
             <div className="pt-4">
               <a href="gallery.html#slides" className="text-[#E63946] font-bold border-b-2 border-[#E63946] hover:border-[#C8102E] transition-all">
                 View Milestone Pictures →
               </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
