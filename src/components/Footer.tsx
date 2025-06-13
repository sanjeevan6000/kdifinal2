
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/5c39a738-62cd-404f-a09d-81ebe5da9167.png" 
                alt="Kant Darshan Industries Logo" 
                className="h-8 w-8"
              />
              <div>
                <h3 className="text-lg font-bold text-orange-400">Kant Darshan Industries</h3>
                <p className="text-xs text-slate-400 font-medium">We Believe In Quality</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4 leading-relaxed text-sm">
              Your trusted partner for precision automotive components since 1996. 
              Quality, reliability, and innovation in every project.
            </p>
            <div className="flex space-x-4">
              <Facebook className="text-slate-400 hover:text-orange-400 cursor-pointer transition-colors duration-300" size={20} />
              <Twitter className="text-slate-400 hover:text-orange-400 cursor-pointer transition-colors duration-300" size={20} />
              <Linkedin className="text-slate-400 hover:text-orange-400 cursor-pointer transition-colors duration-300" size={20} />
              <Instagram className="text-slate-400 hover:text-orange-400 cursor-pointer transition-colors duration-300" size={20} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-slate-300 hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-300 hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-orange-400 transition-colors">Services</a></li>
              <li><a href="#capabilities" className="text-slate-300 hover:text-orange-400 transition-colors">Capabilities</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Automotive Expertise</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Engine Components</li>
              <li>Transmission Parts</li>
              <li>Suspension Systems</li>
              <li>Brake Components</li>
              <li>Exhaust Parts</li>
              <li>Quality Assurance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-orange-400" />
                <span className="text-slate-300">+91 9910636464</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-orange-400" />
                <span className="text-slate-300">info@kantdarshanindustries.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-orange-400 mt-1" />
                <span className="text-slate-300">
                  Plot no: 298, Sector: 68
                  IMT Faridabad<br />
                  Haryana, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Kant Darshan Industries LLP. All rights reserved. | 
            <span className="ml-2">ISO 9001:2015 Certified | Automotive Component Specialists</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
