
import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-off-white via-white to-gray-50 pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-royal-blue rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-electric-purple rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-aqua-mint rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-royal-blue mr-2" size={24} />
            <span className="text-royal-blue font-semibold">Welcome to Nuvue Studios</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-charcoal-gray mb-6 leading-tight">
            Designing <span className="bg-gradient-to-r from-royal-blue to-electric-purple bg-clip-text text-transparent">Impact.</span>
            <br />
            Developing the <span className="bg-gradient-to-r from-electric-purple to-aqua-mint bg-clip-text text-transparent">Future.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We're a creative studio based in Nakuru, Kenya, crafting beautiful digital experiences 
            through innovative graphic design and cutting-edge web development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={scrollToPortfolio}
              className="group bg-gradient-to-r from-royal-blue to-electric-purple text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center"
            >
              View Portfolio
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            
            <button 
              onClick={scrollToContact}
              className="group border-2 border-royal-blue text-royal-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-royal-blue hover:text-white transition-all duration-300 flex items-center"
            >
              <Play className="mr-2" size={20} />
              Get Quote
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-royal-blue mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-electric-purple mb-2">99%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-aqua-mint mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
