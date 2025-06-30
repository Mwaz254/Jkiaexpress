import React from 'react';
import { Star, Users, Award, TrendingUp, Facebook, Instagram, Twitter } from 'lucide-react';

const SocialProof = () => {
  const achievements = [
    {
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      number: '4.9/5',
      label: 'Customer Rating',
      description: 'Based on 500+ verified reviews'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      number: '10,000+',
      label: 'Happy Customers',
      description: 'Served since 2015'
    },
    {
      icon: <Award className="h-8 w-8 text-green-500" />,
      number: '100%',
      label: 'Safety Record',
      description: 'Zero incidents in 8+ years'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
      number: '95%',
      label: 'Repeat Customers',
      description: 'Customer retention rate'
    }
  ];

  const recentReviews = [
    {
      name: 'John M.',
      rating: 5,
      text: 'Excellent service! Driver was professional and vehicle was clean.',
      time: '2 hours ago',
      verified: true
    },
    {
      name: 'Mary K.',
      rating: 5,
      text: 'Always reliable. Used them 10+ times, never disappointed.',
      time: '5 hours ago',
      verified: true
    },
    {
      name: 'Peter O.',
      rating: 5,
      text: 'Great value for money. Will definitely use again.',
      time: '1 day ago',
      verified: true
    }
  ];

  const mediaFeatures = [
    {
      outlet: 'Daily Nation',
      title: 'Top Airport Taxi Services in Nairobi',
      quote: 'JKIA Express stands out for reliability and professionalism'
    },
    {
      outlet: 'Business Daily',
      title: 'Best Corporate Transportation',
      quote: 'Preferred choice for business travelers'
    },
    {
      outlet: 'Travel Kenya',
      title: 'Tourist Recommended Services',
      quote: 'Highly rated by international visitors'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Achievement Stats */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Trusted by Thousands</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Our track record speaks for itself. Join thousands of satisfied customers who trust us with their transportation needs.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 transition-colors duration-300">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-2">{achievement.number}</div>
                <div className="text-lg font-medium text-gray-900 mb-1">{achievement.label}</div>
                <div className="text-sm text-gray-600">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Recent Customer Reviews</h3>
            <p className="text-gray-600">See what our customers are saying right now</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentReviews.map((review, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border-l-4 border-yellow-500">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">{review.name}</span>
                    {review.verified && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Verified
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{review.time}</span>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Media Features */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Featured In</h3>
            <p className="text-gray-600">Recognized by leading media outlets</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaFeatures.map((feature, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-lg font-bold text-blue-900 mb-2">{feature.outlet}</div>
                <div className="text-sm font-medium text-gray-900 mb-3">{feature.title}</div>
                <p className="text-gray-700 italic">"{feature.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Proof */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Follow Us on Social Media</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Stay updated with our latest news, customer stories, and special offers. Join our growing community!
          </p>
          
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://www.facebook.com/profile.php?id=61577234415707"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 rounded-full p-4 transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://instagram.com/jkiaexpress"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 rounded-full p-4 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://twitter.com/jkiaexpress"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 rounded-full p-4 transition-colors"
            >
              <Twitter size={24} />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-500 mb-1">2.5K+</div>
              <div className="text-blue-100">Facebook Followers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-500 mb-1">1.8K+</div>
              <div className="text-blue-100">Instagram Followers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-500 mb-1">1.2K+</div>
              <div className="text-blue-100">Twitter Followers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;