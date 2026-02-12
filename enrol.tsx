
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { supabase } from './services/supabase';

const LOGO_URL = 'https://aeecauwirwkpvoovbsnx.supabase.co/storage/v1/object/public/Sakhisizwe-media/logo/logo.png';

const EnrolForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    parent: {
      fullName: '', idNumber: '', relationship: '', homeLanguage: '',
      cell: '', email: '', whatsapp: '', contactMethod: 'WhatsApp',
      address: '', suburb: 'Alexandra', city: 'Johannesburg',
      emergencyName: '', emergencyPhone: '',
      pickups: [
        { name: '', phone: '', relation: '' },
        { name: '', phone: '', relation: '' },
        { name: '', phone: '', relation: '' }
      ]
    },
    children: [{ 
      name: '', dob: '', age: '', gender: '', 
      bcNumber: '', language: '', prevDaycare: '', 
      toiletTrained: 'No', comfortItems: '' 
    }],
    medical: {
      medicalAid: '', doctor: '', doctorPhone: '', hospital: '',
      chronicConditions: '', allergies: '', dietary: '',
      immunisation: 'Up to date', medications: '', specialNeeds: ''
    },
    consents: {
      marketing: false, emergency: false, truth: false
    }
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const calculateAge = (dob: string) => {
    if (!dob) return '';
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 0 ? age : 0;
  };

  const updateChildAge = (index: number, dob: string) => {
    const age = calculateAge(dob);
    const newChildren = [...formData.children];
    newChildren[index].dob = dob;
    newChildren[index].age = age.toString();
    setFormData({ ...formData, children: newChildren });
  };

  const addChild = () => {
    setFormData({
      ...formData,
      children: [...formData.children, { 
        name: '', dob: '', age: '', gender: '', 
        bcNumber: '', language: '', prevDaycare: '', 
        toiletTrained: 'No', comfortItems: '' 
      }]
    });
  };

  const removeChild = (idx: number) => {
    if (formData.children.length > 1) {
      setFormData({
        ...formData,
        children: formData.children.filter((_, i) => i !== idx)
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('enrolments')
        .insert([{
          parent_json: formData.parent,
          children_json: formData.children,
          medical_json: formData.medical,
          consents_json: formData.consents,
          status: 'pending'
        }]);

      if (error) throw error;
      
      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      alert('There was an error submitting your application. Please try again or call us.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-[#FFF5F5]">
        <div className="bg-white p-12 lg:p-16 rounded-[48px] shadow-2xl text-center max-w-xl border-[6px] border-red-50 animate-in zoom-in duration-500">
          <div className="text-8xl mb-8 star-pulse inline-block">⭐</div>
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">Thank you, Stellar Parent!</h1>
          <p className="text-xl text-gray-600 font-medium leading-relaxed">
            Your application has been successfully submitted to our database. We’ll twinkle into your inbox or WhatsApp within 24h to finalize your star's spot! ⭐
          </p>
          <div className="mt-10 p-6 bg-red-50 rounded-3xl border border-red-100">
             <p className="text-[#E63946] font-bold">Registration Reference: SAKH-{Date.now().toString().slice(-6)}</p>
          </div>
          <button 
            onClick={() => window.location.href = 'index.html'}
            className="mt-12 px-12 py-5 bg-[#E63946] text-white rounded-[24px] font-bold text-lg shadow-2xl hover:bg-[#C8102E] transition-all transform hover:scale-105 active:scale-95"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
      {/* Branding Header */}
      <div className="text-center mb-16 space-y-6">
        <a href="index.html" className="inline-flex items-center text-[#E63946] font-bold mb-8 hover:underline transition-all group px-6 py-2 bg-white rounded-full shadow-sm">
          <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> Back to Site
        </a>
        <div className="flex justify-center mb-12">
          <div className="p-4 bg-white rounded-[40px] shadow-2xl shadow-red-100/50">
            <img 
              src={LOGO_URL} 
              alt="Sakhisizwe Day Care Emblem" 
              style={{ height: '80px', width: 'auto' }}
              className="drop-shadow-xl" 
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 tracking-tight">
          Enrol Your <span className="text-[#E63946]">Star</span> Today
        </h1>
        <p className="text-gray-500 font-bold uppercase tracking-[0.4em] text-xs md:text-sm">
          Alexandra • Building Stars For The Future ⭐
        </p>
      </div>

      {/* Playful Progress Indicator */}
      <div className="mb-20 max-w-3xl mx-auto px-4">
        <div className="flex justify-between items-center relative">
          <div className="absolute h-1.5 bg-gray-100 w-full top-1/2 -translate-y-1/2 -z-10 rounded-full"></div>
          <div 
            className="absolute h-1.5 bg-[#E63946] transition-all duration-700 ease-out top-1/2 -translate-y-1/2 -z-10 rounded-full"
            style={{ width: `${((step - 1) / 3) * 100}%` }}
          ></div>
          {[
            { n: 1, label: 'Guardian', icon: 'fa-user-shield' },
            { n: 2, label: 'The Star', icon: 'fa-star' },
            { n: 3, label: 'Safety', icon: 'fa-heart-pulse' },
            { n: 4, label: 'Finish', icon: 'fa-check-double' }
          ].map((s) => (
            <div key={s.n} className="flex flex-col items-center group">
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-[24px] flex items-center justify-center text-xl md:text-2xl shadow-xl border-4 transition-all duration-500 ${
                step >= s.n ? 'bg-[#E63946] text-white border-white scale-110 rotate-3' : 'bg-white text-gray-300 border-gray-100'
              }`}>
                {step > s.n ? <i className="fa-solid fa-star text-yellow-300"></i> : <i className={`fa-solid ${s.icon}`}></i>}
              </div>
              <span className={`mt-5 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] ${step >= s.n ? 'text-[#E63946]' : 'text-gray-400'}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Form Container */}
      <div className="bg-white rounded-[48px] p-8 md:p-16 shadow-[0_40px_100px_-20px_rgba(230,57,70,0.15)] border-2 border-red-50 relative overflow-hidden">
        
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right duration-500 space-y-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 flex items-center">
               <span className="w-12 h-12 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mr-5 text-2xl">①</span>
               Parent / Guardian Details
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Full Name & Surname</label>
                <input required className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-[24px] focus:border-[#E63946] outline-none font-bold transition-all" value={formData.parent.fullName} onChange={e => setFormData({...formData, parent: {...formData.parent, fullName: e.target.value}})} placeholder="Parent Name" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">ID or Passport Number</label>
                <input required className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-[24px] focus:border-[#E63946] outline-none font-bold transition-all" value={formData.parent.idNumber} onChange={e => setFormData({...formData, parent: {...formData.parent, idNumber: e.target.value}})} />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Relationship to Child</label>
                <input required className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-[24px] focus:border-[#E63946] outline-none font-bold transition-all" placeholder="e.g. Mother, Father, Aunt" value={formData.parent.relationship} onChange={e => setFormData({...formData, parent: {...formData.parent, relationship: e.target.value}})} />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Home Language</label>
                <input required className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-[24px] focus:border-[#E63946] outline-none font-bold transition-all" value={formData.parent.homeLanguage} onChange={e => setFormData({...formData, parent: {...formData.parent, homeLanguage: e.target.value}})} />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Physical Home Address (Alexandra / Joburg)</label>
              <textarea required rows={2} className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-[24px] focus:border-[#E63946] outline-none font-bold transition-all" value={formData.parent.address} onChange={e => setFormData({...formData, parent: {...formData.parent, address: e.target.value}})} placeholder="Street name and house number..." />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Cell Phone</label>
                <input required className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-[24px] focus:border-[#E63946] outline-none font-bold transition-all" value={formData.parent.cell} onChange={e => setFormData({...formData, parent: {...formData.parent, cell: e.target.value}})} />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">WhatsApp Number</label>
                <input required className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-[24px] focus:border-[#E63946] outline-none font-bold transition-all" value={formData.parent.whatsapp} onChange={e => setFormData({...formData, parent: {...formData.parent, whatsapp: e.target.value}})} />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                <input required type="email" className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-[24px] focus:border-[#E63946] outline-none font-bold transition-all" value={formData.parent.email} onChange={e => setFormData({...formData, parent: {...formData.parent, email: e.target.value}})} />
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
               <h3 className="font-bold text-gray-900 mb-6 flex items-center"><i className="fa-solid fa-users-viewfinder mr-3 text-[#E63946]"></i> Authorized Pickup Persons (3)</h3>
               <div className="grid lg:grid-cols-3 gap-6">
                 {formData.parent.pickups.map((p, i) => (
                   <div key={i} className="p-6 bg-gray-50 rounded-[28px] border-2 border-gray-100 space-y-4">
                     <p className="text-[10px] font-black text-[#E63946] uppercase tracking-widest">Person #{i+1}</p>
                     <input placeholder="Name" className="w-full p-3 rounded-xl border border-gray-200 text-sm font-bold" value={p.name} onChange={e => {
                       const np = [...formData.parent.pickups]; np[i].name = e.target.value; setFormData({...formData, parent: {...formData.parent, pickups: np}});
                     }} />
                     <input placeholder="Phone" className="w-full p-3 rounded-xl border border-gray-200 text-sm font-bold" value={p.phone} onChange={e => {
                       const np = [...formData.parent.pickups]; np[i].phone = e.target.value; setFormData({...formData, parent: {...formData.parent, pickups: np}});
                     }} />
                   </div>
                 ))}
               </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right duration-500 space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-center border-b-4 border-red-50 pb-8 gap-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 flex items-center">
                 <span className="w-12 h-12 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mr-5 text-2xl">②</span>
                 Child's Details
              </h2>
              <button 
                type="button"
                onClick={addChild}
                className="bg-[#FFD700] text-gray-900 px-8 py-4 rounded-[24px] font-black text-sm shadow-xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest flex items-center"
              >
                <i className="fa-solid fa-plus mr-2"></i> Add Another Star
              </button>
            </div>
            
            <div className="space-y-12">
              {formData.children.map((child, idx) => (
                <div key={idx} className="bg-[#FFF5F5] p-10 rounded-[40px] space-y-8 relative border-2 border-red-100 animate-in zoom-in duration-300">
                  <div className="absolute top-0 right-0 p-8 text-6xl opacity-10 star-pulse select-none">⭐</div>
                  <div className="flex justify-between items-center">
                    <h3 className="font-display font-bold text-2xl text-[#E63946] flex items-center">
                       <i className="fa-solid fa-graduation-cap mr-3"></i> Star #{idx + 1}
                    </h3>
                    {formData.children.length > 1 && (
                      <button type="button" onClick={() => removeChild(idx)} className="bg-white p-3 rounded-xl text-[#E63946] hover:bg-red-600 hover:text-white transition-all shadow-sm">
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input required className="w-full p-5 bg-white border-2 border-gray-100 rounded-[24px] focus:border-[#E63946] outline-none font-bold" value={child.name} onChange={e => {
                        const nc = [...formData.children]; nc[idx].name = e.target.value; setFormData({...formData, children: nc});
                      }} />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">DOB</label>
                        <input type="date" required className="w-full p-5 bg-white border-2 border-gray-100 rounded-[24px] focus:border-[#E63946] outline-none font-bold text-sm" value={child.dob} onChange={e => updateChildAge(idx, e.target.value)} />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Age (Auto)</label>
                        <input disabled className="w-full p-5 bg-gray-50 border-2 border-gray-200 rounded-[24px] outline-none font-bold text-center text-[#E63946]" value={child.age} />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Birth Certificate Number</label>
                      <input required className="w-full p-5 bg-white border-2 border-gray-100 rounded-[24px] focus:border-[#E63946] outline-none font-bold" value={child.bcNumber} onChange={e => {
                        const nc = [...formData.children]; nc[idx].bcNumber = e.target.value; setFormData({...formData, children: nc});
                      }} />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Home Language</label>
                      <input required className="w-full p-5 bg-white border-2 border-gray-100 rounded-[24px] focus:border-[#E63946] outline-none font-bold" value={child.language} onChange={e => {
                        const nc = [...formData.children]; nc[idx].language = e.target.value; setFormData({...formData, children: nc});
                      }} />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 pt-4">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Toilet Trained?</label>
                      <select className="w-full p-5 bg-white border-2 border-gray-100 rounded-[24px] focus:border-[#E63946] outline-none font-bold" value={child.toiletTrained} onChange={e => {
                        const nc = [...formData.children]; nc[idx].toiletTrained = e.target.value; setFormData({...formData, children: nc});
                      }}>
                        <option>No</option>
                        <option>Mostly</option>
                        <option>Yes</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Favorite Comfort Items / Toys?</label>
                      <input className="w-full p-5 bg-white border-2 border-gray-100 rounded-[24px] focus:border-[#E63946] outline-none font-bold" placeholder="e.g. Teddy, Blanket" value={child.comfortItems} onChange={e => {
                        const nc = [...formData.children]; nc[idx].comfortItems = e.target.value; setFormData({...formData, children: nc});
                      }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right duration-500 space-y-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 flex items-center border-b-4 border-red-50 pb-8">
               <span className="w-12 h-12 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mr-5 text-2xl">③</span>
               Health & Safety
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Medical Aid Provider</label>
                <input className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-[24px] focus:border-[#E63946] outline-none font-bold" value={formData.medical.medicalAid} onChange={e => setFormData({...formData, medical: {...formData.medical, medicalAid: e.target.value}})} />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Family Doctor Name & Phone</label>
                <input className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-[24px] focus:border-[#E63946] outline-none font-bold" value={formData.medical.doctorPhone} onChange={e => setFormData({...formData, medical: {...formData.medical, doctorPhone: e.target.value}})} />
              </div>
            </div>

            <div className="space-y-6">
               <div className="space-y-3">
                 <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Chronic Conditions</label>
                 <textarea placeholder="e.g. Asthma, Epilepsy..." className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-[24px] focus:border-[#E63946] outline-none font-bold" value={formData.medical.chronicConditions} onChange={e => setFormData({...formData, medical: {...formData.medical, chronicConditions: e.target.value}})} />
               </div>
               <div className="space-y-3">
                 <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Known Allergies (Crucial)</label>
                 <textarea placeholder="Food, medicine, insects, bees..." className="w-full p-5 bg-white border-2 border-red-100 rounded-[24px] focus:border-[#E63946] outline-none font-bold" value={formData.medical.allergies} onChange={e => setFormData({...formData, medical: {...formData.medical, allergies: e.target.value}})} />
               </div>
               <div className="space-y-3">
                 <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Dietary Restrictions</label>
                 <input className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-[24px] focus:border-[#E63946] outline-none font-bold" placeholder="e.g. Vegetarian, No Dairy" value={formData.medical.dietary} onChange={e => setFormData({...formData, medical: {...formData.medical, dietary: e.target.value}})} />
               </div>
            </div>

            <div className="p-8 bg-blue-50/50 rounded-[32px] border border-blue-100 space-y-4">
               <p className="text-blue-700 font-bold flex items-center"><i className="fa-solid fa-circle-info mr-3"></i> Quick Safety Check</p>
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Immunisation Status</label>
                   <select className="w-full p-3 rounded-xl border border-blue-100 font-bold text-sm" value={formData.medical.immunisation} onChange={e => setFormData({...formData, medical: {...formData.medical, immunisation: e.target.value}})}>
                     <option>Up to date</option>
                     <option>In progress</option>
                     <option>Not up to date</option>
                   </select>
                 </div>
                 <div className="space-y-2">
                   <label className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Preferred Emergency Hospital</label>
                   <input className="w-full p-3 rounded-xl border border-blue-100 font-bold text-sm" placeholder="Hospital Name" value={formData.medical.hospital} onChange={e => setFormData({...formData, medical: {...formData.medical, hospital: e.target.value}})} />
                 </div>
               </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-in fade-in slide-in-from-right duration-500 space-y-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 flex items-center border-b-4 border-red-50 pb-8">
               <span className="w-12 h-12 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mr-5 text-2xl">④</span>
               Documents & Consents
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
               <div className="space-y-6">
                 <h3 className="font-bold text-gray-800">Please Upload Photos/Scans</h3>
                 {[
                   { id: 'id_parent', label: "Parent ID / Passport" },
                   { id: 'bc_child', label: "Child's Birth Certificate" },
                   { id: 'imm_card', label: "Immunisation Card" },
                   { id: 'res_proof', label: "Proof of Residence" }
                 ].map(doc => (
                   <div key={doc.id} className="space-y-2">
                     <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{doc.label}</label>
                     <div className="relative group">
                       <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                       <div className="p-4 bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-between group-hover:border-[#E63946] transition-all">
                         <span className="text-xs font-bold text-gray-400">Select file...</span>
                         <i className="fa-solid fa-cloud-arrow-up text-[#E63946]"></i>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>

               <div className="space-y-8">
                 <h3 className="font-bold text-gray-800">Final Consents</h3>
                 <div className="space-y-6">
                    {[
                      { id: 'marketing', label: 'I consent to Sakhisizwe using my star’s photos for marketing or newsletters.' },
                      { id: 'emergency', label: 'I consent to emergency medical treatment if required.' },
                      { id: 'truth', label: 'I confirm all information provided is true and correct.' }
                    ].map(c => (
                      <label key={c.id} className="flex items-start space-x-4 cursor-pointer group">
                        <div className="relative mt-1">
                          <input 
                            required 
                            type="checkbox" 
                            className="w-7 h-7 rounded-lg accent-[#E63946] cursor-pointer" 
                            checked={(formData.consents as any)[c.id]} 
                            onChange={e => setFormData({...formData, consents: {...formData.consents, [c.id]: e.target.checked}})} 
                          />
                        </div>
                        <span className="text-sm md:text-base text-gray-700 font-bold group-hover:text-[#E63946] transition-colors leading-relaxed">{c.label}</span>
                      </label>
                    ))}
                 </div>
               </div>
            </div>

            <div className="bg-red-50 p-12 rounded-[48px] border-4 border-dashed border-red-200 text-center space-y-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 text-7xl opacity-5 rotate-12">⭐</div>
               <div>
                 <p className="text-[#E63946] font-black uppercase tracking-[0.3em] text-xs mb-3">One-Time Registration Fee</p>
                 <div className="text-6xl font-display font-bold text-gray-900">R600 — R800</div>
                 <p className="text-gray-500 mt-4 font-bold italic">"Varies by age. Due only once your star is accepted."</p>
               </div>
               
               <form onSubmit={handleSubmit}>
                 <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-hover-lift w-full py-6 bg-[#E63946] text-white font-bold rounded-[32px] text-2xl shadow-[0_20px_40px_rgba(230,57,70,0.3)] ${isSubmitting ? 'opacity-50' : ''}`}
                 >
                  {isSubmitting ? 'Submitting...' : '🌟 Enrol My Star Now'}
                 </button>
               </form>
            </div>
          </div>
        )}

        {/* Dynamic Navigation */}
        <div className="flex justify-between mt-16 pt-10 border-t-2 border-gray-50">
          {step > 1 ? (
            <button 
              type="button" 
              onClick={() => setStep(step - 1)}
              className="px-10 py-5 bg-gray-100 text-gray-600 font-bold rounded-[24px] hover:bg-gray-200 transition-all text-lg"
            >
              <i className="fa-solid fa-arrow-left mr-2"></i> Back
            </button>
          ) : <div></div>}
          
          {step < 4 && (
            <button 
              type="button" 
              onClick={() => setStep(step + 1)}
              className="px-12 py-5 bg-gray-900 text-white font-bold rounded-[24px] hover:bg-black transition-all shadow-2xl text-lg flex items-center"
            >
              Continue <i className="fa-solid fa-arrow-right ml-3"></i>
            </button>
          )}
        </div>
      </div>
      
      <div className="mt-16 text-center space-y-4">
         <p className="text-gray-400 font-bold uppercase tracking-[0.4em] text-[10px]">Safe • Nurturing • Home</p>
         <div className="flex justify-center space-x-2">
            {[1,2,3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-red-100"></div>)}
         </div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById('enrol-root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<EnrolForm />);
}
