
import React, { useState } from 'react';

interface CurriculumItem {
  name: string;
  icon: string;
  description: string;
}

const curriculumItems: CurriculumItem[] = [
  { name: 'Language Arts', icon: '🗣️', description: 'Developing multilingual communication skills through storytelling and phonetic play.' },
  { name: 'Math', icon: '🔢', description: 'Early numeracy through hands-on counting, sorting, and pattern recognition.' },
  { name: 'Computer Skills', icon: '💻', description: 'Introduction to basic tech literacy in our modern 2026 digital discovery lab.' },
  { name: 'Science', icon: '🧪', description: 'Safe, fun experiments that explore the natural world and basic physical laws.' },
  { name: 'Music', icon: '🎵', description: 'Rhythmic exploration, traditional songs, and instrumental play to spark creativity.' },
  { name: 'Dramatic Arts', icon: '🎭', description: 'Role-playing and imaginative scenarios that build empathy and social confidence.' },
  { name: 'Fine Arts', icon: '🎨', description: 'Tactile expression through painting, sculpting, and collaborative mural building.' },
  { name: 'Physical Development', icon: '🏃🏾‍♂️', description: 'Gross motor skill building through structured gym activities and safe free-play.' },
  { name: 'Health & Safety', icon: '🩺', description: 'Learning about hygiene, nutrition, and personal safety in a nurturing way.' },
  { name: 'Multicultural', icon: '🇿🇦', description: 'Celebrating our diverse Alexandra heritage and the vibrant cultures of South Africa.' },
  { name: 'Social/Emotional', icon: '🤝', description: 'Building EQ through conflict resolution, sharing, and understanding emotions.' },
  { name: 'Outdoor Play', icon: '🌳', description: 'Holistic growth through nature exploration and fresh air discovery.' },
];

export const Programs: React.FC = () => {
  const [hoveredSubject, setHoveredSubject] = useState<string | null>(null);

  return (
    <div id="programs" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 relative overflow-hidden bg-white">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-[#E63946] font-bold uppercase tracking-widest text-sm font-display">Our Learning Paths</h2>
        <h3 className="text-4xl lg:text-5xl font-bold font-display text-gray-900">Education for Future Leaders</h3>
        <p className="text-gray-600 text-lg font-medium">
          Our curriculum is designed to prepare your star for primary school and beyond, focusing on both academic and social excellence.
        </p>
      </div>

      {/* Grade R Readiness - Featured Section from Signage */}
      <div className="relative p-1 bg-gradient-to-r from-[#E63946] via-[#F1C40F] to-[#2D6A4F] rounded-[4rem] shadow-2xl">
        <div className="bg-white rounded-[3.8rem] p-10 lg:p-20 text-center space-y-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-10 text-9xl opacity-5 pointer-events-none">🎓</div>
          <div className="inline-block bg-[#E63946] text-white px-8 py-3 rounded-full font-black font-display uppercase tracking-widest shadow-lg">
            Our Primary Focus
          </div>
          <h4 className="text-4xl lg:text-6xl font-black font-display text-gray-900">Grade R <span className="text-[#E63946]">Readiness</span></h4>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            We take pride in our specialized Grade R preparation program. We ensure every 5-6 year old leaving Sakhisizwe is fully prepared—academically, socially, and emotionally—for the challenges of primary school.
          </p>
          <div className="grid md:grid-cols-3 gap-6 pt-6">
             <div className="p-6 bg-red-50 rounded-3xl border-2 border-red-100">
               <span className="text-4xl block mb-2">📚</span>
               <p className="font-bold text-gray-800">Advanced Literacy</p>
             </div>
             <div className="p-6 bg-green-50 rounded-3xl border-2 border-green-100">
               <span className="text-4xl block mb-2">🧮</span>
               <p className="font-bold text-gray-800">School Numeracy</p>
             </div>
             <div className="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100">
               <span className="text-4xl block mb-2">🌟</span>
               <p className="font-bold text-gray-800">Emotional Maturity</p>
             </div>
          </div>
        </div>
      </div>

      {/* Age Group Side-by-Side Cards */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-red-50 p-10 lg:p-14 rounded-[3rem] border-2 border-red-100 shadow-xl shadow-red-100/30 group hover:-translate-y-2 transition-all relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-9xl">👶</div>
          <div className="w-16 h-16 bg-[#E63946] rounded-2xl flex items-center justify-center text-4xl mb-8 shadow-lg shadow-red-200">
            🍼
          </div>
          <h4 className="text-4xl font-display font-bold text-gray-900 mb-6">Foundation Years (3 Months – 3 Years)</h4>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Our toddler program focuses on deep social-emotional bonding, language acquisition, and motor skill development. We provide a <span className="text-[#E63946] font-bold">safe home away from home</span>.
          </p>
          <ul className="space-y-4">
            {['Sensory exploration & touch play', 'Language introduction', 'Social interaction basics', 'Nurturing bonding time'].map((item, i) => (
              <li key={i} className="flex items-center text-gray-800 font-bold">
                <span className="text-[#FFD700] mr-4 text-xl">⭐</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-900 p-10 lg:p-14 rounded-[3rem] text-white shadow-2xl group hover:-translate-y-2 transition-all relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl">🎒</div>
          <div className="w-16 h-16 bg-[#FFD700] rounded-2xl flex items-center justify-center text-4xl mb-8 shadow-lg shadow-yellow-500/20">
            🎒
          </div>
          <h4 className="text-4xl font-display font-bold mb-6">Pre-School Prep (4–6 Years)</h4>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Preparing our children for primary school with a focus on cognitive growth and independence. We empower our future leaders to <span className="text-[#FFD700] font-bold">think for themselves</span>.
          </p>
          <ul className="space-y-4">
            {['Advanced numeracy & literacy', 'Early science discovery', 'Digital skills & computer use', 'Independence & leadership'].map((item, i) => (
              <li key={i} className="flex items-center text-gray-100 font-bold">
                <span className="text-[#FFD700] mr-4 text-xl">⭐</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Weekly Curriculum Grid */}
      <div className="space-y-12">
        <div className="text-center">
          <h4 className="text-4xl font-display font-bold text-gray-900">Weekly Curriculum</h4>
          <p className="text-gray-500 mt-2 font-bold uppercase tracking-widest text-xs">Hover a subject to learn more ⭐</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {curriculumItems.map((item, idx) => (
            <div 
              key={idx} 
              onMouseEnter={() => setHoveredSubject(item.name)}
              onMouseLeave={() => setHoveredSubject(null)}
              className="relative p-6 bg-white border-2 border-gray-100 rounded-3xl hover:border-[#E63946] hover:shadow-xl transition-all cursor-help flex flex-col items-center text-center group"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{item.icon}</div>
              <h5 className="font-display font-bold text-gray-900 group-hover:text-[#E63946] transition-colors">{item.name}</h5>
              
              {/* Interactive Tooltip */}
              {hoveredSubject === item.name && (
                <div className="absolute inset-0 z-20 bg-[#E63946] text-white p-4 rounded-3xl flex items-center justify-center text-center animate-in fade-in zoom-in duration-200">
                  <p className="text-sm font-bold leading-snug">{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
