'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TrendingUp, Calendar, Award, BookOpen, Users, Target, FileText, BarChart3, PlusCircle, ExternalLink } from 'lucide-react';

export default function StudentTrackingPage() {
  const [selectedStudent, setSelectedStudent] = useState('emma-chen');
  const [selectedTimeframe, setSelectedTimeframe] = useState('current-year');

  const students = [
    { id: 'emma-chen', name: 'Emma Chen', grade: '8th Grade', avatar: 'EC' },
    { id: 'james-wilson', name: 'James Wilson', grade: '6th Grade', avatar: 'JW' },
  ];

  const trackingCategories = [
    {
      id: 'academics',
      name: 'Academic Performance',
      icon: BookOpen,
      description: 'Grades, test scores, and learning progress',
      metrics: ['GPA', 'Standardized Tests', 'Subject Strengths', 'Improvement Areas']
    },
    {
      id: 'extracurricular',
      name: 'Extracurricular Activities',
      icon: Users,
      description: 'Sports, clubs, leadership roles, and achievements',
      metrics: ['Leadership Positions', 'Awards', 'Participation', 'Skills Development']
    },
    {
      id: 'character',
      name: 'Character Development',
      icon: Target,
      description: 'Personal growth, values, and social skills',
      metrics: ['Community Service', 'Peer Relationships', 'Teacher Feedback', 'Personal Growth']
    },
    {
      id: 'college-prep',
      name: 'College Preparation',
      icon: Award,
      description: 'Long-term planning and skill building',
      metrics: ['Course Planning', 'Skill Building', 'Interest Exploration', 'Goal Setting']
    }
  ];

  const quarterlyData = {
    'emma-chen': {
      'Q1 2024': {
        gpa: 3.7,
        activities: ['Debate Team Captain', 'Science Fair Participant', 'Volunteer Tutor'],
        achievements: ['Regional Debate Championship', 'Honor Roll'],
        goals: ['Improve Math Grade', 'Start Coding Club'],
        progress: 'Strong start to the year with leadership in debate team showing excellent communication skills.'
      },
      'Q2 2024': {
        gpa: 3.8,
        activities: ['Debate Team Captain', 'Coding Club Founder', 'Volunteer Tutor', 'Math Olympiad'],
        achievements: ['State Debate Qualifier', 'Coding Club Successfully Launched'],
        goals: ['Maintain GPA above 3.8', 'Expand Coding Club Membership'],
        progress: 'Significant improvement in math and successful launch of coding club demonstrates initiative and leadership.'
      },
      'Current Quarter': {
        gpa: 3.9,
        activities: ['Debate Team Captain', 'Coding Club President', 'Math Tutor', 'Student Council'],
        achievements: ['Perfect Attendance', 'Student of the Month'],
        goals: ['Prepare for High School Applications', 'Mentor New Coding Club Members'],
        progress: 'Exceptional quarter with continued academic improvement and expanded leadership roles.'
      }
    }
  };

  const schoolRecommendations = [
    {
      school: 'Sidwell Friends School',
      fitScore: 92,
      reasoning: 'Strong academic performance and leadership experience align perfectly with their collaborative learning environment.',
      strengths: ['Academic Excellence', 'Leadership Skills', 'Community Service'],
      considerations: ['Continue debate team preparation', 'Strengthen science portfolio']
    },
    {
      school: 'The Potomac School',
      fitScore: 88,
      reasoning: 'STEM interests and coding club leadership match their innovation-focused curriculum.',
      strengths: ['STEM Leadership', 'Initiative', 'Academic Rigor'],
      considerations: ['Develop arts interests', 'Expand community involvement']
    }
  ];

  const currentStudent = students.find(s => s.id === selectedStudent);
  const currentData = quarterlyData[selectedStudent as keyof typeof quarterlyData]?.['Current Quarter'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Student Tracking System</h1>
              <p className="text-lg text-gray-600 mt-2">Comprehensive progress monitoring and college planning</p>
            </div>
            <div className="flex items-center gap-4">
              <select 
                value={selectedStudent}
                onChange={(e) => setSelectedStudent(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              >
                {students.map(student => (
                  <option key={student.id} value={student.id}>{student.name}</option>
                ))}
              </select>
              <button className="bg-primary-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors">
                <PlusCircle className="w-5 h-5 mr-2 inline" />
                Add Entry
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Student Overview */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-xl">
                {currentStudent?.avatar}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{currentStudent?.name}</h2>
                <p className="text-gray-600">{currentStudent?.grade} • Academic Year 2024-2025</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary-500">{currentData?.gpa}</div>
              <div className="text-sm text-gray-600">Current GPA</div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="text-2xl font-bold text-blue-600">{currentData?.activities.length}</div>
              <div className="text-sm text-blue-800">Active Activities</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <div className="text-2xl font-bold text-green-600">{currentData?.achievements.length}</div>
              <div className="text-sm text-green-800">Recent Achievements</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <div className="text-2xl font-bold text-purple-600">12</div>
              <div className="text-sm text-purple-800">Quarters Tracked</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-xl">
              <div className="text-2xl font-bold text-orange-600">95%</div>
              <div className="text-sm text-orange-800">Goal Completion</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Progress Tracking */}
          <div className="lg:col-span-2 space-y-6">
            {/* Academic Performance Chart */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Academic Performance Trend</h3>
                <select 
                  value={selectedTimeframe}
                  onChange={(e) => setSelectedTimeframe(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="current-year">Current Year</option>
                  <option value="last-year">Last Year</option>
                  <option value="all-time">All Time</option>
                </select>
              </div>
              
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">GPA Trend Chart</p>
                  <p className="text-sm text-gray-500">3.7 → 3.8 → 3.9 (Improving)</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-gray-900">3.8</div>
                  <div className="text-sm text-gray-600">Average GPA</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-lg font-bold text-green-600">+0.2</div>
                  <div className="text-sm text-green-800">This Quarter</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-lg font-bold text-blue-600">A-</div>
                  <div className="text-sm text-blue-800">Predicted Final</div>
                </div>
              </div>
            </div>

            {/* Tracking Categories */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Progress Categories</h3>
              <div className="space-y-4">
                {trackingCategories.map(category => {
                  const Icon = category.icon;
                  return (
                    <div key={category.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{category.name}</h4>
                            <div className="text-sm text-green-600 font-medium">On Track</div>
                          </div>
                          <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {category.metrics.map(metric => (
                              <span key={metric} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                {metric}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quarterly Report */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Current Quarter Report</h3>
                <button className="text-primary-500 hover:text-primary-600 font-medium text-sm flex items-center gap-1">
                  <FileText className="w-4 h-4" />
                  Generate Full Report
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Current Activities</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {currentData?.activities.map(activity => (
                      <div key={activity} className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-sm">
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Recent Achievements</h4>
                  <div className="space-y-2">
                    {currentData?.achievements.map(achievement => (
                      <div key={achievement} className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-yellow-500" />
                        <span className="text-gray-700 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Current Goals</h4>
                  <div className="space-y-2">
                    {currentData?.goals.map(goal => (
                      <div key={goal} className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700 text-sm">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Progress Summary</h4>
                  <p className="text-gray-700 text-sm">{currentData?.progress}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - School Recommendations */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">School Recommendations</h3>
              <div className="space-y-4">
                {schoolRecommendations.map(school => (
                  <div key={school.school} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900">{school.school}</h4>
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                        {school.fitScore}% Fit
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{school.reasoning}</p>
                    
                    <div className="mb-3">
                      <h5 className="font-medium text-gray-900 text-sm mb-1">Strengths</h5>
                      <div className="flex flex-wrap gap-1">
                        {school.strengths.map(strength => (
                          <span key={strength} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                            {strength}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-medium text-gray-900 text-sm mb-1">Areas to Develop</h5>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {school.considerations.map(consideration => (
                          <li key={consideration}>• {consideration}</li>
                        ))}
                      </ul>
                    </div>

                    <Link 
                      href={`/schools/${school.school.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-primary-500 hover:text-primary-600 text-sm font-medium flex items-center gap-1"
                    >
                      View School Profile
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="font-medium text-blue-900">Schedule Parent Meeting</div>
                  <div className="text-sm text-blue-700">Discuss quarterly progress</div>
                </button>
                <button className="w-full text-left p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <div className="font-medium text-green-900">Update Goals</div>
                  <div className="text-sm text-green-700">Set objectives for next quarter</div>
                </button>
                <button className="w-full text-left p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                  <div className="font-medium text-purple-900">Generate Report</div>
                  <div className="text-sm text-purple-700">Create comprehensive summary</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}