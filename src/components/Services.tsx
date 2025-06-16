import React from 'react';
import { Palette, Code, Smartphone, Globe, Zap, Layers } from 'lucide-react';

const Services = () => {
  const designServices = [
    {
      icon: <Palette className="text-royal-blue" size={32} />,
      title: 'Branding & Identity',
      description: 'Complete brand packages including logos, color schemes, and brand guidelines.',
      features: ['Logo Design', 'Brand Guidelines', 'Color Palettes', 'Typography']
    },
    {
      icon: <Smartphone className="text-electric-purple" size={32} />,
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive and engaging digital experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing']
    },
    {
      icon: <Layers className="text-aqua-mint" size={32} />,
      title: 'Graphics & Print',
      description: 'Stunning visual communications for both digital and print media.',
      features: ['Social Media Graphics', 'Print Design', 'Photo Manipulation', 'Illustrations']
    }
  ];

  const devServices = [
    {
      icon: <Globe className="text-royal-blue" size={32} />,
      title: 'Website Development',
      description: 'Modern, responsive websites built with the latest technologies and best practices.',
      features: ['Responsive Design', 'CMS Integration', 'E-commerce', 'Performance Optimization']
    },
    {
      icon: <Code className="text-electric-purple" size={32} />,
      title: 'Frontend Development',
      description: 'Interactive user interfaces that bring designs to life with smooth animations.',
      features: ['React/Vue Development', 'Custom Animations', 'API Integration', 'Cross-browser Support']
    },
    {
      icon: <Zap className="text-aqua-mint" size={32} />,
      title: 'Full-Stack Solutions',
      description: 'End-to-end development from concept to deployment and ongoing maintenance.',
      features: ['Project Planning', 'Database Design', 'Backend Development', 'Cloud Deployment']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-off-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal-gray mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From creative concepts to technical implementation, we offer comprehensive 
            solutions to elevate your brand and digital presence.
          </p>
        </div>

        {/* Graphic Design Services */}
        <div className="mb-20">
          <h3 className="text-3xl font-heading font-bold text-center text-charcoal-gray mb-12">
            Graphic Design
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {designServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                      <div className="w-2 h-2 bg-royal-blue rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Web Development Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-heading font-bold text-center text-charcoal-gray mb-12">
            Web Development
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {devServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                      <div className="w-2 h-2 bg-electric-purple rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-royal-blue to-electric-purple text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
