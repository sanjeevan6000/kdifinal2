
import React from 'react';
import { Award, Users, Factory, TrendingUp } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const About = () => {
  const stats = [
    { icon: <Award size={36} />, value: 28, suffix: "+", label: "Years Experience" },
    { icon: <Users size={36} />, value: 20, suffix: "+", label: "CNC Centers"},
    { icon: <Factory size={36} />, value: 19500, suffix: "", label: "Sq. Ft. Plant" },
    { icon: <TrendingUp size={36} />, value: 10, suffix: "", label: "Microns Tolerance", prefix: "±" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-100 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-block px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-semibold mb-6">
              About Us
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
              About Kant Darshan
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Industries
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                <span className="font-semibold text-slate-900">Established in 1996</span>, Kant Darshan Industries LLP 
                is a seasoned manufacturer of precision CNC-turned automotive components. With nearly three decades 
                of focused experience, we are known for delivering reliable and high-quality machining solutions 
                specifically for the automotive industry.
              </p>
              <p>
                Our <span className="font-semibold text-orange-600">19,500 sq. ft. plant in IMT Faridabad</span> houses 
                20 CNC turning centers, VMC machinery, and a fully-equipped quality inspection lab. We serve premium 
                automotive OEMs and Tier-1 suppliers, committed to providing precision auto components with stringent 
                quality requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-slate-100">
                  <div className="text-orange-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                    />
                  </div>
                  <div className="text-sm text-slate-600 font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-orange-500/20 to-transparent rounded-3xl blur-2xl"></div>
              
              <div className="relative space-y-6">
                <img 
                  src="/lovable-uploads/eec8ad29-dc53-49e8-bd61-91c6756866da.png" 
                  alt="CNC turning operation showing precision machining" 
                  className="w-full rounded-2xl shadow-2xl"
                />
                
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-orange-400 mb-2">ISO 9001:2015</div>
                      <div className="text-slate-300 font-medium">Certified Quality Management</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">Since 1996</div>
                      <div className="text-orange-400 text-sm">Trusted Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
