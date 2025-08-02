'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Home, 
  Search, 
  BookOpen, 
  Calendar, 
  MessageSquare, 
  Settings, 
  Bell, 
  ChevronRight,
  Target,
  Clock,
  CheckCircle
} from 'lucide-react';
import { sampleSchools } from '@/lib/sampleData';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const navigationItems = [
    { name: 'Overview', href: '#overview', icon: Home, id: 'overview' },
    { name: 'School Search', href: '/schools', icon: Search, id: 'search' },
    { name: 'My Courses', href: '#courses', icon: BookOpen, id: 'courses' },
    { name: 'Calendar', href: '#calendar', icon: Calendar, id: 'calendar' },
    { name: 'Messages', href: '#messages', icon: MessageSquare, id: 'messages' },
    { name: 'Settings', href: '#settings', icon: Settings, id: 'settings' },
  ];

  const progressStats = [
    {
      title: 'Profile Complete',
      value: '85%',
      change: '+5% this week',
      icon: Target,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Schools Explored',
      value: '12',
      change: '+3 this week',
      icon: Search,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Courses Completed',
      value: '8',
      change: '+2 this week',
      icon: BookOpen,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Days to Deadline',
      value: '45',
      change: 'Applications due',
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  const recommendedSchools = sampleSchools.slice(0, 3);

  const upcomingTasks = [
    {
      title: 'Complete Parent Interview Course',
      dueDate: 'Due in 3 days',
      priority: 'high',
      completed: false,
      type: 'course'
    },
    {
      title: 'Submit Riverside Prep Application',
      dueDate: 'Due in 1 week',
      priority: 'high',
      completed: false,
      type: 'application'
    },
    {
      title: 'Schedule Georgetown Academy Visit',
      dueDate: 'Due in 10 days',
      priority: 'medium',
      completed: false,
      type: 'visit'
    },
    {
      title: 'Review Financial Aid Options',
      dueDate: 'Due in 2 weeks',
      priority: 'medium',
      completed: true,
      type: 'research'
    },
    {
      title: 'Practice Interview Questions',
      dueDate: 'Due in 5 days',
      priority: 'low',
      completed: false,
      type: 'practice'
    }
  ];

  const recentActivity = [
    { action: 'Completed "School Interview Basics" course', time: '2 hours ago', type: 'course' },
    { action: 'Added Potomac Girls School to favorites', time: '1 day ago', type: 'favorite' },
    { action: 'Scheduled consultation with Sarah Mitchell', time: '2 days ago', type: 'meeting' },
    { action: 'Downloaded Georgetown Academy application', time: '3 days ago', type: 'download' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] bg-white shadow-lg overflow-y-auto">
          <div className="p-6">
            {/* User Profile */}
            <div className="flex items-center mb-8 p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold mr-3">
                SJ
              </div>
              <div>
                <div className="font-semibold text-gray-900">Sarah Johnson</div>
                <div className="text-sm text-gray-600">Parent • Navigator Plan</div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => item.id !== 'search' && setActiveTab(item.id)}
                    className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.name}
                    {item.name === 'Messages' && (
                      <span className="ml-auto bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
                        3
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Quick Actions */}
            <div className="mt-8 p-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg text-white">
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm opacity-90 mb-3">
                Schedule a consultation with our experts
              </p>
              <button className="bg-white text-primary-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                Book Session
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-64 flex-1 p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, Sarah!</h1>
              <p className="text-gray-600">Let&apos;s continue Emma&apos;s school search journey</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-lg hover:bg-gray-100 relative">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="font-bold text-primary-700">SJ</span>
              </div>
            </div>
          </div>

          {/* Progress Overview */}
          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            {progressStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 mb-2">{stat.title}</div>
                  <div className="text-sm text-green-600">{stat.change}</div>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recommended Schools */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Recommended for Emma</h3>
                  <Link
                    href="/schools"
                    className="text-primary-500 hover:text-primary-600 font-medium text-sm flex items-center gap-1"
                  >
                    View All
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className="space-y-4">
                  {recommendedSchools.map((school, index) => (
                    <div key={index} className="border border-gray-100 rounded-lg p-4 hover:border-primary-200 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold text-gray-900">{school.name}</h4>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                              {school.matchScore}% Match
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{school.location}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>{school.grades}</span>
                            <span>{school.tuition}</span>
                            <span>{school.classSize}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="bg-primary-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors">
                            View
                          </button>
                          <button className="border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Upcoming Tasks */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Tasks</h3>
                <div className="space-y-3">
                  {upcomingTasks.slice(0, 4).map((task, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        task.completed ? 'bg-green-500' : 
                        task.priority === 'high' ? 'bg-red-500' :
                        task.priority === 'medium' ? 'bg-yellow-500' : 'bg-gray-300'
                      }`}></div>
                      <div className="flex-1">
                        <div className={`text-sm ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                          {task.title}
                        </div>
                        <div className="text-xs text-gray-500">{task.dueDate}</div>
                      </div>
                      {task.completed && <CheckCircle className="w-4 h-4 text-green-500" />}
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 text-primary-500 hover:text-primary-600 font-medium text-sm">
                  View All Tasks
                </button>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                      <div>
                        <div className="text-sm text-gray-900">{activity.action}</div>
                        <div className="text-xs text-gray-500">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}