
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-4">Get In Touch</h2>
          <h3 className="text-4xl font-black mb-6">Partner With Us</h3>
          <p className="text-gray-400 text-lg">
            We look forward to partnering with you on your next visionary project. Reach out to discuss your infrastructure needs via our direct channels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Head Office */}
          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center text-center gap-6 hover:border-orange-500/50 transition-colors h-full">
            <div className="shrink-0 w-16 h-16 bg-orange-600/20 text-orange-500 rounded-2xl flex items-center justify-center">
              <MapPin size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3 uppercase tracking-wide">Head Office</h4>
              <p className="text-gray-400 leading-relaxed">
                Ambedakar park, Raniya Sachendi,<br />
                Kanpur dehat, Uttar Pradesh, 209304
              </p>
            </div>
          </div>

          {/* Contact Numbers */}
          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center text-center gap-6 hover:border-orange-500/50 transition-colors h-full">
            <div className="shrink-0 w-16 h-16 bg-orange-600/20 text-orange-500 rounded-2xl flex items-center justify-center">
              <Phone size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3 uppercase tracking-wide">Contact Numbers</h4>
              <p className="text-gray-400 text-lg font-medium">
                +91 9935120953<br />
                +91 8400456033
              </p>
            </div>
          </div>

          {/* Email Address */}
          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center text-center gap-6 hover:border-orange-500/50 transition-colors h-full">
            <div className="shrink-0 w-16 h-16 bg-orange-600/20 text-orange-500 rounded-2xl flex items-center justify-center">
              <Mail size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3 uppercase tracking-wide">Email Us</h4>
              <p className="text-gray-400 text-lg break-all">
                krishnasrivastava956@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
