
import React from 'react';
import { Cog, Settings, Target, Wrench, Shield, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Cog className="text-orange-500" size={48} />,
      title: "Automotive CNC Turning (±10 microns)",
      description: "High-precision CNC turning for automotive components with tolerances up to ±10 microns using state-of-the-art machinery."
    },
    {
      icon: <Settings className="text-orange-500" size={48} />,
      title: "Engine & Transmission Parts",
      description: "Specialized manufacturing of engine shafts, transmission components, and drivetrain parts with automotive-grade materials."
    },
    {
      icon: <Target className="text-orange-500" size={48} />,
      title: "VMC Machining (3-axis)",
      description: "Advanced 3-axis VMC machining for complex automotive component requirements with precise dimensional accuracy."
    },
    {
      icon: <Wrench className="text-orange-500" size={48} />,
      title: "Suspension & Brake Components",
      description: "Precision manufacturing of suspension parts and brake components with required heat treatment and surface finishing."
    },
    {
      icon: <Shield className="text-orange-500" size={48} />,
      title: "Quality Assurance & Testing",
      description: "Comprehensive quality control with advanced inspection equipment meeting stringent automotive industry standards."
    },
    {
      icon: <Clock className="text-orange-500" size={48} />,
      title: "High Volume Production",
      description: "Scalable production capabilities from prototype development to 400,000+ automotive parts per year with consistent quality."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-orange-50/30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block px-6 py-3 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-6">
            Our Expertise
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Automotive Manufacturing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive CNC turning and machining solutions for the automotive industry with state-of-the-art 
            equipment and three decades of expertise in precision automotive component manufacturing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 transform hover:scale-105 animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CNC Machining Showcase */}
        <div className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Precision CNC Machining in Action
              </h3>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Our advanced CNC turning centers deliver exceptional precision and quality for automotive components, 
                ensuring every part meets the stringent requirements of the automotive industry.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">±10µm</div>
                  <div className="text-slate-300">Precision Tolerance</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                  <div className="text-slate-300">Production Capability</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-transparent rounded-2xl blur-xl"></div>
              <img 
                src="/lovable-uploads/c71e889c-74a5-4ef8-b225-4919c7c01f38.png" 
                alt="CNC machining process with coolant" 
                className="relative w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
