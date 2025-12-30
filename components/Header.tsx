
import React, { useState } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Projects', href: '#projects' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' },
  ];

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
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <a 
            href="#" 
            className="flex items-center gap-2 group"
            onClick={(e) => scrollToSection(e, '#')}
          >
            <div className={`p-1.5 rounded-lg transition-colors ${scrolled ? 'bg-orange-500 text-white' : 'bg-white text-orange-600'}`}>
              <Building2 size={24} />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl leading-none transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                LAXMI INFRA
              </span>
              <span className={`text-[10px] font-medium tracking-widest uppercase transition-colors ${scrolled ? 'text-orange-600' : 'text-orange-400'}`}>
                ASSOCIATES
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm font-semibold hover:text-orange-500 transition-colors ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-5 py-2 rounded-full bg-orange-600 text-white text-sm font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20 active:scale-95"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 rounded-md ${scrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button 
          className="absolute top-6 right-6 p-2 text-gray-900"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            className="text-2xl font-bold text-gray-900 hover:text-orange-500"
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#contact"
          onClick={(e) => scrollToSection(e, '#contact')}
          className="px-8 py-3 rounded-full bg-orange-600 text-white text-lg font-bold"
        >
          Get a Quote
        </a>
      </div>
    </header>
  );
};

export default Header;
