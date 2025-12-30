
import React from 'react';
import { Building2 } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-orange-600 text-white">
                <Building2 size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none">LAXMI INFRA</span>
                <span className="text-[10px] font-medium tracking-widest uppercase text-orange-400">ASSOCIATES</span>
              </div>
            </div>
            <p className="text-gray-500 leading-relaxed">
              M/S Laxmi Infra Associates is a premier construction firm specializing in large-scale industrial and warehousing projects across Northern India.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-orange-500 transition-colors">About Company</a></li>
              <li><a href="#expertise" onClick={(e) => scrollToSection(e, '#expertise')} className="hover:text-orange-500 transition-colors">Expertise & Sectors</a></li>
              <li><a href="#projects" onClick={(e) => scrollToSection(e, '#projects')} className="hover:text-orange-500 transition-colors">Completed Projects</a></li>
              <li><a href="#clients" onClick={(e) => scrollToSection(e, '#clients')} className="hover:text-orange-500 transition-colors">Client Network</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-orange-500 transition-colors">Work With Us</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-bold mb-6">Solutions</h4>
            <ul className="space-y-4 text-gray-500">
              <li><span className="cursor-default">Industrial Civil Work</span></li>
              <li><span className="cursor-default">Warehouse PEB Sheds</span></li>
              <li><span className="cursor-default">High-Load Flooring</span></li>
              <li><span className="cursor-default">Food Grade Hygiene</span></li>
              <li><span className="cursor-default">Turnkey EPC Projects</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
            <p className="text-gray-500 mb-6">Subscribe for the latest infrastructure trends and project news.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-orange-500" />
              <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">Go</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 font-medium">
          <p>© 2025 Laxmi Infra Associates. All Rights Reserved.</p>
          <div className="flex gap-8">
            <span className="cursor-default">Privacy Policy</span>
            <span className="cursor-default">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
