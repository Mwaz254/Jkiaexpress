import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'Ultimate Guide to JKIA: Tips for First-Time Visitors',
      excerpt: 'Everything you need to know about navigating Jomo Kenyatta International Airport, from arrival to departure.',
      image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      author: 'JKIA Express Team',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Travel Tips'
    },
    {
      title: 'Best Areas to Stay in Nairobi for Business Travelers',
      excerpt: 'Discover the top neighborhoods in Nairobi that offer convenience, safety, and proximity to business districts.',
      image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      author: 'Travel Expert',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Business Travel'
    },
    {
      title: 'Nairobi Traffic: Best Times to Travel to Avoid Congestion',
      excerpt: 'Learn about Nairobi traffic patterns and the optimal times to schedule your airport transfers.',
      image: 'https://images.pexels.com/photos/1595232/pexels-photo-1595232.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      author: 'Local Expert',
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'Local Insights'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Travel Insights & Tips</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest travel guides, local insights, and tips for making the most of your time in Nairobi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <button className="text-blue-900 hover:text-yellow-500 font-medium flex items-center gap-2 transition-colors">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/blog"
            className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            View All Articles
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;