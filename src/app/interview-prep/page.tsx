'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Play, Pause, RotateCcw, CheckCircle, Clock, Target, BookOpen, Video, Mic, Star } from 'lucide-react';

export default function InterviewPrepPage() {
  const [selectedSchool, setSelectedSchool] = useState('sidwell-friends');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [completedQuestions, setCompletedQuestions] = useState(new Set());

  const schools = [
    { id: 'sidwell-friends', name: 'Sidwell Friends School', type: 'Progressive Quaker', difficulty: 'High' },
    { id: 'potomac-school', name: 'The Potomac School', type: 'Traditional Prep', difficulty: 'High' },
    { id: 'episcopal-high', name: 'Episcopal High School', type: 'Traditional Religious', difficulty: 'Medium-High' },
    { id: 'maret-school', name: 'Maret School', type: 'Progressive Academic', difficulty: 'Medium' },
  ];

  const questionCategories = [
    {
      id: 'academic',
      name: 'Academic Interests',
      icon: BookOpen,
      questions: 15,
      description: 'Questions about your academic strengths and learning style'
    },
    {
      id: 'personal',
      name: 'Personal Values',
      icon: Target,
      questions: 12,
      description: 'Questions about character, values, and personal growth'
    },
    {
      id: 'school-specific',
      name: 'School-Specific',
      icon: Star,
      questions: 18,
      description: 'Questions tailored to your target school\'s values and culture'
    },
    {
      id: 'parent',
      name: 'Parent Interview',
      icon: Video,
      questions: 10,
      description: 'Common questions asked to parents during the interview process'
    }
  ];

  const sampleQuestions = {
    'sidwell-friends': [
      "How do you approach learning when you encounter a challenging concept?",
      "Tell us about a time when you stood up for something you believed in.",
      "How would you contribute to our Quaker community values of simplicity, peace, integrity, community, and equality?",
      "What does collaborative learning mean to you?",
      "How do you handle disagreements with peers or teachers?"
    ],
    'potomac-school': [
      "What academic subject excites you most and why?",
      "Describe a leadership experience you've had.",
      "How do you balance academic excellence with other interests?",
      "What would you bring to our school community?",
      "Tell us about a book that has influenced your thinking."
    ]
  };

  const currentQuestions = sampleQuestions[selectedSchool as keyof typeof sampleQuestions] || sampleQuestions['sidwell-friends'];

  const practiceStats = {
    totalQuestions: 55,
    completed: completedQuestions.size,
    averageScore: 7.4,
    timeSpent: '2h 15m'
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording && !completedQuestions.has(currentQuestion)) {
      setCompletedQuestions(new Set([...completedQuestions, currentQuestion]));
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">AI Interview Preparation</h1>
              <p className="text-lg text-gray-600 mt-2">Practice with school-specific questions and get AI-powered feedback</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">{practiceStats.completed}</div>
                <div className="text-sm text-gray-600">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-500">{practiceStats.averageScore}/10</div>
                <div className="text-sm text-gray-600">Avg Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-500">{practiceStats.timeSpent}</div>
                <div className="text-sm text-gray-600">Time Spent</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Question Categories & School Selection */}
          <div className="lg:col-span-1">
            {/* School Selection */}
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Target School</h3>
              <select 
                value={selectedSchool}
                onChange={(e) => setSelectedSchool(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {schools.map(school => (
                  <option key={school.id} value={school.id}>{school.name}</option>
                ))}
              </select>
              <div className="mt-3 text-sm text-gray-600">
                <div>Type: {schools.find(s => s.id === selectedSchool)?.type}</div>
                <div>Difficulty: {schools.find(s => s.id === selectedSchool)?.difficulty}</div>
              </div>
            </div>

            {/* Question Categories */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Question Categories</h3>
              <div className="space-y-3">
                {questionCategories.map(category => {
                  const Icon = category.icon;
                  return (
                    <div key={category.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <Icon className="w-5 h-5 text-primary-500 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{category.name}</div>
                        <div className="text-sm text-gray-600">{category.questions} questions</div>
                        <div className="text-xs text-gray-500 mt-1">{category.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content - Interview Practice */}
          <div className="lg:col-span-3">
            {/* Progress Bar */}
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Progress</span>
                <span className="text-sm text-gray-600">{currentQuestion + 1} of {currentQuestions.length}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / currentQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Interview Practice Area */}
            <div className="bg-white rounded-2xl shadow-sm">
              {/* Question Display */}
              <div className="p-8 border-b">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    Question {currentQuestion + 1}
                  </span>
                  {completedQuestions.has(currentQuestion) && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 leading-relaxed">
                  {currentQuestions[currentQuestion]}
                </h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold text-sm">💡</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-900 mb-1">AI Tip</h4>
                      <p className="text-blue-800 text-sm">
                        Structure your answer with a specific example. Start with the situation, explain your action, and conclude with the positive result or learning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recording Area */}
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    <div className={`w-full h-full rounded-full border-4 ${isRecording ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-100'} flex items-center justify-center transition-all duration-300`}>
                      <Mic className={`w-12 h-12 ${isRecording ? 'text-red-500' : 'text-gray-400'}`} />
                      {isRecording && (
                        <div className="absolute inset-0 rounded-full border-4 border-red-500 animate-pulse"></div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={toggleRecording}
                      className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                        isRecording 
                          ? 'bg-red-500 text-white hover:bg-red-600' 
                          : 'bg-primary-500 text-white hover:bg-primary-600'
                      }`}
                    >
                      {isRecording ? (
                        <>
                          <Pause className="w-5 h-5 mr-2 inline" />
                          Stop Recording
                        </>
                      ) : (
                        <>
                          <Play className="w-5 h-5 mr-2 inline" />
                          Start Recording
                        </>
                      )}
                    </button>
                    
                    <button
                      onClick={() => setCurrentQuestion(currentQuestion)}
                      className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <RotateCcw className="w-5 h-5 mr-2 inline" />
                      Retry
                    </button>
                  </div>

                  {isRecording && (
                    <div className="mt-4 flex items-center justify-center gap-2 text-red-600">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Recording in progress...</span>
                    </div>
                  )}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={prevQuestion}
                    disabled={currentQuestion === 0}
                    className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous Question
                  </button>

                  <div className="text-sm text-gray-600">
                    Question {currentQuestion + 1} of {currentQuestions.length}
                  </div>

                  <button
                    onClick={nextQuestion}
                    disabled={currentQuestion === currentQuestions.length - 1}
                    className="px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next Question
                  </button>
                </div>
              </div>
            </div>

            {/* AI Feedback Section */}
            {completedQuestions.has(currentQuestion) && (
              <div className="bg-white rounded-2xl shadow-sm mt-6 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Feedback & Analysis</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-500 mb-1">8.2/10</div>
                    <div className="text-sm text-gray-600">Content Quality</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-500 mb-1">7.8/10</div>
                    <div className="text-sm text-gray-600">Confidence Level</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-500 mb-1">1:45</div>
                    <div className="text-sm text-gray-600">Response Time</div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-medium text-green-900 mb-2">Strengths</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Used specific examples to illustrate your points</li>
                    <li>• Showed understanding of collaborative learning</li>
                    <li>• Maintained good eye contact and speaking pace</li>
                  </ul>
                </div>

                <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <h4 className="font-medium text-amber-900 mb-2">Areas for Improvement</h4>
                  <ul className="text-amber-800 text-sm space-y-1">
                    <li>• Consider adding more detail about the outcome</li>
                    <li>• Practice connecting your answer more directly to school values</li>
                    <li>• Work on reducing filler words ("um", "like")</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}