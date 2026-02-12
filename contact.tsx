
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { supabase } from './services/supabase';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg font-bold text-gray-800 group-hover:text-[#E63946] transition-colors">{question}</span>
        <span className={`text-[#E63946] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <i className="fa-solid fa-chevron-down"></i>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-600 font-medium leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const faqs = [
    { question: "What are the registration fees?", answer: "Our one-time registration fee typically ranges between R600 and R800 depending on the child's age group. This covers administrative processing and initial placement." },
    { question: "Is the red uniform compulsory?", answer: "Yes! Our red uniform is a safety feature (high visibility) and builds a sense of pride and equality among all our 'stars' from day one." },
    { question: "What age groups do you accept?", answer: "We nurture children from as young as 3 months old up to 6 years old, providing age-appropriate developmental care and learning for every stage." },
    { question: "Do you focus on Grade R readiness?", answer: "Absolutely. Grade R readiness is our primary focus for our older groups, ensuring a seamless and confident transition into primary school." },
    { question: "What are your operating hours?", answer: "We are open Monday through Friday from 6:00 AM to 6:00 PM to accommodate working parents." }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_requests')
        .insert([{
          parent_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        }]);

      if (error) throw error;

      alert("Message sent and saved! We'll twinkle back to you shortly. ⭐");
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error('Submission error:', err);
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[#E63946] text-white py-20 px-4 text-center">
        <a href="index.html" className="inline-flex items-center font-bold mb-6 hover:text-red-200 transition-colors">
          <i className="fa-solid fa-arrow-left mr-2"></i> Back to Home
        </a>
        <h1 className="text-5xl lg:text-7xl font-display font-bold mb-4">Connect With <span className="text-yellow-300">Us</span></h1>
        <p className="text-red-100 max-w-2xl mx-auto font-medium text-lg">We're here to answer your questions and welcome you to our Alexandra family.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10 mb-24">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info Blocks */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-50 h-full">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-8 border-b-4 border-red-50 pb-2">Reach Out</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl text-[#E63946] mt-1"><i className="fa-solid fa-location-dot"></i></div>
                  <div>
                    <h3 className="font-bold text-gray-800">Our Address</h3>
                    <p className="text-gray-500 text-sm font-medium">3504 Far East Bank, Alexandra, Johannesburg</p>
                  </div>
                </div>

                <div className="space-y-4">
                   <h3 className="font-bold text-gray-800 flex items-center">
                     <i className="fa-solid fa-phone text-[#E63946] mr-3"></i> Call Us Directly
                   </h3>
                   <a href="tel:084 940 5377" className="block w-full bg-[#E63946] text-white py-4 rounded-2xl text-center font-bold text-lg shadow-lg hover:bg-[#C8102E] transition-all transform active:scale-95">
                     084 940 5377
                   </a>
                   <a href="tel:067 096 1542" className="block w-full bg-white text-[#E63946] border-2 border-[#E63946] py-4 rounded-2xl text-center font-bold text-lg hover:bg-red-50 transition-all transform active:scale-95">
                     067 096 1542
                   </a>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl text-[#E63946] mt-1"><i className="fa-solid fa-envelope"></i></div>
                  <div>
                    <h3 className="font-bold text-gray-800">Email Us</h3>
                    <p className="text-gray-500 text-sm font-medium break-all">info@sakhisizwedaycarecentre.co.za</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl text-[#E63946] mt-1"><i className="fa-solid fa-clock"></i></div>
                  <div>
                    <h3 className="font-bold text-gray-800">Hours</h3>
                    <p className="text-gray-500 text-sm font-medium">Mon - Fri: 6:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form & Map Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-50">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Send us a message ⭐</h2>
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Your Name</label>
                  <input required className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#E63946] outline-none font-bold" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Email Address</label>
                  <input required type="email" className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#E63946] outline-none font-bold" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Phone Number</label>
                  <input required className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#E63946] outline-none font-bold" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Your Message</label>
                  <textarea required rows={4} className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#E63946] outline-none font-bold" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                </div>
                <div className="md:col-span-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full bg-[#E63946] text-white py-5 rounded-2xl font-bold text-xl shadow-xl hover:bg-[#C8102E] transition-all ${isSubmitting ? 'opacity-50' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send us a message ⭐'}
                  </button>
                </div>
              </form>
            </div>

            <div className="h-[400px] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14330.435775793444!2d28.1147575!3d-26.1118641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9512066d73678b%3A0xc3f0b24050d9990b!2sAlexandra%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1709564123456!5m2!1sen!2sza" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy"
                title="Sakhisizwe Day Care Marker"
              ></iframe>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-4xl mx-auto bg-white p-12 rounded-[3rem] shadow-xl border border-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-[#E63946] font-bold uppercase tracking-widest text-sm mb-2">Have Questions?</h2>
            <h3 className="text-4xl font-display font-bold text-gray-900">Frequently Asked Questions</h3>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById('contact-root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<ContactPage />);
}
