
import React from 'react';
import { MILESTONES } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-4">Milestones</h2>
          <h3 className="text-3xl md:text-4xl font-black mb-4">Corporate Excellence</h3>
          <p className="text-gray-400 italic text-lg">
            "Executing projects ranging from ₹12 Cr to ₹80 Cr with precision."
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {MILESTONES.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-colors group">
              <div className="text-4xl md:text-5xl font-black text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm font-bold tracking-widest text-gray-300 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
