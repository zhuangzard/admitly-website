'use client';

import { useState, useMemo } from 'react';
import { Search, Filter, Heart, MapPin, Users, DollarSign, GraduationCap, Star } from 'lucide-react';
import { sampleSchools, schoolTypes, gradeLevels, tuitionRanges, type School } from '@/lib/sampleData';

export default function SchoolsPage() {
  const [filters, setFilters] = useState({
    location: '',
    gradeLevel: [] as string[],
    tuitionRange: '',
    schoolType: [] as string[],
    searchTerm: ''
  });

  const [sortBy, setSortBy] = useState('match');
  const [showFilters, setShowFilters] = useState(false);

  const filteredSchools = useMemo(() => {
    let filtered = sampleSchools.filter(school => {
      // Search term filter
      if (filters.searchTerm) {
        const searchLower = filters.searchTerm.toLowerCase();
        if (!school.name.toLowerCase().includes(searchLower) && 
            !school.location.toLowerCase().includes(searchLower) &&
            !school.tags.some(tag => tag.toLowerCase().includes(searchLower))) {
          return false;
        }
      }

      // Location filter
      if (filters.location && !school.location.toLowerCase().includes(filters.location.toLowerCase())) {
        return false;
      }

      // School type filter
      if (filters.schoolType.length > 0 && !filters.schoolType.includes(school.type)) {
        return false;
      }

      return true;
    });

    // Sort results
    switch (sortBy) {
      case 'match':
        filtered.sort((a, b) => b.matchScore - a.matchScore);
        break;
      case 'tuition-low':
        filtered.sort((a, b) => {
          const aPrice = parseInt(a.tuition.replace(/[^0-9]/g, ''));
          const bPrice = parseInt(b.tuition.replace(/[^0-9]/g, ''));
          return aPrice - bPrice;
        });
        break;
      case 'distance':
        filtered.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
        break;
      default:
        break;
    }

    return filtered;
  }, [filters, sortBy]);

  const handleGradeLevelChange = (grade: string) => {
    setFilters(prev => ({
      ...prev,
      gradeLevel: prev.gradeLevel.includes(grade)
        ? prev.gradeLevel.filter(g => g !== grade)
        : [...prev.gradeLevel, grade]
    }));
  };

  const handleSchoolTypeChange = (type: string) => {
    setFilters(prev => ({
      ...prev,
      schoolType: prev.schoolType.includes(type)
        ? prev.schoolType.filter(t => t !== type)
        : [...prev.schoolType, type]
    }));
  };

  const SchoolCard = ({ school }: { school: School }) => {
    const [isFavorited, setIsFavorited] = useState(false);

    return (
      <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden group">
        {/* School Image */}
        <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
          <span className="text-6xl">🏫</span>
          <button
            onClick={() => setIsFavorited(!isFavorited)}
            className="absolute top-4 right-4 p-2 bg-white bg-opacity-80 backdrop-blur-sm rounded-full hover:bg-opacity-100 transition-all"
          >
            <Heart className={`w-5 h-5 ${isFavorited ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
          </button>
        </div>

        <div className="p-6">
          {/* Match Score Badge */}
          <div className="flex justify-between items-start mb-3">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              {school.matchScore}% Match
            </span>
            <div className="flex items-center text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
          </div>

          <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
            {school.name}
          </h3>
          
          <div className="flex items-center text-gray-600 text-sm mb-4">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{school.location} • {school.distance}</span>
          </div>

          {/* Key Details */}
          <div className="space-y-3 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 flex items-center">
                <GraduationCap className="w-4 h-4 mr-1" />
                Grades:
              </span>
              <span className="font-medium">{school.grades}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 flex items-center">
                <DollarSign className="w-4 h-4 mr-1" />
                Tuition:
              </span>
              <span className="font-medium text-primary-600">{school.tuition}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 flex items-center">
                <Users className="w-4 h-4 mr-1" />
                Class Size:
              </span>
              <span className="font-medium">{school.classSize}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{school.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {school.tags.slice(0, 3).map(tag => (
              <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                {tag}
              </span>
            ))}
            {school.tags.length > 3 && (
              <span className="text-gray-500 text-xs">+{school.tags.length - 3} more</span>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button className="flex-1 bg-primary-500 text-white py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors">
              View Details
            </button>
            <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Compare
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect School</h1>
          
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search schools by name, location, or specialties..."
                value={filters.searchTerm}
                onChange={(e) => setFilters(prev => ({ ...prev, searchTerm: e.target.value }))}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className={`w-80 bg-white rounded-2xl p-6 h-fit sticky top-8 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg">Filter Schools</h3>
              <button
                onClick={() => setFilters({
                  location: '',
                  gradeLevel: [],
                  tuitionRange: '',
                  schoolType: [],
                  searchTerm: ''
                })}
                className="text-primary-500 text-sm hover:text-primary-600"
              >
                Clear All
              </button>
            </div>

            {/* Location Filter */}
            <div className="mb-6">
              <label className="block font-medium mb-3">Location</label>
              <input
                type="text"
                placeholder="City, State, or Zip Code"
                value={filters.location}
                onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Grade Level Filter */}
            <div className="mb-6">
              <label className="block font-medium mb-3">Grade Levels</label>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {gradeLevels.map(grade => (
                  <label key={grade} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.gradeLevel.includes(grade)}
                      onChange={() => handleGradeLevelChange(grade)}
                      className="mr-2 text-primary-500 focus:ring-primary-500"
                    />
                    <span className="text-sm">{grade}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Tuition Range Filter */}
            <div className="mb-6">
              <label className="block font-medium mb-3">Annual Tuition</label>
              <div className="space-y-2">
                {tuitionRanges.map(range => (
                  <label key={range} className="flex items-center">
                    <input
                      type="radio"
                      name="tuition"
                      checked={filters.tuitionRange === range}
                      onChange={() => setFilters(prev => ({ ...prev, tuitionRange: range }))}
                      className="mr-2 text-primary-500 focus:ring-primary-500"
                    />
                    <span className="text-sm">{range}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* School Type Filter */}
            <div className="mb-6">
              <label className="block font-medium mb-3">School Type</label>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {schoolTypes.map(type => (
                  <label key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.schoolType.includes(type)}
                      onChange={() => handleSchoolTypeChange(type)}
                      className="mr-2 text-primary-500 focus:ring-primary-500"
                    />
                    <span className="text-sm">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Found <span className="font-semibold">{filteredSchools.length}</span> schools matching your criteria
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="match">Sort by Best Match</option>
                <option value="tuition-low">Sort by Tuition (Low to High)</option>
                <option value="distance">Sort by Distance</option>
              </select>
            </div>

            {/* School Cards Grid */}
            {filteredSchools.length > 0 ? (
              <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-6">
                {filteredSchools.map((school) => (
                  <SchoolCard key={school.id} school={school} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No schools found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                <button
                  onClick={() => setFilters({
                    location: '',
                    gradeLevel: [],
                    tuitionRange: '',
                    schoolType: [],
                    searchTerm: ''
                  })}
                  className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Load More Button */}
            {filteredSchools.length > 0 && (
              <div className="text-center mt-12">
                <button className="bg-white border border-gray-200 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Load More Schools
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}