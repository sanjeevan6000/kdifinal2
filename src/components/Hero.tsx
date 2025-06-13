
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCapabilities = () => {
    const element = document.getElementById('capabilities');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-medium mb-6">
              ✦ Precision Manufacturing Excellence
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Precision Auto
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Component
              </span>
              <span className="block text-4xl lg:text-5xl text-slate-300 font-light">
                Manufacturing
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-10 text-slate-300 leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Kant Darshan Industries LLP delivers precision CNC-turned auto components with 
              <span className="text-orange-400 font-semibold"> nearly three decades</span> of expertise and reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <button 
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
              >
                Get Quote 
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button 
                onClick={scrollToCapabilities}
                className="border-2 border-orange-400/50 text-orange-400 px-10 py-4 rounded-xl font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 backdrop-blur-sm"
              >
                View Capabilities
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <CheckCircle className="text-orange-400 flex-shrink-0" size={24} />
                <span className="font-medium">ISO 9001:2015</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <CheckCircle className="text-orange-400 flex-shrink-0" size={24} />
                <span className="font-medium">28+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <CheckCircle className="text-orange-400 flex-shrink-0" size={24} />
                <span className="font-medium">Auto Industry Focus</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                <img 
                  src="/lovable-uploads/be790994-6da9-44a2-9959-0a1e4c6963bd.png" 
                  alt="Precision CNC turned automotive components" 
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4 rounded-2xl shadow-2xl animate-pulse">
              <div className="text-2xl font-bold">±10 µm</div>
              <div className="text-orange-100 text-sm font-medium">Precision</div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-slate-800 to-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl border border-slate-700">
              <div className="text-lg font-bold text-orange-400">20</div>
              <div className="text-slate-300 text-sm">CNC Centers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
