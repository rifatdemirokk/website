import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Filter, Share2, Eye } from 'lucide-react';

const MediaPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'news', label: 'Company News' },
    { id: 'insights', label: 'Industry Insights' },
    { id: 'updates', label: 'Product Updates' },
    { id: 'guides', label: 'Guides & Tips' },
  ];

  const posts = [
    {
      id: 1,
      title: 'UpOne Reaches 500+ Company Milestone',
      excerpt: 'We\'re thrilled to announce that over 500 companies worldwide now trust UpOne with their HR operations, representing a 300% growth in the past year.',
      category: 'news',
      author: 'Sarah Johnson',
      date: '2025-01-15',
      readTime: '3 min read',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
    },
    {
      id: 2,
      title: 'The Future of AI in HR: 2025 Trends and Predictions',
      excerpt: 'Explore the latest trends in AI-powered HR technology and discover what the future holds for human resources automation and employee experience.',
      category: 'insights',
      author: 'Michael Chen',
      date: '2025-01-12',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
    },
    {
      id: 3,
      title: 'New Feature: Advanced Analytics Dashboard',
      excerpt: 'Introducing our most requested feature - comprehensive analytics that provide deep insights into your workforce patterns and productivity metrics.',
      category: 'updates',
      author: 'Lisa Rodriguez',
      date: '2025-01-10',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
    },
    {
      id: 4,
      title: 'Best Practices for Remote Team Management',
      excerpt: 'Learn proven strategies for managing remote teams effectively, including attendance tracking, performance monitoring, and maintaining team culture.',
      category: 'guides',
      author: 'David Kim',
      date: '2025-01-08',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
    },
    {
      id: 5,
      title: 'UpOne Partners with Leading Enterprise Solutions',
      excerpt: 'Strategic partnerships announced with major enterprise software providers to enhance integration capabilities and expand our global reach.',
      category: 'news',
      author: 'Emily Davis',
      date: '2025-01-05',
      readTime: '3 min read',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
    },
    {
      id: 6,
      title: 'How AI is Transforming Recruitment Processes',
      excerpt: 'Discover how artificial intelligence is revolutionizing talent acquisition, from CV screening to candidate matching and interview scheduling.',
      category: 'insights',
      author: 'Alex Johnson',
      date: '2025-01-03',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
    },
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'news': return 'bg-blue-100 text-blue-800';
      case 'insights': return 'bg-purple-100 text-purple-800';
      case 'updates': return 'bg-green-100 text-green-800';
      case 'guides': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleShare = (post: any) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Media & <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay updated with the latest news, insights, and updates from UpOne. 
              Discover industry trends, product announcements, and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-400 w-5 h-5" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && selectedCategory === 'all' && !searchTerm && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                    <span className={`ml-3 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredPost.category)}`}>
                      {categories.find(cat => cat.id === featuredPost.category)?.label}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{featuredPost.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                      <Eye className="w-4 h-4 mr-2" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <button
                      onClick={() => handleShare(featuredPost)}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                  <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
                <div className="lg:p-8">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                      {categories.find(cat => cat.id === post.category)?.label}
                    </span>
                    <button
                      onClick={() => handleShare(post)}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button className="w-full bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay in the Loop</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest updates, insights, and industry news.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaPage;