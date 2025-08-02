'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Star, MapPin, Clock, Users, BookOpen, Video, Calendar, Filter, Search, Award, Verified } from 'lucide-react';

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'tutoring', name: 'Academic Tutoring' },
    { id: 'test-prep', name: 'Test Preparation' },
    { id: 'consulting', name: 'Admissions Consulting' },
    { id: 'enrichment', name: 'Enrichment Classes' },
    { id: 'counseling', name: 'Educational Counseling' }
  ];

  const serviceTypes = [
    { id: 'all', name: 'All Types' },
    { id: 'online', name: 'Online Classes' },
    { id: 'in-person', name: 'In-Person' },
    { id: 'hybrid', name: 'Hybrid' },
    { id: 'self-paced', name: 'Self-Paced' }
  ];

  const providers = [
    {
      id: 'dr-sarah-chen',
      name: 'Dr. Sarah Chen',
      title: 'Former Harvard Admissions Officer',
      avatar: 'SC',
      rating: 4.9,
      reviews: 234,
      location: 'Cambridge, MA',
      verified: true,
      category: 'consulting',
      type: 'online',
      specialties: ['Private School Admissions', 'Essay Writing', 'Interview Prep'],
      experience: '15+ years',
      hourlyRate: 150,
      availability: 'Available This Week',
      description: 'Former Harvard admissions officer with 15 years of experience helping students gain admission to top private schools.',
      courses: [
        { name: 'Private School Application Mastery', students: 1205, rating: 4.8, price: 299 },
        { name: 'Interview Excellence Workshop', students: 856, rating: 4.9, price: 199 }
      ]
    },
    {
      id: 'prof-michael-rodriguez',
      name: 'Prof. Michael Rodriguez',
      title: 'Mathematics Educator & Test Prep Specialist',
      avatar: 'MR',
      rating: 4.8,
      reviews: 189,
      location: 'Online Worldwide',
      verified: true,
      category: 'tutoring',
      type: 'online',
      specialties: ['Advanced Mathematics', 'SAT/ACT Prep', 'Competition Math'],
      experience: '12+ years',
      hourlyRate: 85,
      availability: 'Available Today',
      description: 'MIT graduate and former prep school teacher specializing in advanced mathematics and standardized test preparation.',
      courses: [
        { name: 'Advanced Algebra Mastery', students: 2341, rating: 4.7, price: 149 },
        { name: 'SAT Math Prep Intensive', students: 1876, rating: 4.8, price: 199 },
        { name: 'Competition Math Training', students: 743, rating: 4.9, price: 249 }
      ]
    },
    {
      id: 'ms-jennifer-walsh',
      name: 'Ms. Jennifer Walsh',
      title: 'English Literature & Writing Specialist',
      avatar: 'JW',
      rating: 4.9,
      reviews: 156,
      location: 'New York, NY',
      verified: true,
      category: 'enrichment',
      type: 'hybrid',
      specialties: ['Creative Writing', 'Literature Analysis', 'College Essays'],
      experience: '10+ years',
      hourlyRate: 95,
      availability: 'Next Week',
      description: 'Published author and former Dalton School teacher offering creative writing and literature courses.',
      courses: [
        { name: 'Creative Writing Workshop', students: 1432, rating: 4.8, price: 179 },
        { name: 'College Essay Bootcamp', students: 987, rating: 4.9, price: 229 }
      ]
    },
    {
      id: 'dr-david-kim',
      name: 'Dr. David Kim',
      title: 'Science Education & Research Mentor',
      avatar: 'DK',
      rating: 4.7,
      reviews: 201,
      location: 'San Francisco, CA',
      verified: true,
      category: 'enrichment',
      type: 'online',
      specialties: ['Biology', 'Chemistry', 'Research Methods', 'Science Fair Mentoring'],
      experience: '18+ years',
      hourlyRate: 110,
      availability: 'Available This Week',
      description: 'Former Stanford researcher and current science educator helping students excel in STEM fields.',
      courses: [
        { name: 'Advanced Biology Lab', students: 1654, rating: 4.7, price: 199 },
        { name: 'Science Fair Mastery', students: 823, rating: 4.8, price: 159 },
        { name: 'Research Methods for Students', students: 567, rating: 4.9, price: 249 }
      ]
    },
    {
      id: 'ms-lisa-thompson',
      name: 'Ms. Lisa Thompson',
      title: 'Arts & Music Education Specialist',
      avatar: 'LT',
      rating: 4.8,
      reviews: 143,
      location: 'Los Angeles, CA',
      verified: true,
      category: 'enrichment',
      type: 'in-person',
      specialties: ['Piano', 'Music Theory', 'Art Portfolio Development'],
      experience: '14+ years',
      hourlyRate: 75,
      availability: 'Available Today',
      description: 'Juilliard graduate and performing artist offering music and arts education for students of all levels.',
      courses: [
        { name: 'Piano Fundamentals', students: 1876, rating: 4.8, price: 129 },
        { name: 'Art Portfolio Preparation', students: 654, rating: 4.7, price: 199 }
      ]
    },
    {
      id: 'dr-robert-johnson',
      name: 'Dr. Robert Johnson',
      title: 'Educational Psychology & Learning Specialist',
      avatar: 'RJ',
      rating: 4.9,
      reviews: 178,
      location: 'Chicago, IL',
      verified: true,
      category: 'counseling',
      type: 'online',
      specialties: ['Learning Differences', 'Study Skills', 'Academic Coaching'],
      experience: '20+ years',
      hourlyRate: 125,
      availability: 'Next Week',
      description: 'Licensed educational psychologist specializing in helping students with learning differences reach their full potential.',
      courses: [
        { name: 'Study Skills Mastery', students: 2134, rating: 4.8, price: 149 },
        { name: 'Academic Success Strategies', students: 1234, rating: 4.9, price: 179 }
      ]
    }
  ];

  const filteredProviders = providers.filter(provider => {
    const categoryMatch = selectedCategory === 'all' || provider.category === selectedCategory;
    const typeMatch = selectedType === 'all' || provider.type === selectedType;
    const searchMatch = searchTerm === '' || 
      provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.specialties.some(specialty => specialty.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return categoryMatch && typeMatch && searchMatch;
  });

  const ProviderCard = ({ provider }: { provider: typeof providers[0] }) => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Provider Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-xl flex-shrink-0">
            {provider.avatar}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-semibold text-gray-900">{provider.name}</h3>
              {provider.verified && (
                <Verified className="w-5 h-5 text-blue-500" />
              )}
            </div>
            <p className="text-gray-600 mb-2">{provider.title}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="font-medium">{provider.rating}</span>
                <span>({provider.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{provider.location}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">${provider.hourlyRate}</div>
            <div className="text-sm text-gray-600">per hour</div>
          </div>
        </div>
      </div>

      {/* Provider Details */}
      <div className="p-6">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-green-700">{provider.availability}</span>
          </div>
          <p className="text-gray-700 text-sm">{provider.description}</p>
        </div>

        <div className="mb-4">
          <h4 className="font-medium text-gray-900 mb-2">Specialties</h4>
          <div className="flex flex-wrap gap-2">
            {provider.specialties.map(specialty => (
              <span key={specialty} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                {specialty}
              </span>
            ))}
          </div>
        </div>

        {/* Available Courses */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-900 mb-3">Available Courses</h4>
          <div className="space-y-2">
            {provider.courses.map(course => (
              <div key={course.name} className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-900 text-sm">{course.name}</h5>
                    <div className="flex items-center gap-3 mt-1 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>{course.students} students</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">${course.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-primary-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-600 transition-colors">
            <Calendar className="w-4 h-4 mr-2 inline" />
            Book Session
          </button>
          <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            <Video className="w-4 h-4 mr-2 inline" />
            View Profile
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Teacher & Consultant Marketplace</h1>
          <p className="text-xl opacity-90 mb-8">
            Connect with expert educators and admissions professionals
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, subject, or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="font-medium text-gray-900">Filters:</span>
            </div>
            
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-700">Category:</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-700">Type:</label>
              <select 
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              >
                {serviceTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>

            <div className="ml-auto text-sm text-gray-600">
              {filteredProviders.length} providers found
            </div>
          </div>
        </div>

        {/* Featured Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Educators</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {filteredProviders.slice(0, 3).map(provider => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
        </div>

        {/* All Providers */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Providers</h2>
          {filteredProviders.length > 0 ? (
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProviders.map(provider => (
                <ProviderCard key={provider.id} provider={provider} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No providers found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search terms or filters</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedType('all');
                }}
                className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>

        {/* Become a Provider CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Provider</h2>
          <p className="text-xl opacity-90 mb-6">
            Share your expertise and earn revenue by teaching students worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/marketplace/apply"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply to Teach
            </Link>
            <Link
              href="/marketplace/learn-more"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}