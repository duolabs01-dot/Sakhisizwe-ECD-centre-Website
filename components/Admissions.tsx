
import React from 'react';

export const Admissions: React.FC = () => {
  const steps = [
    { title: 'Check Availability', icon: 'fa-solid fa-phone' },
    { title: 'Safe Facility Tour', icon: 'fa-solid fa-house-shield' },
    { title: 'Registration Form', icon: 'fa-solid fa-file-pen' },
    { title: 'Future Star Welcome', icon: 'fa-solid fa-star' },
  ];

  return (
    <div id="admissions" className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24 relative bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-50 rounded-full blur-[100px] -z-10 opacity-60"></div>
      
      <div className="text-center space-y-5">
        <h2 className="text-[#E63946] font-bold uppercase tracking-widest text-xs md:text-sm">Join Our Family</h2>
        <h3 className="text-3xl md:text-6xl font-bold font-display text-gray-900 leading-tight">Enrolment Process</h3>
        <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg font-medium">
          We treat every new learner like a rising star. Follow these steps to join the Sakhisizwe community in Alexandra.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 md:gap-12">
        <div className="card-hover-scale bg-white rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-14 shadow-2xl border border-gray-50 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-40 h-40 bg-red-50 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-1000"></div>
          
          <h4 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-8 md:mb-10 flex items-center relative z-10">
            <span className="w-10 h-10 md:w-12 md:h-12 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mr-4 md:mr-5 shadow-sm text-xl md:text-2xl" aria-hidden="true">💰</span>
            Fee Information
          </h4>

          <div className="space-y-6 md:space-y-8 relative z-10">
            <div className="p-8 md:p-10 bg-red-50 rounded-[2.5rem] border-2 border-dashed border-red-200">
              <p className="text-[10px] md:text-xs font-black text-[#E63946] uppercase tracking-widest mb-2">Registration Fee</p>
              <p className="text-4xl md:text-5xl font-display font-bold text-gray-900">R600 - R800</p>
              <p className="text-xs md:text-sm text-gray-500 mt-4 font-bold flex items-center">
                <span className="mr-2 text-[#FFD700] star-pulse">★</span> 
                Varies by age group. Call for exact quote.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="p-4 md:p-6 bg-gray-50 rounded-3xl border border-gray-100 group-hover:border-red-100 transition-colors">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Monthly</p>
                <p className="text-base md:text-lg font-bold text-gray-800">Contact Us</p>
              </div>
              <div className="p-4 md:p-6 bg-gray-50 rounded-3xl border border-gray-100 group-hover:border-red-100 transition-colors">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Annual</p>
                <p className="text-base md:text-lg font-bold text-gray-800">Contact Us</p>
              </div>
            </div>
            
            <a 
              href="enrol.html"
              className="btn-hover-lift block w-full text-center py-4 md:py-5 bg-[#E63946] text-white font-bold rounded-2xl shadow-xl shadow-red-200"
              aria-label="Start the online enrolment process"
            >
              Start Online Enrolment
            </a>
          </div>
        </div>

        <div className="card-hover-scale bg-gray-900 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-14 text-white relative overflow-hidden shadow-2xl group">
          <div className="absolute top-0 right-0 p-10 opacity-10 text-9xl transition-transform duration-1000 group-hover:rotate-12 group-hover:scale-110" aria-hidden="true">⭐</div>
          
          <h4 className="text-2xl md:text-3xl font-display font-bold text-white mb-8 md:mb-10 flex items-center relative z-10">
            <span className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-2xl flex items-center justify-center mr-4 md:mr-5 text-xl md:text-2xl" aria-hidden="true">🚀</span>
            Simple Enrolment
          </h4>

          <div className="space-y-8 md:space-y-10 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-center group/step">
                <div className="flex flex-col items-center mr-5 md:mr-8">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#E63946] flex items-center justify-center font-bold text-white z-10 shadow-lg group-hover/step:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  {idx !== steps.length - 1 && (
                    <div className="w-0.5 h-8 md:h-10 bg-white/10 mt-2"></div>
                  )}
                </div>
                <div>
                  <p className="text-lg md:text-xl font-bold flex items-center group-hover/step:text-[#FFD700] transition-colors">
                    <span className="mr-3 md:mr-4 text-xl md:text-2xl w-8 text-center" aria-hidden="true"><i className={step.icon}></i></span>
                    {step.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 md:mt-12 p-5 md:p-6 bg-white/5 rounded-3xl border border-white/10">
            <p className="text-xs md:text-sm text-gray-400 italic font-medium leading-relaxed">
              "We focus on making the transition to school as safe and smooth as possible for both parent and star. Join our Alexandra family today."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
