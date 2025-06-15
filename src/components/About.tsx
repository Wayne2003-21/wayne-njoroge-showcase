
import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="text-neon-green" size={32} />,
      title: 'Innovation',
      description: 'We push boundaries and explore new creative possibilities in every project.'
    },
    {
      icon: <Eye className="text-neon-blue" size={32} />,
      title: 'Quality',
      description: 'Excellence is our standard. We deliver pixel-perfect designs and clean code.'
    },
    {
      icon: <Award className="text-neon-purple" size={32} />,
      title: 'Trust',
      description: 'Building long-term relationships through reliability and transparency.'
    },
    {
      icon: <Users className="text-neon-green" size={32} />,
      title: 'Collaboration',
      description: 'Your vision combined with our expertise creates extraordinary results.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">About Nuvue Studios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded with a vision to bridge creativity and technology, we're a dynamic studio 
            that transforms ideas into compelling digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              Our Story
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Based in the heart of Nakuru, Kenya, Nuvue Studios was born from the belief that 
              great design and development should be accessible to businesses of all sizes. We 
              combine artistic vision with technical expertise to create solutions that not only 
              look stunning but perform exceptionally.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of passionate creatives and developers work collaboratively to ensure 
              every project exceeds expectations. From startups to established enterprises, 
              we've helped numerous clients achieve their digital goals.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-neon-green/10 to-neon-blue/10 rounded-xl">
                <div className="text-2xl font-bold text-neon-green mb-2">2021</div>
                <div className="text-gray-600 text-sm">Founded</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 rounded-xl">
                <div className="text-2xl font-bold text-neon-blue mb-2">50+</div>
                <div className="text-gray-600 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="bg-gradient-to-br from-neon-green/20 to-neon-blue/20 rounded-2xl p-8 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                  alt="Nuvue Studios Team" 
                  className="w-full h-80 rounded-xl object-cover shadow-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon-green mb-1">99%</div>
                  <div className="text-gray-600 text-sm">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {value.icon}
              </div>
              <h4 className="text-xl font-heading font-bold text-gray-900 mb-4">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
