
import React from 'react';
import { Palette, Code, Globe, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette className="text-pink-500" size={40} />,
      title: 'Graphic Design',
      description: 'Creating visually stunning designs that communicate your brand message effectively.',
      features: ['Logo Design', 'Brand Identity', 'Print Design', 'Digital Graphics']
    },
    {
      icon: <Globe className="text-blue-500" size={40} />,
      title: 'UI/UX Design',
      description: 'Designing intuitive user interfaces that provide exceptional user experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing']
    },
    {
      icon: <Code className="text-green-500" size={40} />,
      title: 'Web Development',
      description: 'Building responsive, fast, and secure websites using modern technologies.',
      features: ['Frontend Development', 'Backend Integration', 'CMS Development', 'E-commerce']
    },
    {
      icon: <Zap className="text-yellow-500" size={40} />,
      title: 'Full-Stack Solutions',
      description: 'End-to-end digital solutions from concept to deployment and maintenance.',
      features: ['Project Planning', 'Design & Development', 'Testing & QA', 'Deployment & Support']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, I offer comprehensive creative and technical services 
            to help your business stand out in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
