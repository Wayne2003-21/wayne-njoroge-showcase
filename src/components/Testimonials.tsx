
import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Kiprotich',
      position: 'CEO, TechVision Kenya',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c9ad?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: "Nuvue Studios transformed our brand identity completely. Their creative vision and attention to detail exceeded our expectations. The team is professional, responsive, and truly understands modern design principles."
    },
    {
      name: 'Michael Ochieng',
      position: 'Founder, Digital Solutions Ltd',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: "Working with Nuvue Studios was exceptional. They delivered a stunning website that perfectly captures our brand essence. Their development skills are top-notch, and the project was completed on time and within budget."
    },
    {
      name: 'Grace Wanjiku',
      position: 'Marketing Director, Nakuru Enterprises',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: "The team at Nuvue Studios is incredibly talented. They took our vague ideas and turned them into a beautiful, functional website. Their expertise in both design and development is evident in every aspect of their work."
    },
    {
      name: 'David Mutua',
      position: 'Owner, Rift Valley Coffee',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: "From logo design to our complete digital presence, Nuvue Studios handled everything perfectly. Their creative approach and technical expertise helped us stand out in a competitive market. Highly recommended!"
    },
    {
      name: 'Linda Nyambura',
      position: 'Founder, Creative Hub Africa',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: "Nuvue Studios understands the local market while delivering international quality. Their designs are fresh, modern, and exactly what we needed to elevate our brand. The entire process was smooth and professional."
    },
    {
      name: 'James Kipkorir',
      position: 'Director, Innovation Lab',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: "Outstanding work from start to finish. Nuvue Studios combines creativity with technical excellence. They listened to our needs, provided valuable insights, and delivered results that exceeded our expectations."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-navy-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about working with Nuvue Studios and the results we've delivered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-4">
                <Quote className="text-neon-green mb-3" size={32} />
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

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-neon-green mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-blue mb-2">99%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-purple mb-2">100+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-green mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Ready to join our satisfied clients?</p>
          <button 
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-neon-green to-neon-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
