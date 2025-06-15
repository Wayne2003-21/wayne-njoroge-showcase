
import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: '10 Design Trends That Will Dominate 2024',
      excerpt: 'Discover the latest design trends that are shaping the creative industry and how to implement them in your projects.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop',
      date: '2024-01-15',
      author: 'Nuvue Team',
      readTime: '5 min read',
      category: 'Design'
    },
    {
      id: 2,
      title: 'The Future of Web Development: What to Expect',
      excerpt: 'Explore upcoming technologies and frameworks that will revolutionize web development in the coming years.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop',
      date: '2024-01-10',
      author: 'Nuvue Team',
      readTime: '7 min read',
      category: 'Development'
    },
    {
      id: 3,
      title: 'Building Effective Brand Identity: A Complete Guide',
      excerpt: 'Learn the essential elements of creating a memorable brand identity that resonates with your target audience.',
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&h=250&fit=crop',
      date: '2024-01-05',
      author: 'Nuvue Team',
      readTime: '6 min read',
      category: 'Branding'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Latest Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, tips, and insights from the world of 
            design and development. Our blog features expert advice and industry knowledge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-neon-green text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                  <Clock size={16} className="mr-2" />
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-neon-green transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User size={16} className="mr-2" />
                    <span>{post.author}</span>
                  </div>
                  
                  <button className="text-neon-green font-semibold flex items-center group-hover:translate-x-1 transition-transform duration-300">
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="border-2 border-neon-green text-neon-green px-8 py-3 rounded-full font-semibold hover:bg-neon-green hover:text-white transition-all duration-300 transform hover:scale-105">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
