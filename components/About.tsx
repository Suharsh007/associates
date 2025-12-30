
import React from 'react';
import { Eye, Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1">
            <h2 className="text-sm font-bold tracking-widest text-orange-600 uppercase mb-4">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              A Major Infrastructure Player in Northern India
            </h3>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                <strong className="text-gray-900">Laxmi Infra Associates</strong> has expanded from humble beginnings to become a major infrastructure player in Northern India.
              </p>
              <p>
                We have built a reputation for executing large-scale projects with speed and precision. Our portfolio spans complex industrial plants, massive warehousing facilities, and high-end residential towers.
              </p>
              <p>
                We don't just build structures; we build long-term partnerships with repeat clients like <strong className="text-gray-900">Parle, Mayur, and Tata</strong>.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200" 
                alt="About Laxmi Infra" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Orange floating box */}
            <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-8 rounded-xl shadow-xl hidden md:block">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Years of Excellence</p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border-t-4 border-orange-500 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
              <Eye size={28} />
            </div>
            <h4 className="text-2xl font-black text-gray-900 mb-4">OUR VISION</h4>
            <p className="text-gray-600 text-lg leading-relaxed">
              To be the most trusted infrastructure partner in India, known for delivering world-class industrial solutions through integrity, engineering excellence, and safety.
            </p>
          </div>
          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border-t-4 border-orange-500 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
              <Rocket size={28} />
            </div>
            <h4 className="text-2xl font-black text-gray-900 mb-4">OUR MISSION</h4>
            <p className="text-gray-600 text-lg leading-relaxed">
              To maintain the highest levels of customer satisfaction by adapting to challenging project requirements and ensuring timely delivery, regardless of scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
