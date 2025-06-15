
import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Wayne Njoroge</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Multidisciplinary Creative & Developer
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Based in Nakuru, Kenya, I craft beautiful digital experiences through 
            graphic design and web development. Let's bring your ideas to life!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={scrollToContact}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="inline-block mr-2" size={20} />
              Hire Me
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
              <Download className="inline-block mr-2" size={20} />
              Download CV
            </button>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="mx-auto text-gray-400" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
