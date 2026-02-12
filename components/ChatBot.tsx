
import React, { useState, useRef, useEffect } from 'react';
import { getParentAssistantResponse } from '../services/gemini';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hello, star parent! I’m Teacher Sakhisizwe. How can I help you today? ⭐' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const getKeywordResponse = (query: string): string | null => {
    const q = query.toLowerCase();
    if (q.includes('fee') || q.includes('cost') || q.includes('price')) {
      return "Our registration fee typically ranges between R600 and R800. For a exact quote for your star, please call us at 084 940 6377! ⭐";
    }
    if (q.includes('uniform') || q.includes('red shirt')) {
      return "The Red Uniform Promise is our way of ensuring safety, pride, and equality for every child. It is compulsory at Sakhisizwe! ⭐";
    }
    if (q.includes('age') || q.includes('program')) {
      return "We nurture stars from as young as 3 months old up to 6 years old with age-appropriate programs! ⭐";
    }
    if (q.includes('tour') || q.includes('visit')) {
      return "We’d love to show you around! Please head to our Contact page to book your safe facility tour. ⭐";
    }
    if (q.includes('apply') || q.includes('enrol')) {
      return "You can start your enrolment process right now on our Enrol page! We can't wait to meet your star. ⭐";
    }
    return null;
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const localResponse = getKeywordResponse(userMsg);
    
    if (localResponse) {
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'bot', text: localResponse }]);
        setIsLoading(false);
      }, 500);
    } else {
      const botResponse = await getParentAssistantResponse(userMsg);
      setMessages(prev => [...prev, { role: 'bot', text: botResponse || "That’s a great question! Please call us on 084 940 6377 or send a WhatsApp – we’d love to chat 💬" }]);
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 md:left-8 z-[60]">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-[300px] sm:w-[380px] h-[500px] rounded-[2.5rem] shadow-[0_20px_60px_rgba(230,57,70,0.25)] border border-red-50 flex flex-col mb-4 overflow-hidden animate-in fade-in slide-in-from-left duration-300 origin-bottom-left">
          {/* Header */}
          <div className="bg-[#E63946] p-6 text-white flex justify-between items-center shadow-lg relative">
            <div className="flex items-center space-x-3 relative">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-md border-2 border-red-50">
                👩‍🏫
              </div>
              <div>
                <p className="font-display font-bold text-lg leading-tight">Teacher Sakhisizwe</p>
                <p className="text-[10px] text-red-100 font-bold uppercase tracking-widest">School Assistant ⭐</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-colors"
              aria-label="Close Chat"
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-4 bg-gray-50/30">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] p-4 rounded-3xl text-sm font-semibold leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#E63946] text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex space-x-2 items-center">
                  <div className="w-2 h-2 bg-[#E63946] rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-[#E63946] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-[#E63946] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 border-t border-gray-50 bg-white">
            <div className="relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Teacher a question..."
                className="w-full pl-5 pr-14 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-[#E63946] transition-all font-bold text-sm"
                aria-label="Type message to teacher"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 bg-[#E63946] text-white rounded-xl flex items-center justify-center hover:bg-[#C8102E] disabled:opacity-50 transition-all shadow-md"
                aria-label="Send message"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-3xl hover:scale-105 active:scale-95 transition-all relative group ${
          isOpen ? 'bg-gray-900 text-white' : 'bg-[#E63946] text-white'
        }`}
        aria-label="Open Chat with Teacher Sakhisizwe"
      >
        {isOpen ? <i className="fa-solid fa-xmark"></i> : '👩‍🏫'}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-6 w-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-6 w-6 bg-red-700 items-center justify-center text-[10px] font-bold text-white">1</span>
          </span>
        )}
      </button>
    </div>
  );
};
