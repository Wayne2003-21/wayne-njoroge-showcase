import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/wayne-githaiga-43065623b', label: 'LinkedIn' },
    { icon: <Github size={20} />, href: 'https://github.com/Wayne2003-21', label: 'GitHub' }
  ];

  const services = [
    'Brand Identity Design',
    'UI/UX Design',
    'Web Development',
    'Graphic Design',
    'Print Design',
    'Digital Marketing'
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-charcoal-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/60669ec2-fb9b-4c7c-b7bb-6823898bbcb8.png" 
                alt="Nuvue Studios" 
                className="h-8 w-auto mr-3"
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Designing impact and developing the future. We're a creative studio 
              based in Nairobi, Kenya, specializing in innovative design and development solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gradient-to-r hover:from-royal-blue hover:to-electric-purple transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-neon-green transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-neon-green transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-3 text-royal-blue" />
                <span>waynenjoroge123@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-3 text-royal-blue" />
                <span>+254 729 591 963</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-3 text-royal-blue" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-royal-blue/10 to-electric-purple/10 rounded-lg border border-royal-blue/20">
              <h5 className="font-semibold text-royal-blue mb-2">Ready to Start?</h5>
              <p className="text-sm text-gray-400 mb-3">
                Get a free consultation for your next project.
              </p>
              <button 
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-royal-blue to-electric-purple text-white px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition-transform duration-300"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} Nuvue Studios. All rights reserved. Designed & Developed with ❤️ in Kenya.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-royal-blue transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-royal-blue transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-royal-blue transition-colors duration-300">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
