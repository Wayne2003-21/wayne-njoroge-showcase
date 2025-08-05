
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Let's Create Together</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Get in touch with us and let's discuss how 
            we can help you achieve your goals through innovative design and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-neon-green to-neon-blue p-3 rounded-lg mr-4">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">hello@nuvuestudios.co.ke</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-neon-blue to-neon-purple p-3 rounded-lg mr-4">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+254 700 000 000</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-neon-purple to-neon-green p-3 rounded-lg mr-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neon-green/10 to-neon-blue/10 p-6 rounded-2xl border border-neon-green/20">
              <h4 className="font-bold text-gray-900 mb-4">Why Choose Nuvue Studios?</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="text-neon-green mr-3" size={20} />
                  Fast project delivery
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-neon-green mr-3" size={20} />
                  Unlimited revisions included
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-neon-green mr-3" size={20} />
                  100% satisfaction guarantee
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-neon-green mr-3" size={20} />
                  Ongoing support & maintenance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-neon-green mr-3" size={20} />
                  Competitive pricing
                </li>
              </ul>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
              <div className="flex items-center mb-4">
                <Clock className="text-neon-blue mr-3" size={24} />
                <h4 className="font-bold text-gray-900">Working Hours</h4>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  <option value="branding">Brand Identity & Logo Design</option>
                  <option value="web-design">Website Design</option>
                  <option value="web-development">Web Development</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="full-stack">Full-Stack Solution</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-neon-green to-neon-blue text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 disabled:scale-100 disabled:opacity-70 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Send Message
                  </>
                )}
              </button>

              {isSubmitted && (
                <div className="bg-neon-green/10 border border-neon-green/20 rounded-lg p-4 flex items-center">
                  <CheckCircle className="text-neon-green mr-3" size={20} />
                  <p className="text-neon-green font-medium">Thank you! Your message has been sent successfully. We'll get back to you within 24 hours!</p>
                </div>
              )}
            </form>

            <div className="mt-8 p-6 bg-gradient-to-r from-neon-green/10 to-neon-blue/10 rounded-2xl border border-neon-green/20">
              <div className="flex items-center mb-4">
                <MessageCircle className="text-neon-green mr-3" size={24} />
                <h4 className="font-bold text-gray-900">Quick Response Guarantee</h4>
              </div>
              <p className="text-gray-600">
                We respond to all inquiries within 2 hours during business hours. 
                For urgent projects, call us directly for immediate assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
