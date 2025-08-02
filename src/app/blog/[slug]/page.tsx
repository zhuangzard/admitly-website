'use client';

import { use } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, BookOpen, ChevronRight } from 'lucide-react';
import { blogPosts, recentPosts } from '@/lib/blogData';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const post = blogPosts.find(p => p.id === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog" className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary-500">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/blog" className="text-gray-500 hover:text-primary-500">Blog</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{post.category}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Article Meta */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
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
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-700 font-bold mr-4">
                  {post.authorAvatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{post.author}</div>
                  <div className="text-gray-600 text-sm">{post.authorRole}</div>
                </div>
              </div>
              
              {/* Share Button */}
              <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg text-gray-700 transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-12 mb-12 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <span className="text-6xl">
                  {post.category === 'Technology' ? '🤖' :
                   post.category === 'Admissions' ? '🎓' :
                   post.category === 'School Selection' ? '🏫' :
                   post.category === 'Financial Aid' ? '💰' :
                   post.category === 'Timeline' ? '📅' : '📚'}
                </span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">{post.category}</h2>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-gray max-w-none">
            <div className="text-gray-700 leading-relaxed">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                h1: ({children}) => <h1 className="text-4xl font-bold text-gray-900 mt-12 mb-8 leading-tight">{children}</h1>,
                h2: ({children}) => <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 leading-tight">{children}</h2>,
                h3: ({children}) => <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4 leading-tight">{children}</h3>,
                h4: ({children}) => <h4 className="text-xl font-bold text-gray-900 mt-8 mb-3 leading-tight">{children}</h4>,
                p: ({children}) => <p className="mb-6 text-lg leading-relaxed text-gray-700">{children}</p>,
                ul: ({children}) => <ul className="list-disc list-inside mb-6 ml-4 space-y-2">{children}</ul>,
                ol: ({children}) => <ol className="list-decimal list-inside mb-6 ml-4 space-y-2">{children}</ol>,
                li: ({children}) => <li className="mb-2 text-gray-700">{children}</li>,
                strong: ({children}) => <strong className="font-semibold text-gray-900">{children}</strong>,
                em: ({children}) => <em className="italic text-gray-700">{children}</em>,
                blockquote: ({children}) => <blockquote className="border-l-4 border-primary-500 pl-6 my-6 italic text-gray-600 bg-gray-50 py-4 rounded-r-lg">{children}</blockquote>,
                code: ({children}) => <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">{children}</code>,
                pre: ({children}) => <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6">{children}</pre>,
                a: ({children, href}) => <a href={href} className="text-primary-500 hover:text-primary-600 underline font-medium">{children}</a>,
                table: ({children}) => <div className="overflow-x-auto mb-6"><table className="w-full border-collapse border border-gray-300">{children}</table></div>,
                th: ({children}) => <th className="border border-gray-300 bg-gray-50 px-4 py-2 text-left font-semibold">{children}</th>,
                td: ({children}) => <td className="border border-gray-300 px-4 py-2">{children}</td>,
                hr: () => <hr className="my-8 border-gray-300" />
              }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 pt-8 border-t">
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-700 font-bold text-xl flex-shrink-0">
                  {post.authorAvatar}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.author}</h3>
                  <p className="text-primary-600 font-medium mb-3">{post.authorRole}</p>
                  <p className="text-gray-600 leading-relaxed">
                    {post.author === 'Dr. Sarah Chen' && 
                      'Dr. Chen brings over 15 years of experience in private school admissions, having served as Admissions Director at prestigious institutions. She specializes in helping families navigate the complex admissions landscape with data-driven insights.'}
                    {post.author === 'Michael Rodriguez' && 
                      'Michael has guided over 500 families through successful private school admissions. His expertise in interview preparation and application strategy has helped students gain acceptance to their top-choice schools.'}
                    {post.author === 'Jennifer Walsh' && 
                      'Jennifer combines her background as a former school administrator with her passion for educational consulting. She helps families find schools that truly match their values and educational goals.'}
                    {post.author === 'David Kim' && 
                      'David specializes in financial aid and scholarship guidance, having helped families secure over $5 million in financial assistance. His background in school business management provides unique insights into the aid process.'}
                    {post.author === 'Lisa Chen' && 
                      'Lisa is an expert in admissions timeline management and organization. Her systematic approach has helped hundreds of families stay on track and meet critical deadlines throughout the application process.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {relatedPosts.map(relatedPost => (
                <article key={relatedPost.id} className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden group">
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-3xl">
                        {relatedPost.category === 'Technology' ? '🤖' :
                         relatedPost.category === 'Admissions' ? '🎓' :
                         relatedPost.category === 'School Selection' ? '🏫' :
                         relatedPost.category === 'Financial Aid' ? '💰' :
                         relatedPost.category === 'Timeline' ? '📅' : '📚'}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium">
                        {relatedPost.category}
                      </span>
                      <span className="text-gray-500 text-sm">{relatedPost.readTime}</span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      <Link href={`/blog/${relatedPost.id}`}>
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    <Link 
                      href={`/blog/${relatedPost.id}`}
                      className="text-primary-500 hover:text-primary-600 font-medium text-sm flex items-center gap-1 group"
                    >
                      Read Article
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Admissions Journey?</h2>
          <p className="text-xl opacity-90 mb-8">
            Put these insights into action with Admitly&apos;s AI-powered platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/schools"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Browse Schools
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}