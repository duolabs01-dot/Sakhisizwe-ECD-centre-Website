
import React from 'react';

export const WhatsAppButton: React.FC = () => {
  const message = encodeURIComponent("Hello Teacher! I’d like to find out about 2026 enrolment for my star ⭐");
  const whatsappUrl = `https://wa.me/27849406377?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 md:right-8 z-[60]">
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 md:w-20 md:h-20 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center text-3xl md:text-4xl hover:scale-110 active:scale-95 transition-all animate-pulse focus:outline-none focus:ring-4 focus:ring-green-300"
        title="Chat on WhatsApp"
        aria-label="Send a WhatsApp message to Sakhisizwe"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </div>
  );
};
