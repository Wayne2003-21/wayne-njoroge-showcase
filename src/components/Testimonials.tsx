
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, Tech Innovations Ltd',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c9ad?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: "Wayne's creative vision and technical skills are exceptional. He delivered our brand identity and website beyond our expectations. Truly professional and reliable."
    },
    {
      name: 'Michael Chen',
      position: 'Marketing Director, StartUp Hub',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: "Working with Wayne was a game-changer for our business. His attention to detail and ability to understand our vision made the entire process smooth and enjoyable."
    },
    {
      name: 'Grace Wanjiku',
      position: 'Founder, Nakuru Crafts',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: "Wayne transformed our small business with stunning graphics and a beautiful website. His work helped us attract more customers and grow our online presence."
    },
    {
      name: 'David Kimani',
      position: 'Restaurant Owner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: "From logo design to menu layouts, Wayne's creativity brought our restaurant's brand to life. His work is both beautiful and practical. Highly recommended!"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about 
            working with me and the results we've achieved together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4">
                <Quote className="text-blue-600 mb-2" size={32} />
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Ready to join these satisfied clients?</p>
          <button 
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
