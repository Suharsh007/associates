
import React from 'react';
import { ShieldCheck, Cpu, Timer } from 'lucide-react';

const Commitment: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-orange-600 uppercase mb-4">Our Values</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Commitment to Excellence
            </h3>
            <p className="text-gray-600 text-xl italic mb-12">
              "At Laxmi Infra Associates, we believe that quality is not an act, but a habit."
            </p>

            <div className="space-y-6">
              {[
                { 
                  icon: <ShieldCheck className="text-orange-600" size={28} />, 
                  title: "SAFETY FIRST", 
                  desc: "Rigorous safety protocols for all on-site personnel." 
                },
                { 
                  icon: <Cpu className="text-orange-600" size={28} />, 
                  title: "PRECISION ENGINEERING", 
                  desc: "Using the latest technology for accurate structural execution." 
                },
                { 
                  icon: <Timer className="text-orange-600" size={28} />, 
                  title: "TIMELY DELIVERY", 
                  desc: "A track record of finishing projects within the stipulated timeline." 
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="shrink-0 p-3 bg-orange-50 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <img src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Constructing" />
                <img src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg w-full h-48 object-cover" alt="Steel Structure" />
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg w-full h-48 object-cover" alt="Engineering" />
                <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Civil Work" />
              </div>
            </div>
            {/* Circle Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-600 rounded-full border-8 border-white flex flex-col items-center justify-center text-white shadow-2xl">
              <span className="text-3xl font-black">100%</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
