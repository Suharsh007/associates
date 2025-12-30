
import React from 'react';
import { MapPin, ArrowUpRight, Clock } from 'lucide-react';
import { FEATURED_PROJECTS, ONGOING_PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-orange-600 uppercase mb-4">Our Portfolio</h2>
          <h3 className="text-4xl font-black text-gray-900 mb-6">Masterpieces in Infrastructure</h3>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-24">
          {FEATURED_PROJECTS.map((project, index) => (
            <div key={index} className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
              <div className="lg:w-1/2 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg ${
                    project.type === 'flagship' ? 'bg-orange-600 text-white' : 'bg-slate-900 text-white'
                  }`}>
                    {project.type} Project
                  </span>
                </div>
              </div>
              <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                {project.location && (
                  <div className="flex items-center gap-2 text-orange-600 text-sm font-bold mb-4">
                    <MapPin size={16} />
                    {project.location}
                  </div>
                )}
                <h4 className="text-3xl font-black text-gray-900 mb-4">{project.title}</h4>
                <div className="mb-6">
                  <h5 className="text-sm font-bold uppercase text-gray-400 tracking-widest mb-2">Scope</h5>
                  <p className="text-gray-900 font-semibold">{project.scope}</p>
                </div>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {project.description}
                </p>
                <button className="inline-flex items-center gap-2 text-orange-600 font-bold hover:gap-3 transition-all">
                  View Case Study <ArrowUpRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Ongoing Projects */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-10">
            <h4 className="text-2xl font-black text-gray-900">Ongoing Projects (2025)</h4>
            <div className="flex items-center gap-2 text-orange-600 animate-pulse">
              <Clock size={20} />
              <span className="font-bold text-sm uppercase tracking-widest">Active Development</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {ONGOING_PROJECTS.map((project, index) => (
              <div key={index} className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-orange-500 transition-colors">
                <h5 className="text-orange-600 font-black text-xl mb-4 uppercase">{project.title}</h5>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Project Cards based on page 14-15 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           <div className="p-6 bg-slate-900 text-white rounded-2xl">
              <h5 className="text-orange-500 font-bold uppercase mb-2">FMCG Excellence</h5>
              <p className="text-lg font-bold mb-1">Kesari Foods Pvt. Ltd.</p>
              <p className="text-sm text-gray-400">Large Scale Processing & Utility Integration</p>
           </div>
           <div className="p-6 bg-slate-900 text-white rounded-2xl">
              <h5 className="text-orange-500 font-bold uppercase mb-2">Heavy Engineering</h5>
              <p className="text-lg font-bold mb-1">Pahladrai Steel</p>
              <p className="text-sm text-gray-400">Plot No 364, Chitikpur, Raniyan</p>
           </div>
           <div className="p-6 bg-slate-900 text-white rounded-2xl">
              <h5 className="text-orange-500 font-bold uppercase mb-2">Heavy Engineering</h5>
              <p className="text-lg font-bold mb-1">Milton Confectionery</p>
              <p className="text-sm text-gray-400">Site-5 Udyog Kunj, Kanpur</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
