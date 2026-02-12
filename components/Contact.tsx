import React, { useState } from 'react';
import { supabase } from '../services/supabase';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_requests')
        .insert([{
          parent_name: formData.parentName,
          child_name: formData.childName,
          child_age: formData.childAge,
          phone: formData.phone,
          email: formData.email,
          message: formData.message || 'Homepage tour request'
        }]);

      if (error) throw error;

      alert("Thank you! Your tour request has been saved. Our team will contact you shortly to schedule your visit to our safe facility in Alexandra.");
      setFormData({ parentName: '', childName: '', childAge: '', phone: '', email: '', message: '' });
    } catch (err) {
      console.error('Submission error:', err);
      alert('There was an error saving your request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20 bg-white">
      <div className="text-center space-y-5">
        <h2 className="text-[#E63946] font-bold uppercase tracking-widest text-xs md:text-sm font-display">Let's Connect</h2>
        <h3 className="text-3xl md:text-6xl font-bold font-display text-gray-900 leading-tight">Safe Facility Tour</h3>
        <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg font-medium">
          Experience our nurturing environment in person. We invite you to walk through our halls and meet our team in Alexandra.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
        <div className="space-y-10 md:space-y-12">
          <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
            <div className="space-y-8 md:space-y-10">
              <div className="flex items-start space-x-4 md:space-x-5">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center shrink-0 shadow-sm text-lg md:text-xl" aria-hidden="true">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-display">Campus Location</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mt-1 font-medium">
                    3504 Far East Bank,<br />
                    Alexandra, JHB
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 md:space-x-5">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#A8E6CF]/20 text-blue-700 rounded-2xl flex items-center justify-center shrink-0 shadow-sm text-lg md:text-xl" aria-hidden="true">
                  📞
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-display">Direct Line</h4>
                  <p className="text-gray-500 text-sm mt-1 font-bold group">
                    <a href="tel:0849406377" className="hover:text-[#E63946] transition-colors inline-flex items-center">
                      084 940 6377
                      <span className="md:hidden ml-2 text-[10px] bg-red-100 text-[#E63946] px-2 py-0.5 rounded-full">📱 Tap to call</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-8 md:space-y-10">
              <div className="flex items-start space-x-4 md:space-x-5">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-50 text-yellow-700 rounded-2xl flex items-center justify-center shrink-0 shadow-sm text-lg md:text-xl" aria-hidden="true">
                  ✉️
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-display">Email Help</h4>
                  <p className="text-gray-500 text-[10px] md:text-xs mt-1 font-bold truncate max-w-[150px] sm:max-w-none">
                    <a href="mailto:info@sakhisizwedaycarecentre.co.za" className="hover:text-[#E63946] transition-colors">info@sakhisizwedaycarecentre.co.za</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 md:space-x-5">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 text-gray-700 rounded-2xl flex items-center justify-center shrink-0 shadow-sm text-lg md:text-xl" aria-hidden="true">
                  ⏰
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-display">Nurture Hours</h4>
                  <p className="text-gray-500 text-sm mt-1 font-medium">Mon - Fri: 6AM - 6PM</p>
                </div>
              </div>
            </div>
          </div>

          <form 
            onSubmit={handleSubmit} 
            className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border border-gray-50 space-y-6"
            aria-label="Request a school tour form"
          >
            <h4 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-2">Request a Tour</h4>
            <div className="space-y-2">
              <label htmlFor="parentName" className="text-xs font-black text-gray-400 uppercase tracking-widest">Parent's Full Name</label>
              <input 
                id="parentName"
                type="text" 
                required
                value={formData.parentName}
                onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                className="w-full px-6 py-3 md:py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-red-50 outline-none transition-all font-bold"
                placeholder="Name"
                aria-required="true"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label htmlFor="childName" className="text-xs font-black text-gray-400 uppercase tracking-widest">Child's Name</label>
                <input 
                  id="childName"
                  type="text" 
                  required
                  value={formData.childName}
                  onChange={(e) => setFormData({...formData, childName: e.target.value})}
                  className="w-full px-6 py-3 md:py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-red-50 outline-none transition-all font-bold"
                  aria-required="true"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="childAge" className="text-xs font-black text-gray-400 uppercase tracking-widest">Child's Age</label>
                <input 
                  id="childAge"
                  type="text" 
                  required
                  value={formData.childAge}
                  onChange={(e) => setFormData({...formData, childAge: e.target.value})}
                  className="w-full px-6 py-3 md:py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-red-50 outline-none transition-all font-bold"
                  aria-required="true"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-xs font-black text-gray-400 uppercase tracking-widest">Contact Phone</label>
              <input 
                id="phone"
                type="tel" 
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-6 py-3 md:py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-red-50 outline-none transition-all font-bold"
                placeholder="084 940 6377"
                aria-required="true"
              />
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`btn-hover-lift w-full bg-[#E63946] text-white font-bold py-4 md:py-5 rounded-2xl shadow-xl shadow-red-100 text-base md:text-lg ${isSubmitting ? 'opacity-50' : ''}`}
            >
              {isSubmitting ? 'Saving...' : 'Schedule My Visit ⭐'}
            </button>
          </form>
        </div>

        <div className="h-full min-h-[400px] md:min-h-[500px] relative">
          <div className="absolute -inset-4 bg-red-100 rounded-[2.5rem] md:rounded-[3.5rem] -z-10 rotate-2"></div>
          <div className="bg-white p-3 md:p-4 rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-gray-50 h-full overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14330.435775793444!2d28.1147575!3d-26.1118641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9512066d73678b%3A0xc3f0b24050d9990b!2sAlexandra%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1709564123456!5m2!1sen!2sza" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '400px' }} 
              allowFullScreen={true} 
              loading="lazy" 
              className="rounded-[1.5rem] md:rounded-[2.5rem]"
              title="Sakhisizwe Day Care Location in Alexandra"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
