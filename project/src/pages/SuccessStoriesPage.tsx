import React from 'react';
import { TrendingUp, Users, Clock, DollarSign, Star, ArrowRight } from 'lucide-react';

const SuccessStoriesPage = () => {
  const caseStudies = [
    {
      industry: 'Manufacturing',
      company: 'Global Steel Works',
      employees: '250+ employees',
      challenge: 'Manual attendance tracking across multiple shifts was causing payroll errors and consuming 20+ hours weekly of HR administrative time.',
      solution: 'Implemented UpOne\'s AI Telegram Attendance Bot with location-based tracking and automated salary calculations.',
      implementation: 'Deployed across 3 manufacturing sites with custom shift patterns and overtime calculations.',
      results: [
        { metric: '95%', description: 'Reduction in payroll errors' },
        { metric: '18 hours', description: 'Weekly time savings' },
        { metric: '$50K', description: 'Annual cost savings' },
        { metric: '98%', description: 'Employee satisfaction' },
      ],
      testimonial: 'UpOne transformed our HR operations completely. What used to take our team days now happens automatically with perfect accuracy.',
      author: 'Sarah Johnson, HR Director',
      color: 'blue',
    },
    {
      industry: 'Hospitality',
      company: 'Paradise Hotel Group',
      employees: '180+ employees',
      challenge: 'Managing staff across multiple hotel locations with varying schedules, high turnover, and complex leave management requirements.',
      solution: 'Deployed comprehensive UpOne platform including attendance tracking, leave management, and AI recruitment assistant.',
      implementation: 'Rolled out across 5 hotel properties with integration to existing PMS systems.',
      results: [
        { metric: '60%', description: 'Faster hiring process' },
        { metric: '85%', description: 'Reduction in scheduling conflicts' },
        { metric: '40%', description: 'Decrease in turnover rate' },
        { metric: '$75K', description: 'Annual operational savings' },
      ],
      testimonial: 'The AI recruitment assistant helped us find better candidates faster, and the automated scheduling eliminated most of our HR headaches.',
      author: 'Michael Chen, Operations Manager',
      color: 'orange',
    },
    {
      industry: 'Technology',
      company: 'InnovateTech Startup',
      employees: '45+ employees',
      challenge: 'Rapid growth startup needed scalable HR solutions without the overhead of a large HR department.',
      solution: 'Implemented UpOne\'s complete suite with custom automations for onboarding, training, and performance tracking.',
      implementation: 'Phased rollout starting with core attendance features, expanding to full HR automation.',
      results: [
        { metric: '3x', description: 'Faster employee onboarding' },
        { metric: '90%', description: 'Reduction in HR admin work' },
        { metric: '100%', description: 'Remote work compliance' },
        { metric: '$30K', description: 'Avoided HR hiring costs' },
      ],
      testimonial: 'UpOne allowed us to scale from 15 to 45 employees without hiring additional HR staff. It\'s like having a full HR department in your pocket.',
      author: 'Lisa Rodriguez, CEO',
      color: 'green',
    },
    {
      industry: 'Retail',
      company: 'Fashion Forward Stores',
      employees: '120+ employees',
      challenge: 'Managing seasonal workforce fluctuations, complex scheduling across multiple store locations, and high administrative burden.',
      solution: 'Integrated UpOne\'s AI-powered scheduling and attendance system with custom retail-specific features.',
      implementation: 'Deployed across 8 retail locations with mobile-first approach for frontline workers.',
      results: [
        { metric: '70%', description: 'Reduction in scheduling time' },
        { metric: '45%', description: 'Decrease in no-shows' },
        { metric: '80%', description: 'Improvement in shift coverage' },
        { metric: '$40K', description: 'Annual labor cost savings' },
      ],
      testimonial: 'Managing our seasonal workforce used to be a nightmare. Now it\'s completely automated and our managers can focus on customer service.',
      author: 'David Kim, Regional Manager',
      color: 'purple',
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'from-blue-50 to-blue-100',
          accent: 'text-blue-600',
          border: 'border-blue-200',
        };
      case 'orange':
        return {
          bg: 'from-orange-50 to-orange-100',
          accent: 'text-orange-600',
          border: 'border-orange-200',
        };
      case 'green':
        return {
          bg: 'from-green-50 to-green-100',
          accent: 'text-green-600',
          border: 'border-green-200',
        };
      case 'purple':
        return {
          bg: 'from-purple-50 to-purple-100',
          accent: 'text-purple-600',
          border: 'border-purple-200',
        };
      default:
        return {
          bg: 'from-gray-50 to-gray-100',
          accent: 'text-gray-600',
          border: 'border-gray-200',
        };
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how companies across different industries have transformed their HR operations 
              and achieved remarkable results with UpOne's AI-powered solutions.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-500">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div>Companies Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">90%</div>
                <div>Average Time Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">$2M+</div>
                <div>Total Cost Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => {
              const colors = getColorClasses(study.color);
              return (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${colors.bg} p-8 ${colors.border} border-b`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="flex items-center mb-2">
                          <span className={`${colors.accent} text-sm font-semibold uppercase tracking-wide`}>
                            {study.industry}
                          </span>
                          <span className="mx-2 text-gray-400">•</span>
                          <span className="text-gray-600 text-sm">{study.employees}</span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">{study.company}</h2>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                          <span className="ml-2 text-gray-600 font-medium">5.0</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                      {/* Left Column */}
                      <div className="space-y-8">
                        {/* Challenge */}
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                              <span className="text-red-600 font-bold">!</span>
                            </div>
                            The Challenge
                          </h3>
                          <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                        </div>

                        {/* Solution */}
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <div className={`w-8 h-8 bg-gradient-to-r ${colors.bg} rounded-lg flex items-center justify-center mr-3`}>
                              <span className={`${colors.accent} font-bold`}>✓</span>
                            </div>
                            Our Solution
                          </h3>
                          <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                        </div>

                        {/* Implementation */}
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                              <Clock className="w-4 h-4 text-blue-600" />
                            </div>
                            Implementation
                          </h3>
                          <p className="text-gray-600 leading-relaxed">{study.implementation}</p>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-8">
                        {/* Results */}
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                              <TrendingUp className="w-4 h-4 text-green-600" />
                            </div>
                            Results Achieved
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            {study.results.map((result, resultIndex) => (
                              <div key={resultIndex} className="bg-gray-50 rounded-lg p-4 text-center">
                                <div className={`text-3xl font-bold ${colors.accent} mb-2`}>
                                  {result.metric}
                                </div>
                                <div className="text-gray-600 text-sm">{result.description}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Testimonial */}
                        <div className={`bg-gradient-to-r ${colors.bg} rounded-xl p-6 ${colors.border} border`}>
                          <div className="flex items-start">
                            <div className="text-4xl text-gray-300 mr-4">"</div>
                            <div>
                              <p className="text-gray-700 italic mb-4 leading-relaxed">
                                {study.testimonial}
                              </p>
                              <div className="flex items-center">
                                <div className={`w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold mr-3`}>
                                  {study.author.split(' ')[0].charAt(0)}
                                </div>
                                <div>
                                  <div className="font-semibold text-gray-900">{study.author}</div>
                                  <div className="text-gray-600 text-sm">{study.company}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have transformed their HR operations with UpOne. 
            Let's discuss how we can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              Schedule Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStoriesPage;