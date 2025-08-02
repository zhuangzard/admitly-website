import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/sampleData';

export default function SuccessStoriesPage() {
  const detailedStories = [
    {
      student: "Emma Johnson",
      parent: "Sarah Johnson",
      location: "McLean, VA",
      school: "Riverside Preparatory Academy",
      avatar: "EJ",
      story: "When we started our school search, I was overwhelmed by the options and requirements. Admitly's AI matching system immediately identified schools that aligned with Emma's love for STEM and our family's values. The interview preparation was invaluable - Emma felt confident and prepared for every conversation. We couldn't be happier with our choice!",
      results: "Accepted to 4 out of 5 schools applied",
      grade: "6th Grade",
      year: "2024"
    },
    {
      student: "Marcus Chen",
      parent: "Michael Chen",
      location: "Bethesda, MD",
      school: "Georgetown Academy",
      avatar: "MC",
      story: "As working parents, we didn't have time to research dozens of schools individually. Admitly's platform gave us everything we needed in one place. The personalized timeline kept us organized, and the one-on-one coaching sessions were incredibly helpful. Marcus is thriving at Georgetown Academy and has already joined the robotics team!",
      results: "Full scholarship received",
      grade: "9th Grade",
      year: "2024"
    },
    {
      student: "Sofia Rodriguez",
      parent: "Amanda Rodriguez",
      location: "Arlington, VA",
      school: "Innovation STEM Academy",
      avatar: "SR",
      story: "Sofia has always been passionate about technology and innovation. Admitly helped us find schools that would nurture her interests while challenging her academically. The application support was phenomenal - they helped us craft essays that truly showcased Sofia's unique perspective. She's now part of an amazing community of young innovators.",
      results: "Accepted to top choice school",
      grade: "10th Grade",
      year: "2023"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl opacity-90 mb-8">
            Real families, real results. See how Admitly has helped thousands of students 
            find their perfect school match and achieve their dreams.
          </p>
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">10,000+</div>
              <div className="text-sm opacity-75">Families Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold">95%</div>
              <div className="text-sm opacity-75">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm opacity-75">Partner Schools</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Success Stories</h2>
            <p className="text-xl text-gray-600">
              Every student's journey is unique. Here are some inspiring stories from our community.
            </p>
          </div>

          <div className="space-y-16">
            {detailedStories.map((story, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                {/* Story Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-xl mr-4">
                      {story.avatar}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{story.student}</h3>
                      <p className="text-gray-600">{story.location} • {story.grade} • Class of {story.year}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-primary-300 mb-4" />
                    <p className="text-lg text-gray-700 italic leading-relaxed">
                      "{story.story}"
                    </p>
                    <p className="text-gray-600 mt-4">— {story.parent}</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                    <p className="text-gray-700 mb-3">{story.results}</p>
                    <div className="flex items-center text-primary-600">
                      <span className="font-medium">Now attending: {story.school}</span>
                    </div>
                  </div>
                </div>

                {/* Visual Element */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-12 h-96 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                        <span className="text-6xl">🎓</span>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">{story.school}</h4>
                      <div className="flex justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Parents Are Saying</h2>
            <p className="text-xl text-gray-600">
              Join our community of successful families
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.concat([
              {
                name: "Jennifer Lee",
                location: "Fairfax, VA",
                avatar: "JL",
                content: "The AI matching was incredibly accurate. We found schools we never would have considered that turned out to be perfect fits.",
                school: "Waldorf School of Fairfax",
                rating: 5
              },
              {
                name: "David Thompson",
                location: "Washington, DC",
                avatar: "DT",
                content: "Admitly saved us months of research and thousands of dollars compared to traditional consultants.",
                school: "Capitol Hill Montessori",
                rating: 5
              },
              {
                name: "Lisa Wang",
                location: "Rockville, MD",
                avatar: "LW",
                content: "The timeline feature kept us organized throughout the entire process. We never missed a deadline!",
                school: "Innovation STEM Academy",
                rating: 5
              }
            ]).map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of families who have found their perfect school match with Admitly. 
            Your journey to the right school starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors">
              Start Your Journey
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Browse Schools
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}