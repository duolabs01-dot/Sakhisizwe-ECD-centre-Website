
import React, { useState, useEffect } from 'react';

export const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', age: '', contact: '', email: '' });

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger if mouse leaves the top of the window and hasn't been shown this session
      if (e.clientY < 0 && !sessionStorage.getItem('exitPopupShown')) {
        setIsVisible(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Spot Reserved! Use code STAR2026 to claim your R50 discount. We'll contact you soon! ⭐");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="relative bg-white border-[6px] border-[#E63946] rounded-[28px] max-w-lg w-full p-8 lg:p-12 shadow-2xl overflow-hidden"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #FFD700 1px, transparent 0)`,
          backgroundSize: '32px 32px',
          backgroundAlpha: '0.05'
        } as any}
      >
        {/* Subtle Confetti Decorations */}
        <div className="absolute top-4 left-4 text-2xl opacity-20">⭐</div>
        <div className="absolute bottom-10 right-6 text-2xl opacity-20 rotate-12">⭐</div>
        <div className="absolute top-20 right-10 text-xl opacity-20 -rotate-12">✨</div>

        {/* Close Button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-[#E63946]"
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>

        <div className="relative z-10 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 leading-tight">
              ✨ Wait! Don’t Miss Your <span className="text-[#E63946]">Star’s</span> Spot!
            </h2>
            <p className="text-gray-600 font-bold text-lg">
              Our 2026 enrolment is filling fast. Leave your details & get:
            </p>
          </div>

          <ul className="space-y-3 bg-red-50 p-6 rounded-2xl border border-red-100">
            {[
              "Free Sakhisizwe welcome pack",
              "Priority tour booking",
              "R50 off registration fee (code: STAR2026)"
            ].map((benefit, idx) => (
              <li key={idx} className="flex items-center text-gray-800 font-bold text-sm lg:text-base">
                <i className="fa-solid fa-check text-green-500 mr-3"></i>
                {benefit}
              </li>
            ))}
          </ul>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input 
                required
                placeholder="Your Name"
                className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-[#E63946] outline-none font-bold text-sm"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
              <input 
                required
                placeholder="Child's Age"
                className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-[#E63946] outline-none font-bold text-sm"
                value={formData.age}
                onChange={e => setFormData({...formData, age: e.target.value})}
              />
            </div>
            <input 
              required
              placeholder="Phone / WhatsApp"
              className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-[#E63946] outline-none font-bold text-sm"
              value={formData.contact}
              onChange={e => setFormData({...formData, contact: e.target.value})}
            />
            <input 
              required
              type="email"
              placeholder="Email Address"
              className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-[#E63946] outline-none font-bold text-sm"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
            <button 
              type="submit"
              className="w-full py-5 bg-[#E63946] text-white rounded-2xl font-bold text-xl shadow-xl shadow-red-200 hover:bg-[#C8102E] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Reserve My Spot →
            </button>
          </form>
          
          <p className="text-center text-gray-400 text-[10px] font-bold uppercase tracking-widest">
            Safe • Nurturing • Alexandra
          </p>
        </div>
      </div>
    </div>
  );
};
