
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000" 
          alt="Construction background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 mb-6 text-sm font-bold tracking-widest uppercase bg-orange-600 text-white rounded">
            Premium Corporate Profile
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1]">
            LAXMI INFRA<br />
            <span className="text-orange-500">ASSOCIATES</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium mb-4">
            Constructing the Future of Industry.
          </p>
          <div className="flex flex-wrap gap-4 text-gray-400 font-semibold text-lg border-l-2 border-orange-600 pl-4 mb-10">
            <span>Industrial</span>
            <span className="text-orange-600">|</span>
            <span>Warehousing</span>
            <span className="text-orange-600">|</span>
            <span>Institutional</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-all group active:scale-95"
            >
              Our Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#about" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all border border-white/30"
            >
              About Us
            </a>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-10 right-10 hidden lg:block opacity-20">
        <div className="w-64 h-64 border-[20px] border-orange-500 rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
