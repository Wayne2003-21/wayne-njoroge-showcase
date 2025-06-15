
import React from 'react';
import { Code, Palette, Globe, Award } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Design',
      icon: <Palette className="text-pink-500" size={24} />,
      items: ['Photoshop', 'UI/UX Design', 'Branding', 'Illustration', 'Logo Design']
    },
    {
      category: 'Development',
      icon: <Code className="text-blue-500" size={24} />,
      items: ['JavaScript', 'HTML/CSS', 'PHP/MySQL', 'Responsive Design', 'WordPress']
    },
    {
      category: 'Tools & Platforms',
      icon: <Globe className="text-green-500" size={24} />,
      items: ['Adobe Creative Suite', 'Figma', 'Git/GitHub', 'VS Code', 'Hostinger']
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate creative professional who bridges the gap between design and development, 
            creating meaningful digital experiences that make an impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                alt="Wayne Njoroge" 
                className="w-64 h-64 rounded-full mx-auto object-cover shadow-xl"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Crafting Digital Excellence from Nakuru, Kenya
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With a unique blend of artistic vision and technical expertise, I specialize in creating 
              compelling visual identities and robust web solutions. My journey began with a passion 
              for design, which naturally evolved into full-stack development capabilities.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you need a stunning brand identity, an intuitive user interface, or a fully 
              functional website, I bring creativity and precision to every project. I believe in 
              the power of good design to transform businesses and connect with audiences.
            </p>

            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    {skill.icon}
                    <h4 className="font-semibold text-gray-900 ml-3">{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <span 
                        key={itemIndex}
                        className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
