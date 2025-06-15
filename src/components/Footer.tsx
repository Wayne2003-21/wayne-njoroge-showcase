
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:wayne.njoroge@email.com', label: 'Email' },
    { icon: <Phone size={20} />, href: 'tel:+254700123456', label: 'Phone' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Wayne<span className="text-blue-400">.</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Multidisciplinary creative and developer based in Nakuru, Kenya. 
              Crafting beautiful digital experiences through design and code.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>wayne.njoroge@email.com</p>
              <p>+254 700 123 456</p>
              <p>Nakuru, Kenya</p>
            </div>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Wayne Njoroge. All rights reserved. Designed & Developed with ❤️ in Kenya.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
