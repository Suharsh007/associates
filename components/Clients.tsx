
import React from 'react';
import { CLIENTS } from '../constants';
import { Star, Building } from 'lucide-react';

const Clients: React.FC = () => {
  const fmcgClients = CLIENTS.filter(c => c.category === 'fmcg');
  const industrialClients = CLIENTS.filter(c => c.category === 'industrial');

  return (
    <section id="clients" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-orange-600 uppercase mb-4">Our Network</h2>
          <h3 className="text-4xl font-black text-gray-900 mb-6">Valued Client Partnerships</h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We don't just build structures; we build long-term relationships with leaders across multiple industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Food & FMCG Clients */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b-2 border-orange-100 pb-4">
              <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                <Star size={24} fill="currentColor" />
              </div>
              <h4 className="text-xl font-black text-gray-900">FOOD & FMCG</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fmcgClients.map((client, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 text-sm font-medium text-gray-700 hover:bg-orange-50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  {client.name}
                </div>
              ))}
            </div>
          </div>

          {/* Industrial & Corporate */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b-2 border-gray-100 pb-4">
              <div className="p-2 bg-gray-100 text-gray-600 rounded-lg">
                <Building size={24} />
              </div>
              <h4 className="text-xl font-black text-gray-900 uppercase">Industrial & Corporate</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industrialClients.map((client, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-slate-600" />
                  {client.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
