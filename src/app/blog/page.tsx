'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, User, Tag, Search, ChevronRight } from 'lucide-react';
import { blogPosts, categories, featuredPosts } from '@/lib/blogData';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const BlogCard = ({ post, featured = false }: { post: any; featured?: boolean }) => (
    <article className={`bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden group ${featured ? 'lg:col-span-2' : ''}`}>
      {/* Featured Image Placeholder */}
      <div className={`bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center ${featured ? 'h-64' : 'h-48'}`}>
        <div className="text-center">
          <div className={`bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg ${featured ? 'w-20 h-20' : 'w-16 h-16'}`}>
            <span className={featured ? 'text-4xl' : 'text-3xl'}>
              {post.category === 'Technology' ? '🤖' :
               post.category === 'Admissions' ? '🎓' :
               post.category === 'School Selection' ? '🏫' :
               post.category === 'Financial Aid' ? '💰' :
               post.category === 'Timeline' ? '📅' : '📚'}
            </span>
          </div>
          <span className="text-xs text-gray-600">{post.category}</span>
        </div>
      </div>

      <div className="p-6">
        {/* Category and Date */}
        <div className="flex items-center justify-between mb-3">
          <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
            {post.category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(post.publishedAt).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>

        {/* Title */}
        <h2 className={`font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors ${featured ? 'text-2xl' : 'text-xl'}`}>
          <Link href={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map(tag => (
            <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
              #{tag}
            </span>
          ))}
        </div>

        {/* Author and Read Time */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-700 font-bold text-sm mr-3">
              {post.authorAvatar}
            </div>
            <div>
              <div className="font-medium text-gray-900 text-sm">{post.author}</div>
              <div className="text-gray-500 text-xs">{post.authorRole}</div>
            </div>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="w-4 h-4 mr-1" />
            {post.readTime}
          </div>
        </div>

        {/* Read More Link */}
        <div className="mt-4 pt-4 border-t">
          <Link 
            href={`/blog/${post.id}`}
            className="text-primary-500 hover:text-primary-600 font-medium text-sm flex items-center gap-1 group"
          >
            Read Full Article
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Admitly Blog</h1>
          <p className="text-xl opacity-90 mb-8">
            Expert insights, practical tips, and the latest trends in private school admissions
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {searchTerm === '' && selectedCategory === 'All' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredPosts.map(post => (
                <BlogCard key={post.id} post={post} featured={true} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              {searchTerm ? (
                <>Showing {filteredPosts.length} results for &ldquo;{searchTerm}&rdquo;</>
              ) : (
                <>Showing {filteredPosts.length} articles{selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}</>
              )}
            </p>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search terms or category filter</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Load More Button */}
          {filteredPosts.length > 9 && (
            <div className="text-center mt-12">
              <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl opacity-90 mb-8">
            Get the latest admissions insights and tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <button className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            No spam, unsubscribe at any time
          </p>
        </div>
      </section>
    </div>
  );
}