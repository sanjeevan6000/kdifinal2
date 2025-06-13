
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>+91 9910636464</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>info@kantdarshanindustries.com</span>
            </div>
          </div>
        
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/5c39a738-62cd-404f-a09d-81ebe5da9167.png" 
              alt="Kant Darshan Industries Logo" 
              className="h-12 w-12"
            />
            <div>
              <div className="text-xl font-bold text-slate-800">
                Kant Darshan Industries
              </div>
              <div className="text-xs text-orange-600 font-semibold">
                We Believe In Quality
              </div>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-orange-600 font-medium transition-colors duration-300">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-orange-600 font-medium transition-colors duration-300">About</button>
            <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-orange-600 font-medium transition-colors duration-300">Services</button>
            <button onClick={() => scrollToSection('capabilities')} className="text-slate-700 hover:text-orange-600 font-medium transition-colors duration-300">Capabilities</button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-orange-600 font-medium transition-colors duration-300">Contact</button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t animate-fade-in">
            <div className="flex flex-col space-y-4 pt-4">
              <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-orange-600 font-medium text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-orange-600 font-medium text-left">About</button>
              <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-orange-600 font-medium text-left">Services</button>
              <button onClick={() => scrollToSection('capabilities')} className="text-slate-700 hover:text-orange-600 font-medium text-left">Capabilities</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-orange-600 font-medium text-left">Contact</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
