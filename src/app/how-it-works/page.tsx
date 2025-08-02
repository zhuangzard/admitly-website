import Link from 'next/link';
import { Check, ChevronRight, Users, Brain, Target, Trophy, BookOpen, Calendar, MessageSquare, Award } from 'lucide-react';

export default function HowItWorksPage() {
  const detailedSteps = [
    {
      number: 1,
      title: "Create Your Family Profile",
      description: "Start your journey by telling us about your child's unique needs, interests, and your family's priorities. Our comprehensive assessment helps us understand what matters most to you.",
      features: [
        "Academic performance assessment",
        "Interest and personality inventory",
        "Learning style evaluation",
        "Family values and priorities",
        "Budget and location preferences",
        "Special needs accommodation"
      ],
      icon: Users,
      color: "primary",
      image: "👤"
    },
    {
      number: 2,
      title: "AI-Powered School Discovery",
      description: "Our advanced AI analyzes thousands of data points to match your family with schools that align perfectly with your values, goals, and requirements.",
      features: [
        "50+ factor matching algorithm",
        "Real-time school database updates",
        "Personalized fit scores",
        "Detailed school profiles",
        "Virtual tours and videos",
        "Admission requirements analysis"
      ],
      icon: Brain,
      color: "secondary",
      image: "🔍"
    },
    {
      number: 3,
      title: "Comprehensive Preparation",
      description: "Access our extensive library of resources and personalized coaching to prepare your family for the application process with confidence.",
      features: [
        "School-specific interview preparation",
        "Application essay guidance",
        "Mock interviews with feedback",
        "Parent interview coaching",
        "Timeline and deadline management",
        "Application submission support"
      ],
      icon: Target,
      color: "accent",
      image: "🎯"
    },
    {
      number: 4,
      title: "Application Success",
      description: "Submit compelling applications with our expert guidance and track your progress throughout the entire admissions process until you celebrate success.",
      features: [
        "Application review and optimization",
        "Progress tracking dashboard",
        "Decision notification support",
        "Waitlist strategy guidance",
        "Enrollment decision assistance",
        "Celebration of your success!"
      ],
      icon: Trophy,
      color: "green",
      image: "🎓"
    }
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: "Expert Content Library",
      description: "Access 100+ hours of premium content created by former admissions officers"
    },
    {
      icon: Calendar,
      title: "Personalized Timeline",
      description: "Never miss a deadline with our intelligent timeline management system"
    },
    {
      icon: MessageSquare,
      title: "One-on-One Support",
      description: "Get personalized guidance from experienced admissions consultants"
    },
    {
      icon: Award,
      title: "Success Guarantee",
      description: "95% of our families get accepted to their top choice schools"
    }
  ];

  const colorClasses = {
    primary: "from-primary-500 to-primary-600",
    secondary: "from-secondary-500 to-secondary-600",
    accent: "from-accent-500 to-accent-600",
    green: "from-green-500 to-green-600"
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">How Admitly Works</h1>
          <p className="text-xl lg:text-2xl opacity-90 mb-8">
            A simple 4-step process designed to find your perfect school match and maximize your admission success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              Start Your Journey
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/schools"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Browse Schools
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Steps Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {detailedSteps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 mb-20 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses[step.color as keyof typeof colorClasses]} text-white rounded-2xl flex items-center justify-center font-bold text-2xl mr-6`}>
                    {step.number}
                  </div>
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{step.title}</h2>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className="flex-1 max-w-md">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 h-80 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10">
                    <div className={`w-32 h-32 bg-gradient-to-r ${colorClasses[step.color as keyof typeof colorClasses]} rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg`}>
                      <span className="text-6xl">{step.image}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Step {step.number}</h3>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-blue-200 rounded-full opacity-50"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-purple-200 rounded-full opacity-50"></div>
                  <div className="absolute top-1/2 right-6 w-6 h-6 bg-pink-200 rounded-full opacity-50"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Families Choose Admitly</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide everything you need to succeed in the private school admissions process, 
              all in one comprehensive platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-500" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Admissions Timeline</h2>
            <p className="text-xl text-gray-600">
              From initial consultation to enrollment, we guide you through every step of the journey
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-8">
              {[
                { title: "Initial Assessment", time: "Week 1", description: "Complete your family profile and receive personalized school recommendations" },
                { title: "School Research", time: "Weeks 2-3", description: "Explore matched schools, attend virtual tours, and narrow down your list" },
                { title: "Application Preparation", time: "Weeks 4-8", description: "Prepare essays, practice interviews, and gather required documents" },
                { title: "Application Submission", time: "Weeks 9-12", description: "Submit applications with our expert review and support" },
                { title: "Interview Process", time: "Weeks 13-16", description: "Participate in interviews with confidence using our preparation" },
                { title: "Decision & Enrollment", time: "Weeks 17-20", description: "Receive decisions and make your final enrollment choice" }
              ].map((item, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm relative z-10">
                    {index + 1}
                  </div>
                  <div className="ml-6 pb-8">
                    <div className="flex items-center mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 mr-3">{item.title}</h3>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">{item.time}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of families who have successfully found their perfect school match with Admitly. 
            Your child's bright future starts here.
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
              href="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}