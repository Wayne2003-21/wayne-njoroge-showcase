
import React from 'react';
import { ExternalLink, Eye } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'FoodEneza - Food Donor System',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop',
      description: 'A platform that bridges the gap between surplus food and hunger. Connects food donors with those in need to reduce waste and fight hunger.',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      type: 'Web Application',
      liveUrl: 'https://foodeneza.netlify.app/'
    },
    {
      id: 2,
      title: 'Sample Portfolio',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop',
      description: 'A personal portfolio website showcasing creative work, skills, and experience with a modern dark-themed design.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      type: 'Portfolio Website',
      liveUrl: 'https://porfolio202.netlify.app'
    },
    {
      id: 3,
      title: "Ann's Restaurant",
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      description: 'A restaurant website featuring menus, chef profiles, event planning, and table booking with a clean, appetizing design.',
      tech: ['React', 'Tailwind CSS', 'TypeScript'],
      type: 'Restaurant Website',
      liveUrl: 'https://anns-restaurant.netlify.app'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Explore our latest work showcasing real projects we've built for our clients.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-border"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-foreground p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg">
                      <Eye size={20} />
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-foreground p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors"
                >
                  Live Preview <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
