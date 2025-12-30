
import React from 'react';
import { Factory, Warehouse, Utensils, CheckCircle2 } from 'lucide-react';
import { SECTORS } from '../constants';

const Expertise: React.FC = () => {
  const iconMap: { [key: string]: any } = {
    Factory: Factory,
    Warehouse: Warehouse,
    Utensils: Utensils
  };

  return (
    <section id="expertise" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-orange-600 uppercase mb-4">Expertise</h2>
          <h3 className="text-4xl font-black text-gray-900 mb-6">Sectors of Specialization</h3>
          <p className="text-gray-600 text-lg">
            We provide specialized infrastructure solutions tailored to the unique requirements of various heavy industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {SECTORS.map((sector, index) => {
            const IconComp = iconMap[sector.icon];
            return (
              <div key={index} className="p-10 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-orange-600 text-white rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <IconComp size={32} />
                </div>
                <h4 className="text-xl font-black text-gray-900 mb-4">{sector.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {sector.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Deep Dives */}
        <div className="space-y-24">
          {/* Food Processing Deep Dive */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200" 
                alt="Food Processing Plant" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-sm font-bold text-orange-600 tracking-widest uppercase mb-4">Sector Focus</h4>
              <h5 className="text-3xl font-black text-gray-900 mb-6 uppercase">Food Processing Excellence</h5>
              <p className="text-gray-600 text-lg mb-8">
                We understand the unique nuances of the Food & FMCG sector, ensuring the highest standards of hygiene and operational efficiency.
              </p>
              <ul className="space-y-4">
                {[
                  { title: "Hygiene First", desc: "Dust-free flooring and sealed environments." },
                  { title: "Utility Integration", desc: "Complex piping for steam, oil, and gas." },
                  { title: "Rapid Execution", desc: "Ensuring production lines start on time." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle2 className="text-orange-600 shrink-0" />
                    <div>
                      <span className="font-bold text-gray-900">{item.title}:</span>
                      <span className="text-gray-600 ml-2">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Warehousing Deep Dive */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h4 className="text-sm font-bold text-orange-600 tracking-widest uppercase mb-4">Solution Focus</h4>
              <h5 className="text-3xl font-black text-gray-900 mb-6 uppercase">Warehousing Solutions</h5>
              <p className="text-gray-600 text-lg mb-8">
                Our warehousing projects are designed for maximum efficiency and durability, accommodating heavy logistics demands.
              </p>
              <ul className="space-y-4">
                {[
                  { title: "High-Grade Flooring", desc: "VDF/Laser screed flooring for heavy forklifts." },
                  { title: "PEB Coordination", desc: "Seamless integration with pre-engineered structures." },
                  { title: "Scalability", desc: "Modular designs that allow for future expansion." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle2 className="text-orange-600 shrink-0" />
                    <div>
                      <span className="font-bold text-gray-900">{item.title}:</span>
                      <span className="text-gray-600 ml-2">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" 
                alt="Warehouse Structure" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
