
import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Modern Brand Identity',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop',
      description: 'Complete brand identity design for a tech startup including logo, color palette, and brand guidelines.',
      tech: ['Photoshop', 'Illustrator', 'Figma'],
      type: 'Branding'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      category: 'development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      description: 'Fully responsive e-commerce platform with modern UI and seamless user experience.',
      tech: ['React', 'Node.js', 'MongoDB'],
      type: 'Web Development'
    },
    {
      id: 3,
      title: 'Mobile App Interface',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      description: 'Intuitive mobile app design focusing on user experience and modern aesthetics.',
      tech: ['Figma', 'Sketch', 'Principle'],
      type: 'UI/UX Design'
    },
    {
      id: 4,
      title: 'Corporate Website',
      category: 'development',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      description: 'Professional corporate website with custom CMS and advanced functionality.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
      type: 'Web Development'
    },
    {
      id: 5,
      title: 'Restaurant Branding',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      description: 'Complete visual identity for a premium restaurant including menu design and signage.',
      tech: ['Photoshop', 'InDesign', 'Illustrator'],
      type: 'Print Design'
    },
    {
      id: 6,
      title: 'SaaS Dashboard',
      category: 'development',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      description: 'Modern SaaS dashboard with real-time data visualization and user management.',
      tech: ['Vue.js', 'Chart.js', 'Tailwind CSS'],
      type: 'Web Application'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'design', label: 'Graphic Design' },
    { key: 'development', label: 'Web Development' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Explore our latest work showcasing creative design solutions and innovative 
            web development projects that drive results for our clients.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-neon-green to-neon-blue text-white shadow-lg'
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
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <button className="bg-white text-gray-700 p-3 rounded-full hover:bg-neon-green hover:text-white transition-colors shadow-lg">
                      <Eye size={20} />
                    </button>
                    <button className="bg-white text-gray-700 p-3 rounded-full hover:bg-neon-blue hover:text-white transition-colors shadow-lg">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="border-2 border-neon-green text-neon-green px-8 py-3 rounded-full font-semibold hover:bg-neon-green hover:text-white transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
