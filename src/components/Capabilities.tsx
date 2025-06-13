
import React from 'react';
import { CheckCircle, Zap, Shield, Award } from 'lucide-react';

const Capabilities = () => {
  const materials = [
    "Automotive Grade Steel", "Stainless Steel", "Alloy Steel", "Aluminum Alloys", "Brass & Bronze"
  ];

  const automotiveApplications = [
    "Engine Components", "Transmission Parts", "Suspension Systems", 
    "Brake Components", "Exhaust Parts", "Fuel System Components"
  ];

  const infrastructure = [
    { spec: "CNC Turning Centers", value: "20 Centers", icon: <Zap size={20} /> },
    { spec: "BFW VMC (3-axis)", value: "1 Machine", icon: <Zap size={20} /> },
    { spec: "Traub Machines", value: "8 Units", icon: <Zap size={20} /> },
    { spec: "Centerless & Belt Grinders", value: "Available", icon: <Zap size={20} /> },
    { spec: "Quality Lab", value: "Fully Equipped", icon: <Shield size={20} /> },
    { spec: "DG Backup", value: "125 KVA", icon: <Zap size={20} /> }
  ];

  const automotiveProducts = [
    "Engine Shafts & Pins", "Transmission Shafts", "Suspension Bushings",
    "Brake System Components", "Exhaust Flanges", "Fuel Injection Parts"
  ];

  return (
    <section id="capabilities" className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block px-6 py-3 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-6">
            Our Capabilities
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Automotive Manufacturing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Infrastructure
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            State-of-the-art manufacturing facility with advanced CNC machinery and comprehensive 
            quality control systems to deliver precision automotive components.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {/* Materials */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in border border-slate-100">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-orange-100 rounded-xl mr-4">
                <Award className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Materials</h3>
            </div>
            <div className="space-y-4">
              {materials.map((material, index) => (
                <div key={index} className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                  <CheckCircle className="text-orange-500 flex-shrink-0" size={18} />
                  <span className="text-slate-700 font-medium">{material}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Automotive Applications */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in border border-slate-100" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-slate-100 rounded-xl mr-4">
                <Zap className="text-slate-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Applications</h3>
            </div>
            <div className="space-y-4">
              {automotiveApplications.map((application, index) => (
                <div key={index} className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                  <CheckCircle className="text-slate-600 flex-shrink-0" size={18} />
                  <span className="text-slate-700 font-medium">{application}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Infrastructure */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in border border-slate-100" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 rounded-xl mr-4">
                <Shield className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Infrastructure</h3>
            </div>
            <div className="space-y-5">
              {infrastructure.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg group-hover:bg-slate-100 transition-colors duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="text-slate-600">{item.icon}</div>
                    <div className="font-medium text-slate-900 text-sm">{item.spec}</div>
                  </div>
                  <div className="text-orange-600 font-bold text-sm">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in border border-slate-100" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-100 rounded-xl mr-4">
                <CheckCircle className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Product Expertise</h3>
            </div>
            <div className="space-y-4">
              {automotiveProducts.map((product, index) => (
                <div key={index} className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                  <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                  <span className="text-slate-700 font-medium">{product}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Automotive Clients Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 shadow-2xl animate-fade-in relative overflow-hidden" style={{ animationDelay: '0.4s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">Key Automotive Clients</h3>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Trusted by leading automotive manufacturers and suppliers across the industry
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                "Victora Automotive Inc.",
                "Imperial Auto Industries", 
                "Uniparts India Ltd.",
                "Global Autotech Ltd.",
                "Avadh Rail Infra Ltd."
              ].map((client, index) => (
                <div key={index} className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <div className="text-center">
                    <div className="font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                      {client}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
