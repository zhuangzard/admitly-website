'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, X, Star, ChevronRight, HelpCircle } from 'lucide-react';
import { pricingPlans } from '@/lib/sampleData';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');
  const [showFAQ, setShowFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What's included in the free trial?",
      answer: "Your 14-day free trial includes access to our school search engine, basic assessments, and a sample of our course library. No credit card required."
    },
    {
      question: "Can I switch plans at any time?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll only pay the prorated difference. Downgrades take effect at your next billing cycle."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with our service, contact us for a full refund within 30 days of purchase."
    },
    {
      question: "How does the AI school matching work?",
      answer: "Our AI analyzes 50+ factors including academic performance, extracurricular interests, learning style, family values, budget, and location preferences to recommend schools that best match your needs."
    },
    {
      question: "Are the consultants real admissions experts?",
      answer: "Yes! Our consultant network includes former admissions officers from top private schools, experienced independent educational consultants, and specialists in various aspects of the admissions process."
    },
    {
      question: "What if my child doesn't get accepted?",
      answer: "While we have a 95% success rate, we also offer a success guarantee program with our Compass plan. We'll work with you on additional applications or provide guidance for the following year at no extra cost."
    }
  ];

  const comparison = [
    { feature: "School Search Engine", explorer: true, navigator: true, compass: true },
    { feature: "Basic Assessments", explorer: true, navigator: true, compass: true },
    { feature: "Course Library Access", explorer: "20+ hours", navigator: "50+ hours", compass: "100+ hours" },
    { feature: "AI School Matching", explorer: false, navigator: true, compass: true },
    { feature: "Personalized Interview Prep", explorer: false, navigator: true, compass: true },
    { feature: "One-on-One Coaching", explorer: false, navigator: "1 session", compass: "5+ sessions" },
    { feature: "Application Review", explorer: false, navigator: true, compass: true },
    { feature: "Dedicated Consultant", explorer: false, navigator: false, compass: true },
    { feature: "Financial Aid Guidance", explorer: false, navigator: false, compass: true },
    { feature: "Success Guarantee", explorer: false, navigator: false, compass: true },
  ];

  const monthlyPricing = {
    explorer: 29,
    navigator: 89,
    compass: 249
  };

  const getPrice = (planName: string, originalPrice: number) => {
    if (billingCycle === 'monthly') {
      return monthlyPricing[planName as keyof typeof monthlyPricing];
    }
    return originalPrice;
  };

  const getSavings = (planName: string, originalPrice: number) => {
    if (billingCycle === 'annual') {
      const monthlyTotal = monthlyPricing[planName as keyof typeof monthlyPricing] * 12;
      return Math.round(((monthlyTotal - originalPrice) / monthlyTotal) * 100);
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Start with our free trial, then choose the plan that best fits your family's needs. 
            All plans include our money-back guarantee.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'annual' ? 'monthly' : 'annual')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-500 transition-colors"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${billingCycle === 'annual' ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Annual
            </span>
            {billingCycle === 'annual' && (
              <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                Save up to 75%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => {
              const price = getPrice(plan.name.toLowerCase(), plan.price);
              const savings = getSavings(plan.name.toLowerCase(), plan.price);
              
              return (
                <div
                  key={index}
                  className={`bg-white rounded-3xl shadow-lg overflow-hidden ${
                    plan.featured ? 'ring-2 ring-primary-500 scale-105 relative' : ''
                  }`}
                >
                  {plan.featured && (
                    <div className="bg-primary-500 text-white text-center py-3 font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-5xl font-bold">${price}</span>
                        <span className="text-gray-500">/{billingCycle === 'annual' ? 'year' : 'month'}</span>
                      </div>
                      
                      {billingCycle === 'annual' && plan.originalPrice && (
                        <div className="mb-2">
                          <span className="text-gray-400 line-through text-lg">
                            ${monthlyPricing[plan.name.toLowerCase() as keyof typeof monthlyPricing] * 12}/year
                          </span>
                        </div>
                      )}
                      
                      {savings > 0 && (
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                          Save {savings}%
                        </div>
                      )}
                      
                      <p className="text-gray-600">{plan.description}</p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`w-full py-4 rounded-2xl font-bold transition-all ${
                        plan.featured
                          ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {plan.cta}
                    </button>
                    
                    {plan.name === 'Explorer' && (
                      <p className="text-center text-sm text-gray-500 mt-3">
                        14-day free trial • No credit card required
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare Plans</h2>
            <p className="text-xl text-gray-600">See exactly what's included in each plan</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Features</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900">Explorer</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900 bg-primary-50">Navigator</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900">Compass</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparison.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {typeof row.explorer === 'boolean' ? (
                          row.explorer ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-700">{row.explorer}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center bg-primary-50">
                        {typeof row.navigator === 'boolean' ? (
                          row.navigator ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-700 font-medium">{row.navigator}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {typeof row.compass === 'boolean' ? (
                          row.compass ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-700">{row.compass}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Got questions? We have answers.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setShowFAQ(showFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-gray-400 transform transition-transform ${
                      showFAQ === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {showFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Start Your Free Trial Today</h2>
          <p className="text-xl mb-8 opacity-90">
            No credit card required. Full access to our platform for 14 days. 
            Cancel anytime with no questions asked.
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
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}