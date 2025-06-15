
import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Brand Identity Design',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=300&fit=crop',
      description: 'Complete brand identity package for a tech startup including logo, colors, and guidelines.',
      tech: ['Photoshop', 'Illustrator', 'Branding']
    },
    {
      id: 2,
      title: 'E-commerce Website',
      category: 'development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      description: 'Fully responsive e-commerce platform with payment integration and admin dashboard.',
      tech: ['JavaScript', 'PHP', 'MySQL', 'CSS3']
    },
    {
      id: 3,
      title: 'Mobile App UI Design',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
      description: 'Modern mobile app interface design with focus on user experience and accessibility.',
      tech: ['Figma', 'UI/UX', 'Prototyping']
    },
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'development',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      description: 'Responsive portfolio website showcasing creative work with smooth animations.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive']
    },
    {
      id: 5,
      title: 'Restaurant Branding',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop',
      description: 'Complete visual identity for a local restaurant including menu design and signage.',
      tech: ['Photoshop', 'Print Design', 'Branding']
    },
    {
      id: 6,
      title: 'CMS Dashboard',
      category: 'development',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      description: 'Custom content management system with intuitive dashboard and user management.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap']
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'design', label: 'Design' },
    { key: 'development', label: 'Development' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A showcase of my recent work in graphic design and web development. 
            Each project represents a unique challenge and creative solution.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Filter className="inline-block mr-2" size={16} />
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
                    <button className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition-colors">
                      <ExternalLink size={20} />
                    </button>
                    <button className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition-colors">
                      <Github size={20} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
