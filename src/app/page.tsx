'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Star, ChevronRight, Play, Video, BarChart3, Users } from 'lucide-react';
import { testimonials } from '@/lib/sampleData';

export default function Home() {
  const [searchData, setSearchData] = useState({
    zipCode: '',
    grade: ''
  });

  const valueProps = [
    {
      icon: "🔍",
      title: "AI School Matching",
      description: "Smart algorithm analyzes 50+ factors to find schools that perfectly match your child's profile and family values",
      color: "from-primary-100 to-primary-200",
      link: "/schools"
    },
    {
      icon: "🤖",
      title: "AI Interview Training",
      description: "Practice with school-specific questions and get real-time AI feedback on your interview responses",
      color: "from-blue-100 to-blue-200",
      link: "/interview-prep"
    },
    {
      icon: "📊",
      title: "Student Tracking",
      description: "Long-term academic monitoring with quarterly reports and comprehensive college preparation planning",
      color: "from-green-100 to-green-200",
      link: "/student-tracking"
    },
    {
      icon: "👥",
      title: "Expert Marketplace",
      description: "Connect with verified tutors, consultants, and former admissions officers for personalized guidance",
      color: "from-purple-100 to-purple-200",
      link: "/marketplace"
    }
  ];

  const processSteps = [
    { title: "Create Profile", description: "Tell us about your child" },
    { title: "Discover Schools", description: "Get AI-powered matches" },
    { title: "Prepare & Practice", description: "Master interviews & applications" },
    { title: "Apply & Succeed", description: "Get into your dream school" }
  ];

  const stats = [
    { number: "10,000+", label: "Families Served" },
    { number: "500+", label: "Partner Schools" },
    { number: "95%", label: "Success Rate" },
    { number: "90%", label: "Cost Savings" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Find Your Child&apos;s
                <span className="text-primary-500 block">Perfect Private School</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                AI-powered guidance at <strong>90% less cost</strong> than traditional consulting. 
                Get personalized school matches, interview prep, and expert support.
              </p>
              <div className="flex items-center gap-2 mb-8 text-gray-500">
                <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded flex items-center justify-center text-white font-bold text-xs">
                  PEG
                </div>
                <span className="text-sm">A Primary Education Group Company</span>
              </div>
              
              {/* Search Bar */}
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Enter zip code"
                    value={searchData.zipCode}
                    onChange={(e) => setSearchData({...searchData, zipCode: e.target.value})}
                    className="flex-1 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <select
                    value={searchData.grade}
                    onChange={(e) => setSearchData({...searchData, grade: e.target.value})}
                    className="p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select Grade</option>
                    <option value="pre-k">Pre-K</option>
                    <option value="kindergarten">Kindergarten</option>
                    <option value="1st">1st Grade</option>
                    <option value="2nd">2nd Grade</option>
                    <option value="3rd">3rd Grade</option>
                    <option value="4th">4th Grade</option>
                    <option value="5th">5th Grade</option>
                    <option value="6th">6th Grade</option>
                    <option value="7th">7th Grade</option>
                    <option value="8th">8th Grade</option>
                    <option value="9th">9th Grade</option>
                    <option value="10th">10th Grade</option>
                    <option value="11th">11th Grade</option>
                    <option value="12th">12th Grade</option>
                  </select>
                  <Link
                    href="/schools"
                    className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <Search className="w-5 h-5" />
                    Get Started
                  </Link>
                </div>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="p-3">
                    <div className="text-2xl font-bold text-primary-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              {/* Hero Visual */}
              <div className="bg-gradient-to-br from-accent-100 to-secondary-100 rounded-3xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
                <div className="text-center z-10">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <span className="text-6xl">🎓</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">See Admitly in Action</h3>
                  <p className="text-gray-600">Interactive demo coming soon</p>
                  <button className="mt-4 bg-white bg-opacity-80 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-opacity-100 transition-all">
                    <Play className="w-5 h-5 text-primary-500" />
                    <span className="font-medium">Watch Demo</span>
                  </button>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-200 rounded-full opacity-60"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 bg-pink-200 rounded-full opacity-60"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-200 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Admitly?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with proven admissions expertise 
              to give your family the best chance of success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((item, index) => (
              <Link key={index} href={item.link} className="text-center p-6 rounded-2xl border-2 border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all group block">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                <div className="mt-4 text-primary-500 font-medium text-sm flex items-center justify-center gap-1">
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four simple steps to find and get into your child&apos;s perfect private school
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {index + 1}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full">
                      <ChevronRight className="w-6 h-6 text-gray-400 mx-auto" />
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
            >
              Learn More About Our Process
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from families who found their perfect school match with Admitly
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.location}</div>
                    <div className="text-primary-600 text-sm font-medium">{testimonial.school}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Perfect School?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of families who have successfully navigated private school admissions with Admitly. 
            Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ChevronRight className="w-5 h-5" />
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